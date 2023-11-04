import { LoginPage } from '../../pages/loginPage';
import { MainPage } from '../../pages/mainPage';
import validUser from '../../fixtures/validUser.json';

const mainPage = new MainPage();
const loginPage = new LoginPage();

describe('Login Tests', () => {
    beforeEach(() => {
        mainPage.visit();
    });

    it('Login with valid data', () => {
        mainPage.clickSignInLink();
        cy.url().should('include', '/login');

        loginPage.enterEmail(validUser.email);
        loginPage.elements.emailField().should('have.value', validUser.email);

        loginPage.enterPassword(validUser.password);
        loginPage.elements.passwordField().should('have.value', validUser.password);

        loginPage.clickSignInButton();
        cy.url().should('eq', Cypress.config().baseUrl);
        mainPage.elements.newArticleLink().should('be.visible');
        mainPage.elements.settingsLink().should('be.visible');
        mainPage.elements.userNameLink().should('be.visible');
    });

    it('Login with empty email field', () => {
        mainPage.clickSignInLink();
        cy.url().should('include', '/login');

        loginPage.enterPassword(validUser.password);
        loginPage.elements.passwordField().should('have.value', validUser.password);

        loginPage.clickSignInButton();
        loginPage.elements.errorMessage().should('contain', "email can't be blank");
    });

    it('Login with empty password field', () => {
        mainPage.clickSignInLink();
        cy.url().should('include', '/login');

        loginPage.enterEmail(validUser.email);
        loginPage.elements.emailField().should('have.value', validUser.email);

        loginPage.clickSignInButton();
        loginPage.elements.errorMessage().should('contain', "password can't be blank");
    });
});