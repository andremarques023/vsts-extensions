import * as TaskLib from "vsts-task-lib/task";

export class AttachSummaryMarkdown {
    public static async runTask() {
        try {
            let sectionName: string = TaskLib.getInput("sectionName", true);
            let markdownFilePath: string = TaskLib.getPathInput("markdownFilePath", true);
            console.log(`##vso[task.addattachment type=Distributedtask.Core.Summary;name=${sectionName};]${markdownFilePath}`);
        } catch (err) {
            TaskLib.setResult(
                TaskLib.TaskResult.Failed, 
                err.message);
        }
    }
}

AttachSummaryMarkdown.runTask();