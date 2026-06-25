document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll(
    ".hero-left, .hero-dashboard, .launch-card, .stats-section, .product-card, .ai-section, .why-grid div, .contact-section"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  revealItems.forEach((item) => {
    item.classList.add("reveal");
    observer.observe(item);
  });
});
