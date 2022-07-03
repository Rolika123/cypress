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

And('User clicks on bulk upload', () => {
    cy.get('*[data-key="bulk_actions"]').wait(4000).click()
})

And('User clicks on upload button', () => {
    cy.get('*[class^="ant-btn"]').wait(2000).click()
})

And('User clicks on click or drag file option', () => {
    cy.get('input[type="file"]').attachFile('/files/SampleCSVFile_2kb.csv')
})

And('User clicks on final submit', () => {
    cy.get('*[class^="ant-btn"]').then($elements => { cy.wrap($elements[2]).wait(4000).click(); });
})
