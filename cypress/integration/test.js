
  beforeEach(() => {
       cy.visit('https://www.peek.com')
  })

 it('Search filters should correctly apply after initial search', () => {
 	// Search for New york in the destinations
    cy.get('#homepage_location_search').type('New York NY USA').type('{downarrow}');
    cy.get('div.pac-container.pac-logo.hdpi').first().click(); 
    // The result page should display activities related to New york
    cy.url().should('eq', 'https://www.peek.com/new-york/r1xjR')
    cy.get('h1.banner-header').should('contain', 'New York');
  })

 it('Categories should appear based on location inventory', () => {
    cy.get('#homepage_location_search').type('Hawaii USA').type('{downarrow}');
    cy.get('div.pac-container.pac-logo.hdpi').first().click(); 
    cy.url().should('eq', 'https://www.peek.com/big-island/r1JOq')
    // Hawaii is a destination that should have the water sports category
    cy.get('#category_46').should('be.visible'); 
  })

  it('after completing quiz there should be a search form', () => {

    // Click through all the 9 image based question 
    cy.get('[phx-value-img-id="26"]').should('be.visible').click();
    cy.get('[phx-value-img-id="21"]').should('be.visible').click();
    cy.get('[phx-value-img-id="12"]').should('be.visible').click();
    cy.get('[phx-value-img-id="22"]').should('be.visible').click();
    cy.get('[phx-value-img-id="3"]').should('be.visible').click();
    cy.get('[phx-value-img-id="10"]').should('be.visible').click();
    cy.get('[phx-value-img-id="17"]').should('be.visible').click();
    cy.get('[phx-value-img-id="23"]').should('be.visible').click();
    cy.get('[phx-value-img-id="16"]').should('be.visible').click();
    // For the above images selected the following text message should be displayed.
    cy.contains('An Explorer').should('be.visible');
  })

  it('activities calendar widget should populate', () => {
  	//Click an activity available in the main page
    cy.get('[alt="Boat Tour of San Francisco Bay"]').click();
    //It should display the details about the activity and the detail page is visible
    cy.get('[data-glide-el="track"]').should('be.visible');
  })

