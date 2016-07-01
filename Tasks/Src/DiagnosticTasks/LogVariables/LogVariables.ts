var path = require('path');
var tl = require('vsts-task-lib/task');

tl.setResourcePath(path.join(__dirname, 'task.json'));

function logVariables(variableKind) {
    console.log('\t******************************************************************************');
    console.log(`\tLogging: ${variableKind} Variables`);
    console.log('\t******************************************************************************');
    
    Object.keys(process.env).filter(function(key) {
        return key.startsWith(`${variableKind.toUpperCase()}_`);
    }).forEach(function(key) {
        console.log(`\t\t[${key}] --> [${process.env[key]}]`);
    });
}

var agentVariables = tl.getPathInput('agentVariables', false);
if (agentVariables === 'true') {  
    logVariables('Agent');
}

var buildVariables = tl.getPathInput('buildVariables', false);
if (buildVariables === 'true') {
    logVariables('Build');
}

var commonVariables = tl.getPathInput('commonVariables', false);
if (commonVariables === 'true') {
    logVariables('Common');
}

var systemVariables = tl.getPathInput('systemVariables', false);
if (systemVariables === 'true') {
    logVariables('System');
}
