export class RegistrationPage {
    elements = {

        userNameField: () => cy.get('input[placeholder="Username"]'),

        emailField: () => cy.get('input[placeholder="Email"]'),

        passwordField: () => cy.get('input[placeholder="Password"]'),

        signUpButton: () => cy.get('button[type="submit"]'),

        errorMessage: () => cy.get('[ng-repeat="error in errors"]')

    }

    clickSignUpButton() {
        this.elements.signUpButton().click();
    }

    enterUserName(username) {
        this.elements.userNameField().type(username);
    }

    enterEmail(email) {
        this.elements.emailField().type(email);
    }

    enterPassword(password) {
        this.elements.passwordField().type(password);
    }

}