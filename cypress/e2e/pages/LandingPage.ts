export class LandingPage {

    private elements = {
        placeholderGetElement: () => cy.get('')
    }

    visit() {
        cy.visit('/');
    }

    fillInData(data: string) {
        this.elements.placeholderGetElement().type(data);
    }
}





