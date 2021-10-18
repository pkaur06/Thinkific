# Thinkific Assignment

Pre-requisites:
 - Ensure that Visual Studio code is installed
 - Node.js is installed
 - Google chrome version 94.X installed in the system
 - 'git' is installed
 - Ensure that Cypress is installed

Steps:
1. Open GIT bash terminal and perform the following:
2. git clone https://github.com/pkaur06/Thinkific.git
2. Open folder "Thinkific" in Visual Studio Code.

Scenarios:
1. On the terminal, run command 'npm run cypress' to run cypress
2. Under integration>testcases folder
 - Following 3 tests exist:
   - API Test : API_Test Performs the validation check of instructor which was created in TC_01_CreateInstructor, in GET Instructors API response.
   - Web UI Tests: TC_01_CreateInstrucor and TC_02_VerifyNewInstructor, are tests for UI automation.
3. In the Cypress GUI, click API_Test to run the API test
4. Similarly, click the UI testcases to create an instructor and then verify the created instructor.
5. Or, Run all testcases in one go from Cypress GUI to perform execution in one go.

