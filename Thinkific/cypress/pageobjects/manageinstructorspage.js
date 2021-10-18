export function toggleIcon(){
 cy.get('#menuToggle > .Icon_toga-icon__1').click()
}

export function manageLearningLink(){
       cy.contains(' MANAGE LEARNING CONTENT ').click()
    
}

export function instructorLink(){
      cy.get("[href='/manage/instructors']").click()

}

export function addNewInstructor(){
   cy.get('.button--primary.button--icon-only').click()
}

 export function clickSearch()
{  
     cy.get('#btn-search').click()
}

export function inputFirstName(firstname)
{    
cy.get('#instructor_first_name').type(firstname)
}

export function inputLastName(lastname)
{  
cy.get('#instructor_last_name').type(lastname)
}

export function inputEmail(email)
{  
cy.get('#instructor_email').type(email)
}

export function inputTitle(title)
{  
cy.get('#instructor_title').type(title)
}

export function saveButton(){
    cy.get('.button.button-submit.button.button--primary.save-button').click()
}
   
export function validateToastMsg(expectedMsg){
    cy.get('.Toast_toast__container__29',{timeout: 3000}).should('be.visible')
     cy.get('.Toast_toast__container__29').invoke('text')
     .then((text)=>{
       const toastText = text;
       expect(toastText).to.contain(expectedMsg);
     })
}

export function manageInstructorsPage(){
    //click toggle icon
    cy.get('#menuToggle > .Icon_toga-icon__1').click()
    //click manage learning link
    cy.get('.sidebar__icon.toga-product-icon.toga-product-icon-manage').click()
   //click instructor link
    cy.get('#collapseCourses > .sidebar__list > :nth-child(3)').click()
}

