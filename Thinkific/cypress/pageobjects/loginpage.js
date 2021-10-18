 
 export function visit(){
    cy.visit('https://www.thinkific.com/signin')
}

export function inputUserName(value){
    const uName = cy.get('#email')
    uName.clear()
    uName.type(value)
}
export function inputPassword(value){
    const uPass = cy.get('#password')
    uPass.clear()
    uPass.type(value)
}

export function clickSignIn(){
    const button = cy.get('.button')
    button.click()
}

