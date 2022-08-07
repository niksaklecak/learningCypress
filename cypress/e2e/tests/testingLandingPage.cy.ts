/// <reference types='cypress' />
import {LandingPage} from '../pages/LandingPage';


const landingPage = new LandingPage();
let testData

before(() => {
    cy.fixture('data').then((data) => {
        testData = data;
    })
})

beforeEach(() => {
    cy.log('I run before every test in every spec file!!!!!!');
    landingPage.visit();
    // landingPage.closePopUp();
})

describe('Testing Landing page displayed elements', () => {
    
    it('Is logo displayed', () => {
        
        landingPage.isLogoVisible()
        cy.pause();
        landingPage.closeBanner();
        
    }) 
    
})
