import * as Assert from "assert";
import * as MockTest from "vsts-task-lib/mock-test";
import * as Path from "path";

describe("AddBuildTag", () => {
    describe("When Tag Is Not Set", () => {
        it("It Should Fail", () => {
            // Arrange
            let testPath: string = Path.join(__dirname, "whenTagIsNotSetItShouldFail.js");
            let testRunner: MockTest.MockTestRunner = new MockTest.MockTestRunner(testPath);
            let expectedOutput: string = "##vso[task.debug]loading inputs and endpoints\r\n\
##vso[task.debug]loaded 0\r\n\
##vso[task.debug]task result: Failed\r\n\
##vso[task.issue type=error;]Input required: tag\r\n\
##vso[task.complete result=Failed;]Input required: tag\r\n";
            // Act
            testRunner.run();
            // Assert
            Assert(testRunner.stdOutContained(expectedOutput));
        });
    });

    describe("When Tag Is Set", () => {
        it("It Should Tag The Build", () => {
            // Arrange
            let testPath: string = Path.join(__dirname, "whenTagIsSetItShouldTagTheBuild.js");
            let testRunner: MockTest.MockTestRunner = new MockTest.MockTestRunner(testPath);
            let expectedOutput = "##vso[task.debug]loading inputs and endpoints\r\n\
##vso[task.debug]loading INPUT_TAG\r\n\
##vso[task.debug]loaded 1\r\n\
##vso[task.debug]tag=BuildTagged\r\n\
##vso[build.addbuildtag]BuildTagged\n";
            // Act
            testRunner.run();
            // Assert
            Assert(testRunner.stdOutContained(expectedOutput));
        });
    });
});