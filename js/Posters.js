AFRAME.registerComponent("comics-posters", {
  init: function() {
    this.postersContainer = this.el;
    this.posters();
  },

  posters: function() {
    const postersRef = [
      {
        id: "superman",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Batman_Comic_Book_-_NARA_-_595420.gif"
      },
      {
        id: "spiderman",
        url: "https://m.media-amazon.com/images/I/71bq-2eTwRL.jpg"
      },

      {
        id: "captain-aero",
        url: "https://comicvine.gamespot.com/a/uploads/scale_small/5/58993/2641606-captaero25.jpg"
      },
      {
        id: "outer-space",
        url: "https://m.media-amazon.com/images/I/51konmLI4zL.jpg"
      }
    ];
    let prevoiusXPosition = -60;

    for (var item of postersRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      
      const borderEl = this.createBorder(position, item.id);

     
      const poster = this.createPoster(item);
      borderEl.appendChild(poster);

      this.postersContainer.appendChild(borderEl);
    }
  },
  createBorder: function(position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 22,
      height: 40
    });

    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", { color: "#fff" });
    entityEl.setAttribute("cursor-listener", {});
    return entityEl;
  },
  createPoster: function(item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 20,
      height: 28
    });

    entityEl.setAttribute("position", { x: 0, y: 5, z: 0.1 });
    entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  }
});
