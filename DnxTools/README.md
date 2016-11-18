# DNX Tools for .NET Execution Environment (DNX) projects.
![Build Status](https://andremarques023.visualstudio.com/_apis/public/build/definitions/c98afab6-e9a0-4e74-85eb-4d27f9829548/24/badge "Build Status")

>__Note:__ This extension has been __deprecated__ as DNX and DNVM have been replaced by the new .NET CLI. See:
> * http://dotnet.github.io/getting-started/
> * http://github.com/dotnet/cli

Build, pack and publish projects. Install, list and restore application dependencies. Add and remove commands. Manage local and remote packages folders. The DNX Tools extension enables continuous delivery workflows for ASP.NET Core projects using DNX tooling, making it available for your builds and releases.

For more information on what the .NET Execution Environment (DNX) is and how to use it, go to [docs.asp.net](https://docs.asp.net/en/latest).

## Usage

This extension installs the following tasks:

* DNVM Setup - Installs the .NET Version Manager into the user profile directory.
* DNVM Install - Installs a runtime version of the .NET Execution Environment (DNX).
* DNU Build - Produces assemblies for the project in given directory.
* DNU Commands Install - Installs application commands.
* DNU Commands Uninstall - Uninstalls application commands.
* DNU Pack - Builds NuGet packages for the project in given directory.
* DNU Publish - Packages the application into a self-contained directory that can be launched.
* DNU Restore - Restores application dependencies, adding them to the packages directory.
* DNX Run - Uses DNX to execute commands from a command prompt.

## DNVM Setup

This task installs the .NET Version Manager into the user profile directory. The .NET Version Manager (DNVM) consists of a set of command line utilities to update and configure which version of the runtime to use.

## DNVM Install

This task installs a runtime version of the .NET Execution Environment (DNX) using the .NET Version Manager (DNVM). The following options are available when installing a runtime:

* The version to install or the path to a '.nupkg' file to install. If the version cannot be found, the latest available version will be used instead.
* The runtime flavor to install (CLR, Core CLR or Mono).
* The processor architecture of the runtime to install (x86, x64 or ARM).
* Set an alias to the installed runtime.
* The operating system that the runtime targets (Windows, OSX, Darwin or Linux).
* Skip generation of native images.
* Setup the version manager (DNVM).

## DNU Build

This task produces assemblies for a project. The following options are available for building projects:

* The project.json file or the application folder. Defaults to the root of the repository if not provided.
* Arguments to be passed to the build command.
* Restore the aplication dependencies before the build.
* Set the build number as the pre-release suffix and DNX build version.

## DNU Commands Install

This task installs application commands. The following options are available for installing commands:

* The name of the application package.
* The version of the application package.
* Overwrite package and conflicting commands.
* Do not use local cache.

## DNU Commands Uninstall

This task uninstalls application commands. The following options are available for uninstalling commands:

* The name of the command to uninstall.
* Do not try to remove orphaned packages.

## DNU Pack

This task builds NuGet packages for a project. The following options are available for packing projects:

* The project.json file or the application folder. Defaults to the root of the repository if not provided.
* Arguments to be passed to the pack command.
* Set the build number as the pre-release suffix and DNX build version when creating the NuGet package.

## DNU Publish

This task packages the application into a self-contained directory that can be launched. The following options are available when publishing projects:

* The project.json file or the application folder. Defaults to the root of the repository if not provided.
* Arguments to be passed to the publish command. 

## DNU Restore

This task restores application dependencies, adding them to the packages directory. Note that it is possible to restore packages before the build using the DNU Build task. The following options are available when restoring dependencies:

* The project.json file or the application folder. Defaults to the root of the repository if not provided.
* Arguments to be passed to the restore command.

## DNX Run

This task uses the .NET Execution Environment (DNX) to execute commands from a command prompt. The following options are available when running commands:

* The project.json file or the application folder. Defaults to the root of the repository if not provided.
* Arguments to be passed to DNX.
* Command name to run. 
* Arguments to be passed to the command.