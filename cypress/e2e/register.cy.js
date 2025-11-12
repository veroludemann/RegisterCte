import { generarDNI, generarEmail, generarTelefono, generarCUIT } from '../utils/generators'


describe('template spec', () => {

  beforeEach(() => {
        cy.visit('/auth/registerClient') //viene del base url configurado en cypress.config.js
    });

  it('Automatizacion Registro', () => {

      cy.fixture('register.ok.json').then((cliente) => {

      cliente.CUIT = generarCUIT()
      cliente.telefono = generarTelefono()
      cliente.email = generarEmail()
      cy.registroCte(cliente) //llamo al commands
      //validaciones
      cy.get('[data-cy="btn-registrarse"]').click()
      cy.url().should('include', '/auth/login')
      cy.contains('Registro exitoso').should('be.visible')
    })

  })
})