describe("Testing API Endpoints using Cypress", () => {

    const BASE_URL = Cypress.env('mainUrl')
    it("Test GET Request", () => {
        cy.request({
            method: 'GET',
            url: BASE_URL
        }).then((response) => {
            console.log(response)
            expect(response.status).to.eq(200)
            expect(response.statusText).to.eq("OK")
            expect(response.isOkStatusCode).to.eq(true)
        })
    })
})