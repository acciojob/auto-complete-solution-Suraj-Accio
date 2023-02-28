/// <reference types="Cypress"/>

describe("testing auto complete", () => {

  const baseURL = "http://localhost:8080";
  
  beforeEach(() => {
    cy.visit(baseURL);
  });

  it("testing tags on initial render", () => {
    const tags = ['input', 'ul','li']
    tags.forEach(tag => cy.get(tag).should('have.length.at.least', 1))
  });

  it('testing with valid data', () => {
    const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
    fruits.forEach(fruit => {
      cy.get('input').clear()
      for (let index = 0; index < fruit.length; index++) {
        const char = fruit.charAt(index)
        cy.get('input').type(char)
        cy.wait(450).then(() => {
          cy.get('li').each($el => {
            const text = $el.text().trim()
            const hasChar = text.includes(char)
            expect(hasChar).to.equal(true)
          })
        })        
      }
    });
  })

  it('testing with invalid data', () => {
    const arr = ['aspf', 'fesv', 'serg']
    arr.forEach(data => {
      cy.get('input').clear()
      cy.get('input').type(data).then(() => {
        cy.get('ul').children().should('have.length', 0)
      })
    })
  })

});
