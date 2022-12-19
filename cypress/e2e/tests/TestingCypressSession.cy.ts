/// <reference types='cypress' />
import {ImdbPage} from '../pages/ImdbPage';


const imdbPage = new ImdbPage();
let testData

before(() => {
    cy.fixture('data').then((data) => {
        testData = data;
    })
})

beforeEach(() => {
    cy.log('I run before every test in every spec file!!!!!!');
    imdbPage.visit();
})

describe('Testing session cookies', () => {
    
    it('Login and save session cookie', () => {
        
        cy.auth(username, password);
        cy.visit('/account')
        imdbPage.logoIsVisible();
    }) 
    
})

describe('Testing Landing page logo present', () => {
    
    it('Logo should be displayed', () => {
        
        landingPage.logoIsVisible();
    }) 
    
})
