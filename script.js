document.addEventListener("DOMContentLoaded", () => {

  /* ================= GITHUB REPOS ================= */
  fetch("https://api.github.com/users/mshahidvaseem/repos")
    .then(response => response.json())
    .then(repos => {
      const container = document.getElementById("repo-list");
      if (!container) return;

      container.innerHTML = "";

      repos.forEach(repo => {
        if (!repo.fork) {
          container.innerHTML += `
            <div class="repo-item">
              <h4>${repo.name}</h4>
              <p>${repo.description || ""}</p>
              <a href="${repo.html_url}" target="_blank">View Project</a>
              <hr>
            </div>
          `;
        }
      });
    })
    .catch(err => console.error("GitHub API error:", err));


  /* ================= DARK MODE TOGGLE ================= */
  const toggle = document.getElementById("darkToggle");

  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
  }


  /* ================= COUNTER ANIMATION ================= */
  const counters = document.querySelectorAll(".counter");
  let hasAnimated = false;

  const animateCounters = () => {
    if (hasAnimated) return;
    hasAnimated = true;

    counters.forEach(counter => {
      const target = parseInt(counter.dataset.target, 10);
      let count = 0;

      const step = Math.ceil(target / 40);

      const update = () => {
        count += step;
        if (count < target) {
          counter.textContent = count + "%";
          requestAnimationFrame(update);
        } else {
          counter.textContent = target + "%";
        }
      };

      update();
    });
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  const grid = document.querySelector(".achievement-grid");
  if (grid) observer.observe(grid);

});
