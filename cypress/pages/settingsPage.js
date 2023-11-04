export class SettingsPage {
    elements = {

        userNameField: () => cy.get('input[placeholder="Username"]'),

        bioField: () => cy.get('textarea[placeholder="Short bio about you"]'),

        updateButton: () => cy.get('button[type="submit"]'),

        logoutButton: () => cy.get('button.btn.btn-outline-danger')

    }

    clickUpdateButton() {
        this.elements.updateButton().click();
    }

    clickLogoutButton() {
        this.elements.logoutButton().click();
    }

    enterUserName(username) {
        this.elements.userNameField().type(username);
    }

    enterBio(email) {
        this.elements.bioField().type(email);
    }

    clearUserNameField() {
        this.elements.userNameField().clear();
    }

    clearBioField() {
        this.elements.bioField().clear();
    }
}