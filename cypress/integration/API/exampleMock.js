import globalValues from '../../support/utils/globalValues'

describe("Example of cy.intercept() without fixture", () => {

    const BASE_URL = Cypress.env('mainUrl')
    it("Test GET Request", () => {
        cy.intercept(globalValues.method.GET, BASE_URL).as('requestGetBaseUrl')
        cy.visit(BASE_URL)
        cy.wait('@requestGetBaseUrl')
    })
})