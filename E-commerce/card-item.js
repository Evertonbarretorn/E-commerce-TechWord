      class Card extends HTMLElement {
        constructor() {
          super();
        }
      
        connectedCallback() {
          const div = document.createElement("div");
          div.className = "card";
          const id =this.getAttribute("id");
          div.innerHTML = `
            <img src="${this.getAttribute("img")}" class="card-img-top img-size" alt="${this.getAttribute("title")}">
            <div class="card-body">
              <h2 class="card-title">${this.getAttribute("title")}</h2>
              <h7 class="card-text">${this.getAttribute("description")}</h7>
              <h5 class="card-text">${this.getAttribute("value")}</h5>
              <a href="detalhes.html?id=${id}" class="btn btn-success">Ver mais</a>
            </div>
          `;
          this.appendChild(div);
        }
      }
      
      customElements.define("card-item", Card);