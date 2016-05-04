param (
    [string]$ProjectFileOrFolder = $Env:BUILD_SOURCESDIRECTORY,
    [string]$Arguments,
    [string]$UseBuildNumber
)

Write-Verbose "Entering script $MyInvocation.MyCommand.Name"
Write-Verbose "Parameter Values"
foreach ($key in $PSBoundParameters.Keys) {
    Write-Verbose ($key + ' = ' + $PSBoundParameters[$key])
}

Import-Module "Microsoft.TeamFoundation.DistributedTask.Task.Internal"

$dnu = Get-Command -Name dnu -ErrorAction SilentlyContinue 
if (!$dnu) { 
    throw ("DNX Utility tool not found")
}

[bool]$UseBuildNumber = Convert-String $UseBuildNumber Boolean
if ($UseBuildNumber) {
    $Env:DNX_BUILD_VERSION = $Env:BUILD_BUILDNUMBER
    Write-Verbose "DNX_BUILD_VERSION: $Env:DNX_BUILD_VERSION"
}

$Arguments = "pack $ProjectFileOrFolder $Arguments"
Invoke-Tool -Path $dnu.Path -Arguments $Arguments
