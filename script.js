// ARCOVA interactions: mobile navigation, project filters, client carousel and enquiry email.
(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  // Mobile navigation
  menuButton?.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "×" : "☰";
  });

  menu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      menuButton?.setAttribute("aria-expanded", "false");
      if (menuButton) menuButton.textContent = "☰";
    });
  });

  // Project category filters
  const filterButtons = document.querySelectorAll("[data-filter]");
  const projectCards = document.querySelectorAll(".projects [data-category]");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.toggle("active", item === button));
      projectCards.forEach((card) => {
        card.hidden = selectedFilter !== "all" && card.dataset.category !== selectedFilter;
      });
    });
  });

  // Visible cursor-following spotlight on desktop screens.
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.addEventListener("pointermove", (event) => {
      document.documentElement.style.setProperty("--pointer-x", event.clientX + "px");
      document.documentElement.style.setProperty("--pointer-y", event.clientY + "px");
      document.body.classList.add("pointer-active");
    });
    document.documentElement.addEventListener("pointerleave", () => {
      document.body.classList.remove("pointer-active");
    });
  }

  // Client carousel: 3 visible cards on desktop, 2 on tablet, 1 on mobile.
  const slider = document.querySelector("[data-slider]");
  const track = document.querySelector("#client-track");

  if (slider && track) {
    const cards = Array.from(track.children);
    let currentIndex = 0;
    let autoSlideTimer;

    const visibleCount = () => {
      if (window.matchMedia("(max-width: 580px)").matches) return 1;
      if (window.matchMedia("(max-width: 900px)").matches) return 2;
      return 3;
    };

    const lastIndex = () => Math.max(0, cards.length - visibleCount());

    const goTo = (requestedIndex) => {
      currentIndex = Math.max(0, Math.min(requestedIndex, lastIndex()));
      if (!cards.length) return;
      const cardWidth = cards[0].getBoundingClientRect().width;
      const gap = Number.parseFloat(getComputedStyle(track).gap) || 0;
      track.style.transform = "translateX(-" + currentIndex * (cardWidth + gap) + "px)";
    };

    const stopAutoSlide = () => window.clearInterval(autoSlideTimer);
    const startAutoSlide = () => {
      stopAutoSlide();
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        autoSlideTimer = window.setInterval(() => {
          goTo(currentIndex >= lastIndex() ? 0 : currentIndex + 1);
        }, 3500);
      }
    };

    slider.querySelector('[data-slide="prev"]')?.addEventListener("click", () => {
      goTo(currentIndex <= 0 ? lastIndex() : currentIndex - 1);
      startAutoSlide();
    });
    slider.querySelector('[data-slide="next"]')?.addEventListener("click", () => {
      goTo(currentIndex >= lastIndex() ? 0 : currentIndex + 1);
      startAutoSlide();
    });

    slider.addEventListener("mouseenter", stopAutoSlide);
    slider.addEventListener("mouseleave", startAutoSlide);
    slider.addEventListener("focusin", stopAutoSlide);
    slider.addEventListener("focusout", startAutoSlide);
    window.addEventListener("resize", () => goTo(currentIndex));
    goTo(0);
    startAutoSlide();
  }

  // Enquiry form opens a pre-filled email; no data is stored on this website.
  document.querySelector("#enquiry")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Website enquiry — ARCOVA");
    const body = encodeURIComponent(
      "Name: " + formData.get("name") +
      "\nEmail: " + formData.get("email") +
      "\nService: " + formData.get("service") +
      "\n\nProject details:\n" + formData.get("message")
    );
    window.location.href = "mailto:renterprise.fbd@gmail.com?subject=" + subject + "&body=" + body;
  });
})();