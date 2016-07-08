[CmdletBinding()]
param (
    [string]$CommandName,
    [string]$NoPurge
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

$Arguments = "commands uninstall $CommandName"
[bool]$NoPurge = Convert-String $NoPurge Boolean
if ($NoPurge) {
    $Arguments += " --no-purge"
}

Invoke-Tool -Path $dnu.Path -Arguments $Arguments