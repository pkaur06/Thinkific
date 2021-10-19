const apiHeaders = require("../../fixtures/apidetails.json");
describe('API Test-Verify that Instructor is added',()=>
{
   let instDetails
  beforeEach(() =>{
    cy.request( {
       method: 'GET',
       url:    Object.values(apiHeaders.url).toString(),
       headers: apiHeaders.header
       }).as('instructors')
    
    cy.fixture('instructordetails.json').then((data)=>{
        instDetails =data
    })
  }) 
   
    // verify status is 200
    it("Verify API status as 200", ()=>
    { 
        cy.get('@instructors')
        .its('status')
        .should('equal', 200)
    });

    // verify the intructors created during UI task is shown in instructors' list
    it("Verify Newly Created Instructor exists in list", ()=>
    {
       cy.get('@instructors')
       .its('body').then((res) => {      
       var temp,objCount = res.items.length;
       for ( var x=0; x < objCount ; x++ ) {
          var curItem = res.items[x];
          if((instDetails.usrFirstName===curItem.first_name) &&(instDetails.usrLastName===curItem.last_name)&&(instDetails.usrEmail===curItem.email)&&(instDetails.usrTitle===curItem.title))
          {       
               console.log('match FOUND at position;', x)
               temp = curItem
          }
        }
       expect(temp.first_name).to.equal(instDetails.usrFirstName)
       expect(temp.last_name).to.equal(instDetails.usrLastName)
       expect(temp.email).to.equal(instDetails.usrEmail)
       expect(temp.title).to.equal(instDetails.usrTitle)
     });
  });        
})
