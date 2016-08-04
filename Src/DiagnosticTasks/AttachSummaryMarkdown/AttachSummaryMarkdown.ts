var path = require('path');
var tl = require('vsts-task-lib/task');

tl.setResourcePath(
    path.join(__dirname, 'task.json')
);

var sectionName = tl.getPathInput('sectionName', false);
var markdownFilePath = tl.getPathInput('markdownFilePath', false);
console.log(`##vso[task.addattachment type=Distributedtask.Core.Summary;name=${sectionName};]${markdownFilePath}`);