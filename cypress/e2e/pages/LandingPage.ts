export class LandingPage {

    private elements = {
        getLogo: () => cy.get('.tools_logo > a > img'),
        banner: () => cy.get('.close_banner')
    }

    visit() {
        cy.visit('/');
    }

    closePopUp () {
        cy.get('#exit_popup_close').click();
    }


    fillInData(data: string) {
        // this.elements.placeholderGetElement().type(data);
    }

    isLogoVisible() {
        this.elements.getLogo().should("be.visible");
    }
    closeBanner () {
        this.elements.banner().click();
    }
}





