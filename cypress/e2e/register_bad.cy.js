import { generarDNI, generarEmail, generarTelefono, generarCUIT } from '../utils/generators'


describe('Casos negativos', () => {

    beforeEach(() => {
        cy.visit('/auth/registerClient') //viene del base url configurado en cypress.config.js
    });

    it('Correo invalido', () => {
        cy.fixture('register.ok.json').then((cliente) => {

            // Sobrescribo datos para que sean únicos o inválidos
            cliente.CUIT = generarCUIT()
            cliente.telefono = generarTelefono()
            cliente.email = "vero.com"  // correo inválido, sin '@'
            cliente.confirmarEmail = cliente.email
            cy.registroCte(cliente)//llamo al commands

            //BTN registrarse
            cy.get('[data-cy="btn-registrarse"]').click()

            // validar EMAIL
            cy.get('div[data-slot="error-message"]').invoke('text')
            .should('match', /Incluye un signo "@"|Please include an '@'/)
            //validar boton del login
            cy.url().should('include', '/auth/registerClient')
        })
    })

        it.only('Campos vacios (parte 1)', () => {
        cy.fixture('register.bad_vacios1.json').then((cliente) => {

            cliente.telefono = generarTelefono()
            cliente.confirmarEmail = cliente.email
            cy.registroCte(cliente)//llamo al commands
            //BTN registrarse
            cy.get('[data-cy="btn-registrarse"]').click()

            cy.log('Validando Razon Social')
            cy.get('div[data-slot="error-message"]') 
            .should('contain.text', 'Completa este campo')

            cy.log('Validando CUIT')
            cy.get('div[data-slot="error-message"]') 
            .should('contain.text', 'Completa este campo')

            cy.log('Validando Provincia')
            cy.get('div[data-slot="error-message"]') 
            .should('contain.text', 'Completa este campo')

            cy.log('Validando Localidad')
            cy.get('div[data-slot="error-message"]') 
            .should('contain.text', 'Completa este campo')


            //validar boton del login
            cy.url().should('include', '/auth/registerClient')
        })
    })




})