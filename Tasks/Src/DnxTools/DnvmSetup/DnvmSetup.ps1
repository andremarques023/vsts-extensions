& {
    $webClient = New-Object System.Net.WebClient
    $webClient.Proxy = [System.Net.WebRequest]::DefaultWebProxy
    $webClient.Proxy.Credentials = [System.Net.CredentialCache]::DefaultNetworkCredentials
    Invoke-Expression ($webClient.DownloadString('https://raw.githubusercontent.com/aspnet/Home/dev/dnvminstall.ps1'))
}