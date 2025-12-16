fetch("https://api.github.com/users/mshahidvaseem/repos")
.then(r=>r.json())
.then(d=>{
  const c=document.getElementById("repo-list");
  c.innerHTML="";
  d.forEach(r=>{
    if(!r.fork){
      c.innerHTML+=`<h4>${r.name}</h4><p>${r.description||""}</p><a href="${r.html_url}" target="_blank">View</a><hr>`;
    }
  })
});

// ===== Dark Mode Toggle =====
const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// ===== Counter Animation on Scroll =====
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  const animateCounters = () => {
    counters.forEach(counter => {
      const target = +counter.dataset.target;
      let count = 0;

      const update = () => {
        if (count < target) {
          count++;
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
  }, { threshold: 0.4 });

  const grid = document.querySelector(".achievement-grid");
  if (grid) observer.observe(grid);
});

