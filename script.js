// ARCOVA interactions: mobile navigation, project filters, infinite client carousel and enquiry email.
(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  menuButton?.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "×" : "☰";
  });
  menu?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    if (menuButton) menuButton.textContent = "☰";
  }));

  const filterButtons = document.querySelectorAll("[data-filter]");
  const projectCards = document.querySelectorAll(".projects [data-category]");
  filterButtons.forEach(button => button.addEventListener("click", () => {
    const selected = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle("active", item === button));
    projectCards.forEach(card => { card.hidden = selected !== "all" && card.dataset.category !== selected; });
  }));

  // Seamless, continuously looping client carousel.
  const slider = document.querySelector("[data-slider]");
  const track = document.querySelector("#client-track");
  if (slider && track) {
    const originals = Array.from(track.children);
    const prev = document.querySelector('[data-slide="prev"]');
    const next = document.querySelector('[data-slide="next"]');
    let index = 0, visible = 3, step = 0, timer = null, resizeFrame = null;

    const visibleCount = () => matchMedia("(max-width: 580px)").matches ? 1 :
      matchMedia("(max-width: 900px)").matches ? 2 : 3;

    const position = (animate = true) => {
      track.style.transition = animate ? "" : "none";
      track.style.transform = "translate3d(-" + (index * step) + "px,0,0)";
    };

    const start = () => {
      clearInterval(timer);
      if (!document.hidden && originals.length > visible &&
          !matchMedia("(prefers-reduced-motion: reduce)").matches) {
        timer = setInterval(() => move(1), 2800);
      }
    };

    const build = () => {
      clearInterval(timer);
      visible = visibleCount();
      index = 0;
      track.replaceChildren(...originals.map(card => card.cloneNode(true)));
      for (let i = 0; i < visible; i++) {
        track.appendChild(originals[i % originals.length].cloneNode(true));
      }
      const first = track.firstElementChild;
      if (!first) return;
      step = first.getBoundingClientRect().width + (parseFloat(getComputedStyle(track).columnGap) || 0);
      position(false);
      requestAnimationFrame(() => { track.style.transition = ""; start(); });
    };

    function move(direction) {
      if (originals.length <= visible) return;
      index += direction;
      if (index < 0) {
        index = originals.length - 1;
        position(false);
        requestAnimationFrame(() => {
          track.style.transition = "";
          index = originals.length - 1;
          position(true);
        });
      } else {
        position(true);
      }
    }

    track.addEventListener("transitionend", event => {
      if (event.propertyName === "transform" && index >= originals.length) {
        index = 0;
        position(false);
        requestAnimationFrame(() => { track.style.transition = ""; });
      }
    });
    prev?.addEventListener("click", () => { move(-1); start(); });
    next?.addEventListener("click", () => { move(1); start(); });
    document.addEventListener("visibilitychange", start);
    window.addEventListener("resize", () => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(build);
    });
    build();
  }

  // Enquiry form opens a pre-filled email; no data is stored on this website.
  document.querySelector("#enquiry")?.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Website enquiry — ARCOVA");
    const body = encodeURIComponent("Name: " + data.get("name") +
      "\nEmail: " + data.get("email") + "\nService: " + data.get("service") +
      "\n\nProject details:\n" + data.get("message"));
    window.location.href = "mailto:renterprise.fbd@gmail.com?subject=" + subject + "&body=" + body;
  });
})();
