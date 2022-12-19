export class LandingPage {

    private elements = {
        getLogo: () => cy.get('[alt="Cypress Logo"]')    }

    visit() {
        cy.visit('https://www.imdb.com/');
    }

    fillInData(data: string) {
        // this.elements.placeholderGetElement().type(data);
    }

    logoIsVisible() {
        this.elements.getLogo().should("be.visible");
    }

    login(username: string, password : string) {
        cy.auth(username, password)
    }
}





