import * as MockRun from "vsts-task-lib/mock-run";
import * as Path from "path";

let taskPath: string = Path.join(__dirname, "../../../Tasks/AttachSummaryMarkdown/AttachSummaryMarkdown.js");
let taskMock: MockRun.TaskMockRunner = new MockRun.TaskMockRunner(taskPath);
taskMock.setInput("MarkdownFilePath", "CustomMarkdown.md");
taskMock.run();