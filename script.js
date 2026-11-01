(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("main-nav");
  const headerActions = document.querySelector(".header-actions");

  if (navToggle && mainNav && headerActions) {
    navToggle.addEventListener("click", function () {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      mainNav.classList.toggle("is-open", !isOpen);
      headerActions.classList.toggle("is-open", !isOpen);
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.setAttribute("aria-expanded", "false");
        mainNav.classList.remove("is-open");
        headerActions.classList.remove("is-open");
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------- Animated stat counters ---------- */
  const statEls = document.querySelectorAll(".stat-value[data-count]");
  function animateCount(el) {
    const target = parseFloat(el.getAttribute("data-count"), 10);
    const suffix = el.getAttribute("data-suffix") || "";
    if (prefersReducedMotion) {
      el.textContent = target + suffix;
      return;
    }
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  if (statEls.length && "IntersectionObserver" in window) {
    const statObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            statObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    statEls.forEach(function (el) { statObserver.observe(el); });
  } else {
    statEls.forEach(animateCount);
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".accordion-trigger").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      const panel = trigger.nextElementSibling;
      const isOpen = trigger.getAttribute("aria-expanded") === "true";

      document.querySelectorAll(".accordion-trigger").forEach(function (other) {
        if (other !== trigger) {
          other.setAttribute("aria-expanded", "false");
          other.nextElementSibling.style.maxHeight = null;
        }
      });

      trigger.setAttribute("aria-expanded", String(!isOpen));
      panel.style.maxHeight = isOpen ? null : panel.scrollHeight + "px";
    });
  });

  /* ---------- Demo modal ---------- */
  const demoModal = document.getElementById("demoModal");
  const watchDemoBtn = document.getElementById("watchDemoBtn");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  let lastFocused = null;

  function openModal() {
    if (!demoModal) return;
    lastFocused = document.activeElement;
    demoModal.hidden = false;
    modalCloseBtn.focus();
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!demoModal) return;
    demoModal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  if (watchDemoBtn) watchDemoBtn.addEventListener("click", openModal);
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (demoModal) {
    demoModal.querySelectorAll("[data-close-modal]").forEach(function (el) {
      el.addEventListener("click", closeModal);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !demoModal.hidden) closeModal();
    });
  }

  /* ---------- Hero parallax (subtle, pointer only) ---------- */
  const parallaxCard = document.getElementById("parallaxMain");
  const hero = document.querySelector(".hero");
  if (parallaxCard && hero && !prefersReducedMotion && window.matchMedia("(pointer: fine)").matches) {
    hero.addEventListener("mousemove", function (e) {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      parallaxCard.style.transform = "rotateY(" + (x * 4) + "deg) rotateX(" + (y * -4) + "deg)";
    });
    hero.addEventListener("mouseleave", function () {
      parallaxCard.style.transform = "";
    });
  }

  /* ---------- Newsletter form (static demo) ---------- */
  const newsletterForm = document.querySelector(".newsletter");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const input = newsletterForm.querySelector("input");
      const button = newsletterForm.querySelector("button");
      const original = button.textContent;
      button.textContent = "Subscribed";
      input.value = "";
      setTimeout(function () { button.textContent = original; }, 2200);
    });
  }
})();
