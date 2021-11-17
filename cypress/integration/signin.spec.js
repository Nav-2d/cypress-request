describe('tests to understand /sign in blocking', () => {
  const email = 'my-email-address'
  const password = 'my-password'

  it('Should return 403 because accept is set to */* ', () => {
    cy.request({
      method: 'POST',
      url: 'MY_URL', 
      headers: { 'accept': '*/*' },
      body: {email, password}
    }).its('status').should('eq', 403)
  })
})