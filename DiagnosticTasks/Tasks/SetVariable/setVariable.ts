import * as TaskLib from "vsts-task-lib/task";

export class SetVariable {
    public static async runTask() {
        try {
            let name: string = TaskLib.getInput("name", true);
            let value: string = TaskLib.getInput("value", false);
            TaskLib.setVariable(name, value);
        } catch (err) {
            TaskLib.setResult(
                TaskLib.TaskResult.Failed,
                err.message);
        }
    }
}

SetVariable.runTask();