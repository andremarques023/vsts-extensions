import tl = require('vsts-task-lib/task');

async function run() {
    try {
        let buildNumber: string = tl.getInput('buildNumber', true);
        console.log(`##vso[build.updatebuildnumber]${buildNumber}`);
    } catch (error) {
        tl.setResult(tl.TaskResult.Failed, error.message);
    }
}

run();