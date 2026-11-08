// ARCOVA interactions: navigation, project filtering, pointer highlights and email enquiry.
(() => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  toggle?.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.textContent = isOpen ? "×" : "☰";
  });

  menu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
      if (toggle) toggle.textContent = "☰";
    });
  });

  const filterButtons = document.querySelectorAll("[data-filter]");
  const projectCards = document.querySelectorAll(".projects [data-category]");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.toggle("active", item === button));
      projectCards.forEach((card) => {
        card.hidden = selected !== "all" && card.dataset.category !== selected;
      });
    });
  });

  // A soft spotlight follows the pointer across the whole page on desktop.\n  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {\n    document.addEventListener("pointermove", (event) => {\n      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);\n      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);\n      document.body.classList.add("pointer-active");\n    });\n    document.addEventListener("pointerleave", () => document.body.classList.remove("pointer-active"));\n  }\n\n  // A restrained light follows the pointer inside interactive cards.
  document.querySelectorAll(".interactive-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - bounds.left}px`);
      card.style.setProperty("--my", `${event.clientY - bounds.top}px`);
    });
  });

  // Homepage client carousel: three cards on desktop, one on small screens.\n  const slider = document.querySelector("[data-slider]");\n  const track = document.querySelector("#client-track");\n  if (slider && track) {\n    const cards = Array.from(track.children);\n    let index = 0;\n    let timer;\n    const visibleCards = () => window.matchMedia("(max-width: 580px)").matches ? 1 : window.matchMedia("(max-width: 900px)").matches ? 2 : 3;\n    const maxIndex = () => Math.max(0, cards.length - visibleCards());\n    const moveTo = (nextIndex) => {\n      index = Math.max(0, Math.min(nextIndex, maxIndex()));\n      const step = cards[0].getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap || 0);\n      track.style.transform = `translateX(-${index * step}px)`;\n    };\n    slider.querySelectorAll("[data-slide]").forEach((button) => {\n      button.addEventListener("click", () => moveTo(index + (button.dataset.slide === "next" ? 1 : -1)));\n    });\n    const stopAuto = () => window.clearInterval(timer);\n    const startAuto = () => {\n      stopAuto();\n      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {\n        timer = window.setInterval(() => moveTo(index >= maxIndex() ? 0 : index + 1), 3500);\n      }\n    };\n    slider.addEventListener("mouseenter", stopAuto);\n    slider.addEventListener("mouseleave", startAuto);\n    slider.addEventListener("focusin", stopAuto);\n    slider.addEventListener("focusout", startAuto);\n    window.addEventListener("resize", () => moveTo(Math.min(index, maxIndex())));\n    startAuto();\n  }\n\n  // Opens a pre-filled email; no message is stored on this website.
  document.querySelector("#enquiry")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Website enquiry — ARCOVA");
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nService: ${data.get("service")}\n\nProject details:\n${data.get("message")}`
    );
    window.location.href = `mailto:renterprise.fbd@gmail.com?subject=${subject}&body=${body}`;
  });
})();