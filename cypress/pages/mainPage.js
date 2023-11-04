export class MainPage {
    elements = {

        signInLink: () => cy.get('.nav-link[href="#/login"]'),

        signUpLink: () => cy.get('.nav-link[href="#/register"]'),

        newArticleLink: () => cy.get('.nav-link[href="#/editor/"]'),

        settingsLink: () => cy.get('.nav-link[href="#/settings"]'),

        userNameLink: () => cy.get('.nav-link.ng-binding[ui-sref]')
    }

    visit() {
        cy.visit('/');
    }

    clickSignInLink() {
        this.elements.signInLink().click();
    }

    clickSignUpLink() {
        this.elements.signUpLink().click();
    }

    clickSettingsLink() {
        this.elements.settingsLink().click();
    }
}