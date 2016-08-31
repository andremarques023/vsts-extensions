import tl = require('vsts-task-lib/task');

async function run() {
    try {
        let tag: string = tl.getInput('tag', true);
        console.log(`##vso[build.addbuildtag]${tag}`);
    } catch (error) {
        tl.setResult(tl.TaskResult.Failed, error.message)
    }
}

run();