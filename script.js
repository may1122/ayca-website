document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll(".section-reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));

  const counters = document.querySelectorAll("[data-count]");
  let countersStarted = false;

  function animateCounter(el) {
    const target = Number(el.dataset.count);
    const duration = 1200;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = target === 98 ? `%${value}` : value.toLocaleString("tr-TR");

      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  const stats = document.querySelector(".stats");

  if (stats) {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countersStarted) {
          countersStarted = true;
          counters.forEach(animateCounter);
          statsObserver.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    statsObserver.observe(stats);
  }
});
