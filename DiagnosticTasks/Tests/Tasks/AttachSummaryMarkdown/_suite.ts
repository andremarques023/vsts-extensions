import * as Assert from "assert";
import * as MockTest from "vsts-task-lib/mock-test";
import * as Path from "path";

describe("AttachSummaryMarkdown", () => {
    describe("When Markdown File Path Is Not Set", () => {
        it("It Should Fail", () => {
            // Arrange
            let testPath: string = Path.join(__dirname, "whenMarkdownFilePathIsNotSetItShouldFail.js");
            let testRunner: MockTest.MockTestRunner = new MockTest.MockTestRunner(testPath);
            let expectedOutput: string = "##vso[task.debug]loading inputs and endpoints\r\n\
##vso[task.debug]loading INPUT_SECTIONNAME\r\n\
##vso[task.debug]loaded 1\r\n\
##vso[task.debug]sectionName=CustomSection\r\n\
##vso[task.debug]task result: Failed\r\n\
##vso[task.issue type=error;]Input required: markdownFilePath\r\n\
##vso[task.complete result=Failed;]Input required: markdownFilePath\r\n";
            // Act
            testRunner.run();
            // Assert
            Assert(testRunner.stdOutContained(expectedOutput));
        });
    });

    describe("When Section Name Is Not Set", () => {
        it("It Should Fail", () => {
            // Arrange
            let testPath: string = Path.join(__dirname, "whenSectionNameIsNotSetItShouldFail.js");
            let testRunner: MockTest.MockTestRunner = new MockTest.MockTestRunner(testPath);
            let expectedOutput: string = "##vso[task.debug]loading inputs and endpoints\r\n\
##vso[task.debug]loading INPUT_MARKDOWNFILEPATH\r\n\
##vso[task.debug]loaded 1\r\n\
##vso[task.debug]task result: Failed\r\n\
##vso[task.issue type=error;]Input required: sectionName\r\n\
##vso[task.complete result=Failed;]Input required: sectionName\r\n";
            // Act
            testRunner.run();
            // Assert
            Assert(testRunner.stdOutContained(expectedOutput));
        });
    });

    describe("When Section Name Is Set And Markdown File Path Is Set", () => {
        it("It Should Attach Summary", () => {
            // Arrange
            let testPath: string = Path.join(__dirname, "whenSectionNameIsSetAndMarkdownFilePathIsSetItShouldAttachSummary.js");
            let testRunner: MockTest.MockTestRunner = new MockTest.MockTestRunner(testPath);
            let expectedOutput: string = "##vso[task.debug]loading inputs and endpoints\r\n\
##vso[task.debug]loading INPUT_MARKDOWNFILEPATH\r\n\
##vso[task.debug]loading INPUT_SECTIONNAME\r\n\
##vso[task.debug]loaded 2\r\n\
##vso[task.debug]sectionName=CustomSection\r\n\
##vso[task.debug]markdownFilePath=CustomMarkdown.md\r\n\
##vso[task.addattachment type=Distributedtask.Core.Summary;name=CustomSection;]CustomMarkdown.md\n";
            // Act
            testRunner.run();
            // Assert
            Assert(testRunner.stdOutContained(expectedOutput));
        });
    });
});