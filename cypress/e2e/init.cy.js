describe("Portfolio Astro smoke", () => {
  const routes = [
    {
      locale: "fr",
      path: "/fr/home",
      hero: "Bonjour, je suis",
      work: "Réalisations",
      cv: "/cv/CV-MOUCLE-PATRICK-developpeur-fullstack-alternance-fr.pdf",
      submit: "Envoyer le message",
      success: "Votre message a bien été transmis.",
    },
    {
      locale: "en",
      path: "/en/home",
      hero: "Hi, I'm",
      work: "Works",
      cv: "/cv/CV-Patrick-Sheron-MOUCLE-Developer-web-mobile-en.pdf",
      submit: "Send message",
      success: "Your message has been sent.",
    },
  ];

  routes.forEach(({ locale, path, hero, work, cv, submit, success }) => {
    it(`renders ${locale} homepage parity`, () => {
      cy.visit(path);

      cy.contains(hero).should("be.visible");
      cy.contains(work).should("be.visible");
      cy.get('nav[aria-label="Main navigation"]').should("exist");
      cy.get('nav[aria-label="Mobile navigation"]').should("exist");
      cy.get(`a[href="${cv}"]`).should("exist");

      cy.get("#project details").first().as("projectDetails");
      cy.get("@projectDetails").should("exist");
      cy.get("@projectDetails").find("summary").click({ force: true });
      cy.get("@projectDetails").should("have.attr", "open");

      cy.get('#about img[src*="api.iconify.design/simple-icons"]').should(
        "have.length.greaterThan",
        5
      );

      cy.get("#contact form").should(
        "have.attr",
        "action",
        "https://submit-form.com/04qNr6OovR4lRje61FlbD"
      );
      cy.get('#contact input[name="name"]').should("exist");
      cy.get('#contact input[name="email"]').should("exist");
      cy.get('#contact textarea[name="message"]').should("exist");
      cy.window().then((win) => {
        cy.stub(win, "fetch")
          .resolves(new win.Response("{}", { status: 200 }))
          .as("submitContact");
      });
      cy.get('#contact input[name="name"]').type("Ada Lovelace", {
        force: true,
      });
      cy.get('#contact input[name="email"]').type("ada@example.com", {
        force: true,
      });
      cy.get('#contact textarea[name="message"]').type(
        "Hello from Cypress smoke.",
        { force: true }
      );
      cy.get('#contact button[type="submit"]')
        .contains(submit)
        .should("be.visible");
      cy.get("#contact form").then(($form) => {
        if ($form.attr("data-recaptcha-required") === "true") {
          const form = $form[0];
          let tokenField = form.querySelector('[name="g-recaptcha-response"]');
          if (!tokenField) {
            tokenField = form.ownerDocument.createElement("textarea");
            tokenField.name = "g-recaptcha-response";
            tokenField.hidden = true;
            form.append(tokenField);
          }
          tokenField.value = "test-token";
        }
      });
      cy.get("#contact form").then(($form) => {
        const win = $form[0].ownerDocument.defaultView;
        $form[0].dispatchEvent(
          new win.Event("submit", { bubbles: true, cancelable: true })
        );
      });
      cy.get("@submitContact").should("have.been.calledOnce");
      cy.location("pathname").should("eq", path);
      cy.contains(success).should("be.visible");
    });
  });

  it("renders the localized 404 page", () => {
    cy.visit("/404.html");

    cy.contains("404").should("be.visible");
    cy.contains("La page que vous tentez d'afficher n'existe pas").should(
      "be.visible"
    );
    cy.get('a[href="/fr/home"]')
      .contains("retour à l'accueil")
      .should("be.visible");
    cy.get('nav[aria-label="Main navigation"]').should("exist");
    cy.get("footer").should("exist");
  });
});
