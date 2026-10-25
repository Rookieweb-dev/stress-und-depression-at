// Loaded in <head> (not deferred) so the "js" class is set before first paint.
// Without JavaScript the menu stays open and the form simply shows all fields.
document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("hauptmenue");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    });
  }

  // Contact form
  const form = document.querySelector(".contact-form");
  if (!form) return;

  const status = form.querySelector(".form-status");
  const radios = form.querySelectorAll('input[name="anliegen"]');
  const syncCompany = () => {
    form.classList.toggle("is-company", form.anliegen.value === "unternehmen");
  };

  // /kontakt?anliegen=unternehmen preselects the company option (link from the workshops page).
  const preset = new URLSearchParams(location.search).get("anliegen");
  radios.forEach((radio) => {
    if (radio.value === preset) radio.checked = true;
    radio.addEventListener("change", syncCompany);
  });
  syncCompany();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.classList.remove("is-error");

    let firstInvalid = null;
    form.querySelectorAll("[required]").forEach((field) => {
      const valid = field.checkValidity();
      field.setAttribute("aria-invalid", String(!valid));
      if (!valid && !firstInvalid) firstInvalid = field;
    });

    if (firstInvalid) {
      status.textContent = "Bitte füllen Sie Name, E-Mail und Nachricht aus und bestätigen Sie die Datenschutzerklärung.";
      status.classList.add("is-error");
      firstInvalid.focus();
      return;
    }

    // Demo: sending is not connected yet (needs a server-side part, see README).
    status.textContent = "Danke für Ihre Anfrage. Hinweis: In dieser Demo-Version wird das Formular noch nicht versendet.";
  });
});
