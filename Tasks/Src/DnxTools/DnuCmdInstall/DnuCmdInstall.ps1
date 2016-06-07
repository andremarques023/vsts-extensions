[CmdletBinding()]
param (
    [string]$PackageName,
    [string]$PackageVersion,
    [string]$Overwrite,
    [string]$NoCache
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

$Arguments = "commands install $PackageName $PackageVersion"
[bool]$Overwrite = Convert-String $Overwrite Boolean
if ($Overwrite) {
    $Arguments += " --overwrite"
}

[bool]$NoCache = Convert-String $NoCache Boolean
if ($NoCache) {
    $Arguments += " --no-cache"
}

Invoke-Tool -Path $dnu.Path -Arguments $Arguments