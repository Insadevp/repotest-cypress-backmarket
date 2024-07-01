describe('template spec', () => {
  it('inscription reussite ', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('span').contains('Tout refuser').click();
    cy.get('#firstName').type('Saada');
    cy.get('#lastName').type('sana');
    cy.get('#signup-email').type('insaf83@gmail.com');
    cy.get('#signup-password').type('Nisaf189');
    cy.get('._2OVE0h6V').click();
    cy.get('button').contains('Enchantés').click();
    
  })
  it('inscription echoué ', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('span').contains('Tout refuser').click();
    cy.get('#lastName').type('sana');
    cy.get('#signup-email').type('insafg@gmail.com');
    cy.get('#signup-password').type('f183');
    cy.get('._2OVE0h6V').click();
    cy.get('button').contains('Enchantés').click();
    cy.contains('Le champ "Prénom" est obligatoire ')


  })
  it('tests authentification ', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('#signin-email').type('insaf83@gmail.com', { force: true });
    cy.get('#signin-password').type('Nisaf189', { force: true });
    cy.get('button').contains('Welcome Back!').click({ force: true });
    cy.contains('Une erreur est survenue. Merci de réessayer.');

  })
  it('tests authentification echoué', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('#signin-email').type('insaf8@gmail.com', { force: true });
    cy.get('#signin-password').type('Nisaf18', { force: true });
    cy.get('button').contains('Welcome Back!').click({ force: true });
    cy.contains('Une erreur est survenue. Merci de réessayer.')
  })
})