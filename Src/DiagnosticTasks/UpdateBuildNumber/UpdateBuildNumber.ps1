[CmdletBinding()]
param(
    [string]$buildNumber
)

Write-Verbose "Entering script $MyInvocation.MyCommand.Name"
Write-Verbose "Parameter Values"
foreach ($key in $PSBoundParameters.Keys) {
    Write-Verbose ($key + ' = ' + $PSBoundParameters[$key])
}

Write-Host "##vso[build.updatebuildnumber]$buildNumber"
