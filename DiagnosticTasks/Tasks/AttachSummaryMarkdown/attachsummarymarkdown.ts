import * as tl from 'vsts-task-lib/task';

export class AttachSummaryMarkdown {
    public static async runTask() {
        try {
            let sectionName: string = tl.getInput('sectionName', true);
            let markdownFilePath: string = tl.getPathInput('markdownFilePath', true);
            console.log(`##vso[task.addattachment type=Distributedtask.Core.Summary;name=${sectionName};]${markdownFilePath}`);
        } catch (err) {
            tl.setResult(tl.TaskResult.Failed, err.message);
        }
    }
}

AttachSummaryMarkdown.runTask();