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