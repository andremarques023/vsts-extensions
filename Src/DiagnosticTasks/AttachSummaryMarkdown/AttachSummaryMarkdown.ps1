[CmdletBinding()]
param (
    [string]$SectionName,
    [string]$MarkdownFilePath
)

Write-Verbose "Entering script $MyInvocation.MyCommand.Name"
Write-Verbose "Parameter Values"
foreach($key in $PSBoundParameters.Keys) {
    Write-Verbose ($key + ' = ' + $PSBoundParameters[$key])
}

Write-Host "##vso[task.addattachment type=Distributedtask.Core.Summary;name=$SectionName;]$MarkdownFilePath"