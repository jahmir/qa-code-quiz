const user = require('../fixtures/example')

beforeEach(() => {
    cy.visit('http://localhost:8080/')
})


it('Login Successfully', () => {
    cy.get('input[placeholder="Enter Username"]').type('SomeUser_name')
    cy.get('input[placeholder="password"]').type(user.SomeUser_name.password)
    cy.get('button').contains('LOGIN').click()
    cy.get('.sc-bdVaJa > div').contains(`Hello ${user.SomeUser_name.name}`)
    cy.get('.sc-bwzfXH > :nth-child(2) > :nth-child(1)').contains('Favourite Fruit')
    cy.get(':nth-child(3) > :nth-child(1)').contains('Favourite Movie')
    cy.get(':nth-child(4) > :nth-child(1)').contains('Favourite Number')
    cy.get('.sc-bwzfXH > :nth-child(2) > :nth-child(2)').contains(`${user.SomeUser_name.favouriteFruit}`)
    cy.get(':nth-child(3) > :nth-child(2)').contains(`${user.SomeUser_name.favouriteMovie}`)
    cy.get(':nth-child(4) > :nth-child(2)').contains(`${user.SomeUser_name.favouriteNumber}`)
    cy.get('.sc-bxivhb').contains('LOGOUT').click()
})

it('Valid Username and Invalid Password', () => {
    cy.get('input[placeholder="Enter Username"]').type('SomeUser_name')
    cy.get('input[placeholder="password"]').type('invalid')
    cy.get('button').contains('LOGIN').click()
    cy.get('.sc-bdVaJa > div').contains('qa.code-quiz.dev')
})

it('Invalid Username and Valid Password', () => {
    cy.get('input[placeholder="Enter Username"]').type('Invalid Uname')
    cy.get('input[placeholder="password"]').type(user.SomeUser_name.password)
    cy.get('button').contains('LOGIN').click()
    cy.get('.sc-bdVaJa > div').should('have.text', 'qa.code-quiz.dev')
})

it('Invalid Username and Invalid Password', () => {
    cy.get('input[placeholder="Enter Username"]').type('Invalid Uname')
    cy.get('input[placeholder="password"]').type('Invalid pass')
    cy.get('button').contains('LOGIN').click()
    cy.get('.sc-bdVaJa > div').should('have.text', 'qa.code-quiz.dev')
})


