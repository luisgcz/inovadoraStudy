describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://rcteste.g-hosp.com.br/users/sign_in');
    cy.get('input[id="email"]').type('luis.cruz@inovadora.com.br')
    cy.get('input[id="user_password"]').type('luisteste')
    cy.get('input[name="commit"]').click()
    
    //cy.get('span[class="ui-icon ui-icon-closethick"]').click()
    //cy.get('span[class="icon-th"]').click()

    cy.visit('https://rcteste.g-hosp.com.br/');


  })
})

