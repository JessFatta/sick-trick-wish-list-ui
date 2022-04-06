describe('Main', () => {
  it('As a user, I should see Sick Trick Wish List', () => {
    cy.visit('http://localhost:3000')
      .contains('Sick Trick Wish List')
  })

  it('As a user, I should see a button to submit new tricks', () => {
    cy.visit('http://localhost:3000')
      .get('button')
  })

  it('As a user, I should see a form to fill out new tricks', () => {
    cy.visit('http://localhost:3000')
      .get('form')
  })

  it('As a user, I should see trick cards displayed on the page', () => {
    cy.visit('http://localhost:3000')
      .get('div[class="card"]')
  })

  it('As a user, I should see trick names, stances, obstacles, and links on the card', () => {
    cy.visit('http://localhost:3000')
      .contains('p')
  })

  it('As a user, when I add a new trick, that stance data should be reflected in the new card', () => {
    cy.visit('http://localhost:3000')
      .get('input[class="stance"]').select('Regular').should('have.value', 'regular')
      //.get('select').select('Regular')
      //COULDNT GET THIS TO WORK BEFORE TIME RAN OUT
  })

  it('As a user, when I add a new trick, that trick data should be reflected in the new card', () => {
    cy.visit('http://localhost:3000')
      .get('input[class="name"]').type('treflip')
  })

  it('As a user, when I add a new trick, that obstacle data should be reflected in the new card', () => {
    cy.visit('http://localhost:3000')
      //.get('input[class="obstacle"]').type('Stairs')
      .get('select').select('Stairs')
      //COULDNT GET THIS TO WORK BEFORE TIME RAN OUT
  })

  it('As a user, when I add a new trick, that link data should be reflected in the new card', () => {
    cy.visit('http://localhost:3000')
      .get('input[class="tutorial"]').type('www.google.com')
  })



})