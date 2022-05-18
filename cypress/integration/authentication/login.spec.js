describe('Login',() => {
	beforeEach(() => {
		cy.visit('http://localhost:8000/login')
	})

	it('Both username and password entered are correct',() => {
		cy.get('#username').type('admin')
		cy.get('#password').type('Secure@123')
		cy.get('#btn-login').click()
		cy.clearCookies()
	})

	it('Username entered is correct but password is wrong',() => {
		cy.get('#username').type('admin')
		cy.get('#password').type('qwerty')
		cy.get('#btn-login').click()
	})
})