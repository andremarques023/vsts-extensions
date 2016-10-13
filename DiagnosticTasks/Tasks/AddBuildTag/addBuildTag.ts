import * as TaskLib from "vsts-task-lib/task";

export class AddBuildTag {
    public static async runTask() {
        try {
            let tag: string = TaskLib.getInput("tag", true);
            console.log(`##vso[build.addbuildtag]${tag}`);
        } catch (err) {
            TaskLib.setResult(
                TaskLib.TaskResult.Failed, 
                err.message);
        }
    }
}

AddBuildTag.runTask();