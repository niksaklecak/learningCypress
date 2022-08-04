export class LandingPage {

    private elements = {
        placeholderGetElement: () => cy.get('data-id = nba:navigation:home:logo')
    }

    visit() {
        cy.visit('/');
    }

    fillInData(data: string) {
        this.elements.placeholderGetElement().type(data);
    }

    isLogoVisible() {
        cy.get('[data-id="nba:navigation:home:logo"]').should('be.visible')
    }
}





