import globalValues from '../../support/utils/globalValues'

describe("Testing API Endpoints using Cypress", () => {

    const BASE_URL = Cypress.env('mainUrl')
    it("Test GET Request", () => {
        cy.request({
            method: globalValues.method.GET,
            url: BASE_URL
        }).then((response) => {
            expect(response.status).to.eq(globalValues.statusCode[200])
            expect(response.statusText).to.eq(globalValues.statusText.OK)
            expect(response.isOkStatusCode).to.eq(true)
        })
    })

    it("Test GET Request /gen/clients - expect", () => {
        cy.request({
            method: globalValues.method.GET,
            url: BASE_URL + `api/gen/clients`
        }).then(({body}) => {
            console.log(body)
            expect(body).to.have.length(56)
            expect(body[0]).to.be.a('string')
            expect(body[0]).to.eq('ada')
            expect(body).contains('java')
            expect(body).contains('javascript')
        })
    })

    it("Test GET Request /gen/clients - should", () => {
        cy.request({
            method: globalValues.method.GET,
            url: BASE_URL + `api/gen/clients`
        })
        .its('body')
        .should('include', 'android')
    })

    it("Test GET Request /gen/clients - alias", () => {
        cy.request({
            method: globalValues.method.GET,
            url: BASE_URL + `api/gen/clients`
        }).as('request')
        cy.get('@request').its('status').should('equal', 200)
        cy.get('@request').its('headers').its('content-type').should('include', 'application/json')
    })
})