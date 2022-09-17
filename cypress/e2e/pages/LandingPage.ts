export class LandingPage {

    private elements = {
        getLogo: () => cy.get('[alt="Cypress Logo"]')    }

    visit() {
        cy.visit('/');
    }

    fillInData(data: string) {
        // this.elements.placeholderGetElement().type(data);
    }

    logoIsVisible() {
        this.elements.getLogo().should("be.visible");
    }
}





