[CmdletBinding()]
param (
    [string]$ProjectFileOrFolder = $Env:BUILD_SOURCESDIRECTORY,
    [string]$Arguments,
    [string]$RestorePackages,
    [string]$UseBuildNumber
)

Import-Module "Microsoft.TeamFoundation.DistributedTask.Task.Internal"

$dnu = Get-Command -Name dnu -ErrorAction SilentlyContinue 
if (!$dnu) { 
    throw ("DNX Utility tool not found")
}

[bool]$UseBuildNumber = Convert-String $UseBuildNumber Boolean
if ($UseBuildNumber) {
    $Env:DNX_BUILD_VERSION = $Env:BUILD_BUILDNUMBER
    Write-Verbose "DNX_BUILD_VERSION: $Env:DNX_BUILD_VERSION"
    
    $updateProjectVersion = {
        param (
            [string]$ProjectFilePath
        )
        
        $projectJson = Get-Content -Path $ProjectFilePath -Raw -ErrorAction Ignore | ConvertFrom-Json -ErrorAction Ignore
        $projectJson.version = $projectJson.version.Replace("*", "$Env:DNX_BUILD_VERSION")
        ConvertTo-Json -InputObject $projectJson | Set-Content -Path $ProjectFilePath
    }
    
    if (Test-Path $ProjectFileOrFolder -PathType Leaf) {
        & $updateProjectVersion -ProjectFilePath $ProjectFileOrFolder
    }
    else {
        $projectFiles = Get-ChildItem -Path $ProjectFileOrFolder -Filter project.json -Recurse
        foreach ($projectFile in $projectFiles) {
            & $updateProjectVersion -ProjectFilePath $projectFile.FullName
        }
    }
}

[bool]$RestorePackages = Convert-String $RestorePackages Boolean
if ($RestorePackages) {
    $restoreArguments = "restore $ProjectFileOrFolder"
    Invoke-Tool -Path $dnu.Path -Arguments $restoreArguments
}

$buildArguments = "build $ProjectFileOrFolder $Arguments"
Invoke-Tool -Path $dnu.Path -Arguments $buildArguments
