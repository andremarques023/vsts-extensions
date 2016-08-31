import tl = require('vsts-task-lib/task');

async function run() {
    try {
        let sectionName: string = tl.getInput('sectionName', true);
        let markdownFilePath: string = tl.getPathInput('markdownFilePath', true)
        console.log(`##vso[task.addattachment type=Distributedtask.Core.Summary;name=${sectionName};]${markdownFilePath}`);
    } catch (error) {
        tl.setResult(tl.TaskResult.Failed, error.message);
    }    
}

run();