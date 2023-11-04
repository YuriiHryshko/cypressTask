import { RegistrationPage } from '../../pages/registrationPage';
import { MainPage } from '../../pages/mainPage';
import { faker } from '@faker-js/faker';

const mainPage = new MainPage();
const registrationPage = new RegistrationPage();
const randomUserName = faker.internet.userName();
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();

describe('Registration Tests', () => {
    beforeEach(() => {
        mainPage.visit();
    });

    it('Registration with valid data', () => {
        mainPage.clickSignUpLink();
        cy.url().should('include', '/register');

        registrationPage.enterUserName(randomUserName);
        registrationPage.elements.userNameField().should('have.value', randomUserName);

        registrationPage.enterEmail(randomEmail);
        registrationPage.elements.emailField().should('have.value', randomEmail);

        registrationPage.enterPassword(randomPassword);
        registrationPage.elements.passwordField().should('have.value', randomPassword);

        registrationPage.clickSignUpButton();
        cy.url().should('eq', Cypress.config().baseUrl);
        mainPage.elements.newArticleLink().should('be.visible');
        mainPage.elements.settingsLink().should('be.visible');
        mainPage.elements.userNameLink().should('be.visible');
    });

    it('Registration with empty username field', () => {
        mainPage.clickSignUpLink();
        cy.url().should('include', '/register');

        registrationPage.enterEmail(randomEmail);
        registrationPage.elements.emailField().should('have.value', randomEmail);

        registrationPage.enterPassword(randomPassword);
        registrationPage.elements.passwordField().should('have.value', randomPassword);

        registrationPage.clickSignUpButton();
        registrationPage.elements.errorMessage().should('contain', "username can't be blank");
    });

    it('Registration with empty email field', () => {
        mainPage.clickSignUpLink();
        cy.url().should('include', '/register');

        registrationPage.enterUserName(randomUserName);
        registrationPage.elements.userNameField().should('have.value', randomUserName);

        registrationPage.enterPassword(randomPassword);
        registrationPage.elements.passwordField().should('have.value', randomPassword);

        registrationPage.clickSignUpButton();
        registrationPage.elements.errorMessage().should('contain', "email can't be blank");
    });

    it('Registration with empty password field', () => {
        mainPage.clickSignUpLink();
        cy.url().should('include', '/register');

        registrationPage.enterUserName(randomUserName);
        registrationPage.elements.userNameField().should('have.value', randomUserName);

        registrationPage.enterEmail(randomEmail);
        registrationPage.elements.emailField().should('have.value', randomEmail);

        registrationPage.clickSignUpButton();
        registrationPage.elements.errorMessage().should('contain', "password can't be blank");
    });
});