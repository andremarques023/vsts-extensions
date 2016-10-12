import tl = require('vsts-task-lib/task');

export class UpdateBuildNumber {
    public static async runTask() {
        try {
            let buildNumber: string = tl.getInput('buildNumber', true);
            console.log(`##vso[build.updatebuildnumber]${buildNumber}`);
        } catch (err) {
            tl.setResult(tl.TaskResult.Failed, err.message);
        }
    }
}

UpdateBuildNumber.runTask();