var path = require('path');
var tl = require('vsts-task-lib/task');

tl.setResourcePath(
    path.join(__dirname, 'task.json')
);

var buildNumber = tl.getPathInput('buildNumber', false);
console.log(`##vso[build.updatebuildnumber]${buildNumber}`);