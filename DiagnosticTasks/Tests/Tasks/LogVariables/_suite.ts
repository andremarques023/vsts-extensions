import * as Assert from "assert";
import * as MockTest from "vsts-task-lib/mock-test";
import * as Path from "path";

describe("LogVariables", () => {
    describe("When Agent Checked", () => {
        it("Should Log Agent Variables", () => {
            // Arrange
            let testPath: string = Path.join(__dirname, "whenAgentCheckedShouldLogAgentVariables.js");
            let testRunner: MockTest.MockTestRunner = new MockTest.MockTestRunner(testPath);
            let expectedOutput: string = "##vso[task.debug]agent=true\r\n\
\t******************************************************************************\n\
\tLogging agent variables\n\
\t******************************************************************************\n";
            // Act
            testRunner.run();
            // Assert
            Assert(testRunner.stdOutContained(expectedOutput));
        });
    });

    describe("When Build Checked", () => {
        it("Should Log Build Variables", () => {
            // Arrange
            let testPath: string = Path.join(__dirname, "whenBuildCheckedShouldLogBuildVariables.js");
            let testRunner: MockTest.MockTestRunner = new MockTest.MockTestRunner(testPath);
            let expectedOutput: string = "##vso[task.debug]build=true\r\n\
\t******************************************************************************\n\
\tLogging build variables\n\
\t******************************************************************************\n";
            // Act
            testRunner.run();
            // Assert
            Assert(testRunner.stdOutContained(expectedOutput));
        });
    });

    describe("When Common Checked", () => {
        it("Should Log Common Variables", () => {
            // Arrange
            let testPath: string = Path.join(__dirname, "whenCommonCheckedItShouldLogCommonVariables.js");
            let testRunner: MockTest.MockTestRunner = new MockTest.MockTestRunner(testPath);
            let expectedOutput: string = "##vso[task.debug]common=true\r\n\
\t******************************************************************************\n\
\tLogging common variables\n\
\t******************************************************************************\n";
            // Act
            testRunner.run();
            // Assert
            Assert(testRunner.stdOutContained(expectedOutput));
        });
    });

    describe("When Release Checked", () => {
        it("Should Log Release Variables", () => {
            // Arrange
            let testPath: string = Path.join(__dirname, "whenReleaseCheckedItShouldLogReleaseVariables.js");
            let testRunner: MockTest.MockTestRunner = new MockTest.MockTestRunner(testPath);
            let expectedOutput: string = "##vso[task.debug]release=true\r\n\
\t******************************************************************************\n\
\tLogging release variables\n\
\t******************************************************************************\n";
            // Act
            testRunner.run();
            // Assert
            Assert(testRunner.stdOutContained(expectedOutput));
        });
    });

    describe("When System Checked", () => {
        it("It Should Log System Variables", () => {
            // Arrange
            let testPath: string = Path.join(__dirname, "whenSystemCheckedItShouldLogSystemVariables.js");
            let testRunner: MockTest.MockTestRunner = new MockTest.MockTestRunner(testPath);
            let expectedOutput: string = "##vso[task.debug]system=true\r\n\
\t******************************************************************************\n\
\tLogging system variables\n\
\t******************************************************************************\n";
            // Act
            testRunner.run();
            // Assert
            Assert(testRunner.stdOutContained(expectedOutput));
        });
    });
});