import * as tl from 'vsts-task-lib/task';

export class LogVariables {
    private static log(variableKind: string) {
        console.log('\t******************************************************************************');
        console.log(`\tLogging ${variableKind} variables`);
        console.log('\t******************************************************************************');

        Object.keys(process.env).filter(function (key) {
            return key.startsWith(`${variableKind.toUpperCase()}_`);
        }).forEach(function (key) {
            console.log(`\t\t[${key}] --> [${process.env[key]}]`);
        });
    }

    public static async runTask() {
        try {
            if (tl.getBoolInput('agent')) { LogVariables.log('agent'); }
            if (tl.getBoolInput('build')) { LogVariables.log('build'); }
            if (tl.getBoolInput('common')) { LogVariables.log('common'); }
            if (tl.getBoolInput('release')) { LogVariables.log('release'); }
            if (tl.getBoolInput('system')) { LogVariables.log('system'); }
        } catch (err) {
            tl.setResult(tl.TaskResult.Failed, err.message);
        }
    }
}

LogVariables.runTask();