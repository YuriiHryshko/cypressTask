import { LoginPage } from '../../pages/loginPage';
import { MainPage } from '../../pages/mainPage';
import { SettingsPage } from '../../pages/settingsPage';
import { ProfilePage } from '../../pages/profilePage';
import { faker } from '@faker-js/faker';
import validUser from '../../fixtures/validUser.json';

const mainPage = new MainPage();
const loginPage = new LoginPage();
const settingsPage = new SettingsPage();
const profilePage = new ProfilePage();
const newRandomUserName = faker.internet.userName();
const newRandomBio = faker.lorem.sentence();

describe('Settings Tests', () => {
    beforeEach(() => {
        mainPage.visit();
        mainPage.clickSignInLink();
        loginPage.login(validUser.email, validUser.password);
    });

    it('Logout', () => {
        mainPage.clickSettingsLink();
        cy.url().should('include', '/settings');

        settingsPage.clickLogoutButton();
        cy.url().should('eq', Cypress.config().baseUrl);
        mainPage.elements.signInLink().should('be.visible');
        mainPage.elements.signUpLink().should('be.visible');
    });

    // it('Valid changing the username', () => {
    //     mainPage.clickSettingsLink();
    //     cy.url().should('include', '/settings');

    //     settingsPage.clearUserNameField();
    //     settingsPage.elements.userNameField().should('eq', '');

    //     settingsPage.enterUserName(newRandomUserName);
    //     settingsPage.elements.userNameField().should('have.value', newRandomUserName);

    //     settingsPage.clickUpdateButton();
    //     profilePage.elements.userNameElement().should('eq', newRandomUserName);
    // });

    // it('Valid changing the bio', () => {
    //     mainPage.clickSettingsLink();
    //     cy.url().should('include', '/settings');

    //     settingsPage.clearBioField();
    //     settingsPage.elements.bioField().should('eq', '');

    //     settingsPage.enterBio(newRandomBio);
    //     settingsPage.elements.bioField().should('have.value', newRandomBio);

    //     settingsPage.clickUpdateButton();
    //     profilePage.elements.bioElement().should('eq', newRandomBio);
    // });
});