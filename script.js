const apiFile = "data.json"

fetch(apiFile)
    .then(res => res.json())
    .then(json => {
        const gridData = document.querySelector(".grid-item")
        
        json.forEach(e => {
            gridData.innerHTML += `
            <div class="items ${e.category}">
            <img src="${e.icon}" alt="">
            <p>${e.category}</p>
            <div>
              <p><span class="score">${e.score}</span> / 100</p>
            </div>
          </div>
            `
        });
    })