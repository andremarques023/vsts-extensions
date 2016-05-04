param (
    [string]$ProjectFileOrFolder = $Env:BUILD_SOURCESDIRECTORY,
    [string]$DnxArguments,
    [string]$Command,
    [string]$CommandArguments
)

Write-Verbose "Entering script $MyInvocation.MyCommand.Name"
Write-Verbose "Parameter Values"
foreach ($key in $PSBoundParameters.Keys) {
    Write-Verbose ($key + ' = ' + $PSBoundParameters[$key])
}

Import-Module "Microsoft.TeamFoundation.DistributedTask.Task.Internal" 

$dnx = Get-Command -Name dnx -ErrorAction SilentlyContinue 
if (!$dnx) { 
    throw ("DNX not found")
}

$Arguments = "$DnxArguments --project $ProjectFileOrFolder $Command $CommandArguments"
Invoke-Tool -Path $dnx.Path -Arguments $Arguments