/// <reference  types="cypress" />

import {manageInstructorsPage,clickSearch}  from '../../pageobjects/manageinstructorspage'

describe ("Verify Instructor", ()=>{

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
       
    // Verify that the instructor created is shown in list
    it('confirm that user created is shown in list of instructors', ()=>
    {  
      let values = []
       cy.login(logindetails.loginEmail,logindetails.loginPwd)
       //Go to Manage Instructors page
       manageInstructorsPage()
       cy.url().should('include', 'parvinder-s-school')
       //perform search by last name
       cy.search(instDetails.usrLastName,'instructors.last_name')
       clickSearch()
       cy.get('tbody > tr')
         .find('td')
         .each(($el) => {
            cy.wrap($el)
             .invoke('text')
             .then(text => {
                  values.push(text.trim())
                 })
              })
             .then(() => {
                expect(values).contains(instDetails.usrFirstName + ' ' +instDetails.usrLastName)
                expect(values).contains(instDetails.usrEmail)
                expect(values).contains(instDetails.usrTitle)
               })
      })
   
})