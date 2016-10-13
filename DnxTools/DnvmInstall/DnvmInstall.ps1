[CmdletBinding()]
param (
    [string]$VersionNuPkgOrAlias = "latest",
    [string]$Architecture = "x86",
    [string]$Runtime = "clr",
    [string]$OS = "win",
    [string]$Alias = "default",
    [string]$SkipNativeImages,
    [string]$SetupVersionManager
)

Write-Verbose "Entering script $MyInvocation.MyCommand.Name"
Write-Verbose "Parameter Values"
foreach ($key in $PSBoundParameters.Keys) {
    Write-Verbose ($key + ' = ' + $PSBoundParameters[$key])
}

Import-Module "Microsoft.TeamFoundation.DistributedTask.Task.Internal"

[bool]$SetupVersionManager = Convert-String $SetupVersionManager Boolean
if ($SetupVersionManager -eq $True) {
    & {
        $webClient = New-Object System.Net.WebClient
        $webClient.Proxy = [System.Net.WebRequest]::DefaultWebProxy
        $webClient.Proxy.Credentials = [System.Net.CredentialCache]::DefaultNetworkCredentials
        Invoke-Expression ($webClient.DownloadString('https://raw.githubusercontent.com/aspnet/Home/dev/dnvminstall.ps1'))
    }
}

$dnvm = Get-Command -Name dnvm -ErrorAction SilentlyContinue
if (!$dnvm) {
    throw ("DNVM Utility tool not found")
}

[bool]$SkipNativeImages = Convert-String $SkipNativeImages Boolean
if ($SkipNativeImages -eq $True) {
    Invoke-Command -ScriptBlock { & $env:USERPROFILE\.dnx\bin\dnvm install $VersionNuPkgOrAlias -a $Architecture -r $Runtime -OS $OS -Alias $Alias -f -p -NoNative }
}
else {
    Invoke-Command -ScriptBlock { & $env:USERPROFILE\.dnx\bin\dnvm install $VersionNuPkgOrAlias -a $Architecture -r $Runtime -OS $OS -Alias $Alias -f -p }
}
