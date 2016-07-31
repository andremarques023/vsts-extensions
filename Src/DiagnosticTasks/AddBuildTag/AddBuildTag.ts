var path = require('path');
var tl = require('vsts-task-lib/task');

tl.setResourcePath(
    path.join(__dirname, 'task.json')
);

var tag = tl.getPathInput('tag', false);
console.log(`##vso[build.addbuildtag]${tag}`);