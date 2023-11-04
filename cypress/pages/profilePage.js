export class ProfilePage {
    elements = {

        userNameElement: () => cy.get('h4[ng-bind="::$ctrl.profile.username"]'),

        bioElement: () => cy.get('p[ng-bind="::$ctrl.profile.bio"]')

    }
}