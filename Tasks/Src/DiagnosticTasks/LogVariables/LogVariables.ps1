[CmdletBinding()]
param (
    [string]$AgentVariables,
    [string]$BuildVariables,
    [string]$CommonVariables,
    [string]$SystemVariables
)

Write-Verbose "Entering script $MyInvocation.MyCommand.Name"
Write-Verbose "Parameter Values"
foreach ($key in $PSBoundParameters.Keys) {
    Write-Verbose ($key + ' = ' + $PSBoundParameters[$key])
}

ipmo "Microsoft.TeamFoundation.DistributedTask.Task.Internal"

$logVariables = {
    param(
        [string]$VariableKind
    )
@"
`t******************************************************************************
`tLogging: $($VariableKind) Variables
`t****************************************************************************** 
"@    
    gci "Env:\$($VariableKind)_*" | sort Name | % { Write-Host "`t`t[$($_.key)] --> [$($_.value)]" }
}

[bool]$AgentVariables = Convert-String $AgentVariables Boolean
if ($AgentVariables) {
    & $logVariables -VariableKind "Agent"
}

[bool]$BuildVariables = Convert-String $BuildVariables Boolean
if ($BuildVariables) {
    & $logVariables -VariableKind "Build"
}

[bool]$CommonVariables = Convert-String $CommonVariables Boolean
if ($CommonVariables) {
    & $logVariables -VariableKind "Common"
}

[bool]$SystemVariables = Convert-String $SystemVariables Boolean
if ($SystemVariables) {
    & $logVariables -VariableKind "System"
}