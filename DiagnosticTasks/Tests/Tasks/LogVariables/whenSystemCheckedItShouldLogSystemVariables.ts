import * as MockRun from "vsts-task-lib/mock-run";
import * as Path from "path";

let taskPath: string = Path.join(__dirname, "../../../Tasks/LogVariables/logVariables.js");
let taskMock: MockRun.TaskMockRunner = new MockRun.TaskMockRunner(taskPath);
taskMock.setInput("System", "true");
taskMock.run();