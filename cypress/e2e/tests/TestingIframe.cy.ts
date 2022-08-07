// /// <reference types='cypress' />
// import {LandingPage} from '../pages/LandingPage';


// const landingPage = new LandingPage();
// let testData

// before(() => {
//     cy.fixture('data').then((data) => {
//         testData = data;
//     })
// })

// beforeEach(() => {
//     cy.log('I run before every test in every spec file!!!!!!');
//     landingPage.visit();
// })

// const getIframeDocument = () => {
//     return cy
//     .get('[id="onetrust-banner-sdk"]')
//     // Cypress yields jQuery element, which has the real
//     // DOM element under property "0".
//     // From the real DOM iframe element we can get
//     // the "document" element, it is stored in "contentDocument" property
//     // Cypress "its" command can access deep properties using dot notation
//     // https://on.cypress.io/its
//     .its('0.contentDocument').should('exist')
//   }
  
//   const getIframeBody = () => {
//     // get the document
//     return getIframeDocument()
//     // automatically retries until body is loaded
//     .its('body').should('not.be.undefined')
//     // wraps "body" DOM element to allow
//     // chaining more Cypress commands, like ".find(...)"
//     .then(cy.wrap)
//   }
  
// //   it('gets the post', () => {
// //     cy.visit('index.html')
// //     getIframeBody().find('#run-button').should('have.text', 'Try it').click()
// //     getIframeBody().find('#result').should('include.text', '"delectus aut autem"')
// //   })

// describe('Testing That we can reach iFrame elements ', () => {

//     it('verify iFrame is loaded', () => {
//         cy.wait(500)
        
//         getIframeDocument({ url: '' })
//     });

//     it('verify you can click on a element in an iFrame', () => {
        
//     });
    
// })
