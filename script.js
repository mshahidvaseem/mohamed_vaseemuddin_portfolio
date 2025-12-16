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
const counters = document.querySelectorAll(".counter");

const animateCounters = () => {
  counters.forEach(counter => {
    const target = +counter.dataset.target;
    let count = 0;

    const update = () => {
      if (count < target) {
        count++;
        counter.textContent = count + "%";
        setTimeout(update, 30);
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

observer.observe(document.querySelector(".achievement-grid"));
