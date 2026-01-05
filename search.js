
fetch("tools.json")
  .then(r => r.json())
  .then(data => {
    const all = [];
    Object.keys(data).forEach(cat => {
      data[cat].forEach(t => {
        all.push({
          name: t.name,
          url: "tools/" + t.file,
          category: cat
        });
      });
    });

    const input = document.getElementById("toolSearch");
    const results = document.getElementById("searchResults");

    input.addEventListener("input", () => {
      const q = input.value.toLowerCase();
      results.innerHTML = "";
      if (!q) return;

      all.filter(t => t.name.toLowerCase().includes(q))
         .slice(0, 20)
         .forEach(t => {
           const div = document.createElement("div");
           div.innerHTML = `<a href="${t.url}">${t.name}</a>
           <small>${t.category.toUpperCase()}</small>`;
           div.style.padding = "8px 0";
           results.appendChild(div);
         });
    });
  });
