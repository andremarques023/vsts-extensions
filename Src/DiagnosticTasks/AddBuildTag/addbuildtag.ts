import tl = require('vsts-task-lib/task');

export class AddBuildTag {
    public static async runTask() {
        try {
            let tag: string = tl.getInput('tag', true);
            console.log(`##vso[build.addbuildtag]${tag}`);
        } catch (err) {
            tl.setResult(tl.TaskResult.Failed, err.message);
        }
    }
}

AddBuildTag.runTask();