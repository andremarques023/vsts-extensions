import * as MockRun from "vsts-task-lib/mock-run";
import * as Path from "path";

let taskPath: string = Path.join(__dirname, "../../../Tasks/AddBuildTag/addBuildTag.js");
let taskMock: MockRun.TaskMockRunner = new MockRun.TaskMockRunner(taskPath);
taskMock.run();