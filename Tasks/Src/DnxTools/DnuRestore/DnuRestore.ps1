param (
    [string]$ProjectFileOrFolder = $Env:BUILD_SOURCESDIRECTORY,
    [string]$Arguments
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

$Arguments = "restore $ProjectFileOrFolder $Arguments"
Invoke-Tool -Path $dnu.Path -Arguments $Arguments
