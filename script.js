"use strict";

/** Enhance navigation, project discovery and contact without hiding static content. */
function initializePortfolio() {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#main-navigation");

  if (menuButton && navigation) {
    menuButton.hidden = false;
    document.body.classList.add("menu-ready");

    /** Keep the mobile navigation visibility and accessibility state synchronized. */
    function setMenuOpen(isOpen) {
      menuButton.setAttribute("aria-expanded", String(isOpen));
      navigation.classList.toggle("is-open", isOpen);
    }

    menuButton.addEventListener("click", () => {
      setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
    });
    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a")) setMenuOpen(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
        setMenuOpen(false);
        menuButton.focus();
      }
    });
    window.matchMedia("(min-width: 621px)").addEventListener("change", () => setMenuOpen(false));
  }

  const toolbar = document.querySelector(".project-toolbar");
  const projectCards = [...document.querySelectorAll(".project-card")];
  if (toolbar && projectCards.length) {
    toolbar.hidden = false;
    toolbar.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-filter]");
      if (!button) return;
      const category = button.dataset.filter;
      for (const filter of toolbar.querySelectorAll("button")) {
        filter.setAttribute("aria-pressed", String(filter === button));
      }
      let visibleCount = 0;
      for (const card of projectCards) {
        card.hidden = category !== "all" && card.dataset.category !== category;
        if (!card.hidden) visibleCount += 1;
      }
      document.querySelector("#project-status").textContent = `${visibleCount} projects shown.`;
    });
  }

  const copyButton = document.querySelector(".copy-email");
  const emailLink = document.querySelector(".email-link");
  const copyStatus = document.querySelector("#copy-status");
  if (copyButton && emailLink && copyStatus && navigator.clipboard && window.isSecureContext) {
    copyButton.hidden = false;
    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(emailLink.textContent.trim());
        copyStatus.textContent = "Email address copied. Talk soon!";
      } catch {
        console.warn("[portfolio] Clipboard copy failed; direct email remains available.");
        copyStatus.textContent = "Copy unavailable. Select the email address or click it to get in touch.";
      }
    });
  }

  const year = document.querySelector("#current-year");
  if (year) year.textContent = String(new Date().getFullYear());

  const printButton = document.querySelector("#print-resume");
  if (printButton) {
    printButton.hidden = false;
    printButton.addEventListener("click", () => window.print());
  }
}

initializePortfolio();
