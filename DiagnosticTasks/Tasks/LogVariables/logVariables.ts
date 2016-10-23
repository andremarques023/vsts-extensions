import * as TaskLib from "vsts-task-lib/task";

export class LogVariables {
    public static async runTask() {
        try {
            if (TaskLib.getBoolInput("agent")) {
                LogVariables.log("agent");
            }
            if (TaskLib.getBoolInput("build")) {
                LogVariables.log("build");
            }
            if (TaskLib.getBoolInput("common")) {
                LogVariables.log("common");
            }
            if (TaskLib.getBoolInput("release")) {
                LogVariables.log("release");
            }
            if (TaskLib.getBoolInput("system")) {
                LogVariables.log("system");
            }
        } catch (err) {
            TaskLib.setResult(
                TaskLib.TaskResult.Failed,
                err.message);
        }
    }

    private static log(variableKind: string) {
        console.log("\t******************************************************************************");
        console.log(`\tLogging ${variableKind} variables`);
        console.log("\t******************************************************************************");

        Object.keys(process.env).filter(key => {
            return key.startsWith(`${variableKind.toUpperCase()}_`);
        }).forEach(key => {
            console.log(`\t\t[${key}] --> [${process.env[key]}]`);
        });
    }
}

LogVariables.runTask();