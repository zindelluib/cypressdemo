let randomstring  = require('randomstring');
let fname  = "";
let lname  = "";
let email  = "";
let username  = "";

describe('User Registration',() => {
	beforeEach(() => {
		cy.visit('http://localhost:8000/create-account')
		fname  = randomstring.generate({ length: 7,charset :'alphabetic'});
		lname  = randomstring.generate({ length: 7,charset :'alphabetic'});
		email   = fname  + '.' + lname +  '@' + 'test.com';
		username   = fname + '@' + lname;
	})


	it('All required form fields are filled-out and data filled-in are valid',() => {
		cy.get('#fname').type(fname)
		cy.get('#lname').type(lname)
		cy.get('#email').type(email)
		cy.get('#username').type(username)
		cy.get('#password').type('12345678')
		cy.get('#accept').check()
		cy.get('#btn-submit').click()
		cy.clearCookies()

	})


	it('All required form fields are not filled-out',() => {
		cy.get('#btn-submit').click()
	})

	it('Invalid email is entered.Other form fields input are correct', () => {
		cy.get('#fname').type(fname)
		cy.get('#lname').type(lname)
		cy.get('#email').type('myemail')//invalid email entered
		cy.get('#username').type(username)
		cy.get('#password').type('12345678')
		cy.get('#accept').check()
		cy.get('#btn-submit').click()
	})


	it('An existing email is entered.Other form fields input are correct',() => {
		cy.get('#fname').type(fname)
		cy.get('#lname').type(lname)
		cy.get('#email').type('g7ik@example.com')//existing email
		cy.get('#username').type(username)
		cy.get('#password').type('12345678')
		cy.get('#accept').check()
		cy.get('#btn-submit').click()
	})


	it('An existing username is entered.Other form fields input are correct ',() => {
		cy.get('#fname').type(fname)
		cy.get('#lname').type(lname)
		cy.get('#email').type(email)
		cy.get('#username').type('user@kXI')//username already existed
		cy.get('#password').type('12345678')
		cy.get('#accept').check()
		cy.get('#btn-submit').click()
	})

	it('Password entered is less than 8 characters',() => {
		cy.get('#fname').type(fname)
		cy.get('#lname').type(lname)
		cy.get('#email').type(email)
		cy.get('#username').type(username)
		cy.get('#password').type('abc43')//5 characters
		cy.get('#accept').check()
		cy.get('#btn-submit').click()
	})


	it('User will not accept Terms and Conditions and Privacy Policy',() => {
		cy.get('#fname').type(fname)
		cy.get('#lname').type(lname)
		cy.get('#email').type(email)
		cy.get('#username').type(username)
		cy.get('#password').type('12345678')
		cy.get('#btn-submit').click()
	})


})