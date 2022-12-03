import './commands'

Cypress.on('uncaught:exception', (err) => {
    console.log(err.message)
    return false
})
