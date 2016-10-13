import * as TaskLib from "vsts-task-lib/task";

export class UpdateBuildNumber {
    public static async runTask() {
        try {
            let buildNumber: string = TaskLib.getInput("buildNumber", true);
            console.log(`##vso[build.updatebuildnumber]${buildNumber}`);
        } catch (err) {
            TaskLib.setResult(
                TaskLib.TaskResult.Failed, 
                err.message);
        }
    }
}

UpdateBuildNumber.runTask();