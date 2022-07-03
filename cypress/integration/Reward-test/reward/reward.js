import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('User is at the login page', () => {
    cy.visit('https://dashboard.perxtech.io/dashboard/signin')
})

When('User enters username as {string} and password as {string}', (username, password) => {
    cy.get('#email').type(username)
    cy.get('#password').type(password)
})

And('User clicks on login button', () => {
    cy.get('*[class^="ant-btn"]').wait(2000).click()
})

And('User only access for reward module', () => {
    cy.get('*[class^="ant-menu"]').find('li').should('have.length', 1)
})

And('User clicks on create reward menu', () => {
    cy.get('*[class^="ant-btn"]').wait(2000).click()
})

And('User enters rewardname as {string}', (rewardname) => {
    cy.get('*[class^="ant-input"]').then($elements => { cy.wrap($elements[0]).type(rewardname); });
    cy.get('*[class^="ant-btn"]').then($elements => { cy.wrap($elements[4]).click(); });
})

And('User select validity end date and time', () => {
    cy.get('*[class^="ant-calendar-picker-input"]').then($elements => { cy.wrap($elements[1]).click(); });
    cy.get('*[class^="ant-calendar-next-month-btn"]').then($elements => { cy.wrap($elements[0]).click(); });
    cy.get('*[class^="ant-calendar-date"]').then($elements => { cy.wrap($elements[13]).click(); });
    cy.get('*[class^="ant-btn"]').then($elements => { cy.wrap($elements[1]).click(); });
})

And('User click on final submit', () => {
    cy.get('*[class^="ant-btn"]').then($elements => { cy.wrap($elements[2]).click(); });
})

And('User go back to reward dashboard', () => {
    cy.get('*[data-key="rewards"]').wait(4000).click()
})

And('User search added rewardname as {string}', (rewardname) => {
    cy.get('*[data-testid="reward-list-searchbar"]').wait(4000).type(rewardname)
})
