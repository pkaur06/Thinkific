/// <reference  types="cypress" />

import {visit}  from '../../pageobjects/loginpage'
import {manageInstructorsPage,inputFirstName,inputLastName,inputEmail,inputTitle,saveButton,validateToastMsg, addNewInstructor}  from '../../pageobjects/manageinstructorspage'

describe ("Create New Instructor", ()=>{

  let instDetails, logindetails
   
    before(() =>{
        cy.fixture('instructordetails.json').then((data)=>{
         instDetails = data
        })
        cy.fixture('logindetails.json').then((data)=>{
          logindetails =data
        })
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    
    // Go to  /manage/instructors page is displayed
    it('Go to /manage/instructors page and add new instructor' ,()=>{
       cy.login(logindetails.loginEmail,logindetails.loginPwd)
       manageInstructorsPage()
       cy.url().should('include', 'parvinder-s-school')
      // create new instructor
        addNewInstructor()
        inputFirstName(instDetails.usrFirstName)
        inputLastName(instDetails.usrLastName)
        inputTitle(instDetails.usrTitle)
        inputEmail(instDetails.usrEmail)
        saveButton() 
    })
    // Verify success message
    it('Verify Success Message', ()=>{
     const expMsg = "Successfully created the instructor."
     validateToastMsg(expMsg)
    })

  
})