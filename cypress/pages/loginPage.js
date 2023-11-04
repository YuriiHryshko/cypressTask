export class LoginPage {
    elements = {

        emailField: () => cy.get('input[placeholder="Email"]'),

        passwordField: () => cy.get('input[placeholder="Password"]'),

        signInButton: () => cy.get('button[type="submit"]'),

        errorMessage: () => cy.get('[ng-repeat="error in errors"]')

    }

    login(email, password) {
        this.enterEmail(email);
        this.enterPassword(password);
        this.clickSignInButton();
    }

    clickSignInButton() {
        this.elements.signInButton().click();
    }

    enterEmail(email) {
        this.elements.emailField().type(email);
    }

    enterPassword(password) {
        this.elements.passwordField().type(password);
    }

}