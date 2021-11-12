
describe('Pizza Order Application', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const nameInput = () => cy.get('input[id="name-input"]')
    const sizeDropdown = () => cy.get('select')
    const toppingBoxes = () => cy.get('[type="checkbox"]')
    const instructionsInput = () => cy.get('input[name=instructions]')
    const submitButton = () => cy.get('button[id="order-button"]')
    const sauce = () => cy.get('[type = "radio"]')

    it('Sanity test', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })

    it('Elements are showing?', () => {
        nameInput().should('exist')
        sizeDropdown().should('exist')
        toppingBoxes().should('exist')
        instructionsInput().should('exist')
        submitButton().should('exist')
    })

    describe('Inputs can be filled and submit?', () => {
        it('Inputs are interacting?', () => {
            nameInput()
                .should('have.value', '')
                .type('Test')
                .should('have.value', 'Test')
            sizeDropdown()
                .should('have.value', '')
                .select('Small')
                .select('Medium')
                .select('Large')
                .select('Extra Large')
            toppingBoxes()
                .check()
            instructionsInput()
                .should('have.value', '')
                .type('Cut Pizza into Heart Shaped')
                .should('have.value', 'Cut Pizza into Heart Shaped')
            sauce()
                .check('Pesto')
        })
        })

        it('Add to Order button works?', () => {
            nameInput()
                .type('Test')
            sizeDropdown()
                .select('Medium')
            toppingBoxes()
                .check()
            instructionsInput()
                .type('Cut Pizza into Heart Shaped')
            sauce()
                .check('Pesto')
            submitButton()
                .click()
        })
    })

