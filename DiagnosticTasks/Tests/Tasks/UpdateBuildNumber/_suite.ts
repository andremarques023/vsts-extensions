import * as Assert from "assert";
import * as MockTest from "vsts-task-lib/mock-test";
import * as Path from "path";

describe("UpdateBuildNumber", () => {
    describe("When Build Number Is Not Set", () => {
        it("It Should Fail", () => {
            // Arrange
            let testPath: string = Path.join(__dirname, "whenBuildNumberIsNotSetItShouldFail.js");
            let testRunner: MockTest.MockTestRunner = new MockTest.MockTestRunner(testPath);
            let expectedOutput: string = "##vso[task.debug]loading inputs and endpoints\r\n\
##vso[task.debug]loaded 0\r\n\
##vso[task.debug]task result: Failed\r\n\
##vso[task.issue type=error;]Input required: buildNumber\r\n\
##vso[task.complete result=Failed;]Input required: buildNumber\r\n";
            // Act
            testRunner.run();
            // Assert
            Assert(testRunner.stdOutContained(expectedOutput));
        });
    });
});

describe("UpdateBuildNumber", () => {
    describe("When Build Number Is Set", () => {
        it("It Should Update Build Number", () => {
            // Arrange
            let testPath: string = Path.join(__dirname, "whenBuildNumberIsSetItShouldUpdateBuildNumber.js");
            let testRunner: MockTest.MockTestRunner = new MockTest.MockTestRunner(testPath);
            let expectedOutput = "##vso[task.debug]loading inputs and endpoints\r\n\
##vso[task.debug]loading INPUT_BUILDNUMBER\r\n\
##vso[task.debug]loaded 1\r\n\
##vso[task.debug]buildNumber=NewBuildNumber\r\n\
##vso[build.updatebuildnumber]NewBuildNumber\n";
            // Act
            testRunner.run();
            // Assert
            Assert(testRunner.stdOutContained(expectedOutput));
        });
    });
});