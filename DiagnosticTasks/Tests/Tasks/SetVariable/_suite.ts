import * as Assert from "assert";
import * as MockTest from "vsts-task-lib/mock-test";
import * as Path from "path";

describe("SetVariable", () => {
    describe("When Name Is Not Set", () => {
        it("It Should Fail", () => {
            // Assert
            let testPath: string = Path.join(__dirname, "whenNameIsNotSetItShouldFail");
            let testRunner: MockTest.MockTestRunner = new MockTest.MockTestRunner(testPath);
            let expectedOutput: string = "##vso[task.debug]loading inputs and endpoints\r\n\
##vso[task.debug]loaded 0\r\n\
##vso[task.debug]task result: Failed\r\n\
##vso[task.issue type=error;]Input required: name\r\n\
##vso[task.complete result=Failed;]Input required: name\r\n";
            // Act
            testRunner.run();
            // Assert
            Assert(testRunner.stdOutContained(expectedOutput));
        });
    });
});

describe("SetVariable", () => {
    describe("When Value Is Not Set", () => {
        it("It Should Set Null", () => {
            // Arrange
            let testPath: string = Path.join(__dirname, "whenValueIsNotSetItShouldSetNull.js");
            let testRunner: MockTest.MockTestRunner = new MockTest.MockTestRunner(testPath);
            let expectedOutput = "##vso[task.debug]loading inputs and endpoints\r\n\
##vso[task.debug]loading INPUT_NAME\r\n\
##vso[task.debug]loaded 1\r\n\
##vso[task.debug]name=TaskVariable\r\n\
##vso[task.debug]value=null\r\n\
##vso[task.debug]set TaskVariable=\r\n\
##vso[task.setvariable variable=TaskVariable;secret=false;]\r\n";
            // Act
            testRunner.run();
            // Assert
            Assert(testRunner.stdOutContained(expectedOutput));
        });
    });
});

describe("SetVariable", () => {
    describe("When Value Is Set", () => {
        it("It Should Set Value", () => {
            // Arrange
            let testPath: string = Path.join(__dirname, "whenValueIsSetItShouldSetValue.js");
            let testRunner: MockTest.MockTestRunner = new MockTest.MockTestRunner(testPath);
            let expectedOutput = "##vso[task.debug]loading inputs and endpoints\r\n\
##vso[task.debug]loading INPUT_NAME\r\n\
##vso[task.debug]loading INPUT_VALUE\r\n\
##vso[task.debug]loaded 2\r\n\
##vso[task.debug]name=TaskVariable\r\n\
##vso[task.debug]value=AnyValue\r\n\
##vso[task.debug]set TaskVariable=AnyValue\r\n\
##vso[task.setvariable variable=TaskVariable;secret=false;]AnyValue\r\n";
            // Act
            testRunner.run();
            // Assert
            Assert(testRunner.stdOutContained(expectedOutput));
        });
    });
});