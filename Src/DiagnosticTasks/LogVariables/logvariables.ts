import tl = require('vsts-task-lib/task');

function logVariables(variableKind: string) {
    console.log('\t******************************************************************************');
    console.log(`\tLogging: ${variableKind} Variables`);
    console.log('\t******************************************************************************');

    Object.keys(process.env).filter(function (key) {
        return key.startsWith(`${variableKind.toUpperCase()}_`);
    }).forEach(function (key) {
        console.log(`\t\t[${key}] --> [${process.env[key]}]`);
    });
}

async function run() {
    let agentVariables: boolean = tl.getBoolInput('agentVariables', false);
    if (agentVariables) {
        logVariables('Agent');
    }

    let buildVariables: boolean = tl.getBoolInput('buildVariables', false);
    if (buildVariables) {
        logVariables('Build');
    }

    let commonVariables: boolean = tl.getBoolInput('commonVariables', false);
    if (commonVariables) {
        logVariables('Common');
    }

    let releaseVariables: boolean = tl.getBoolInput('releaseVariables', false);
    if (releaseVariables) {
        logVariables('Release');
    }

    let systemVariables: boolean = tl.getBoolInput('systemVariables', false);
    if (systemVariables) {
        logVariables('System');
    }
}

run();