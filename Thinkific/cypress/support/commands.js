

Cypress.Commands.add('login',(email, password) =>{
    
    cy.visit('https://www.thinkific.com/signin')
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get('.button').click()
})
Cypress.Commands.add('search', (searchterm,orderby) =>{
cy.get('#q').type(searchterm)
cy.get('#o').select(orderby)
})

Cypress.Commands.add('gotomanageinstructors',()=>{
    cy.url().should('include', 'parvinder-s-school')
    //toggle
    cy.get('#menuToggle > .Icon_toga-icon__1').click()
    //manage learning link
    cy.get('.sidebar__icon.toga-product-icon.toga-product-icon-manage').click()
   //instructor link
    cy.get('#collapseCourses > .sidebar__list > :nth-child(3)').click()
})
