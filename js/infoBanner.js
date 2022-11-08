AFRAME.registerComponent("info-banner", {
  schema: {
    itemId: { default: "", type: "string" },
  },
  update: function () {
    this.createBanner();
  },
  createBanner: function () {
    postersInfo = {
      superman: {
        banner_url: "https://cdn.vox-cdn.com/thumbor/q1wTDELGFlOu5VfUOlokDkRnmIc=/0x0:747x391/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/13124087/Screen_Shot_2018_09_20_at_11.42.37_AM.png",
        title: "Batman",
        released_year: "1939",
        description:
          "Batman is an ongoing American comic book series featuring the DC Comics superhero Batman as its main protagonist. The character, created by Bob Kane and Bill Finger,[2] first appeared in Detective Comics #27 (cover dated May 1939). "
      },
      spiderman: {
        banner_url: "https://cdn.vox-cdn.com/thumbor/qXr1aLsqTr71C-17anXd9AtmDrI=/0x0:2732x1333/1200x0/filters:focal(0x0:2732x1333):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/18279138/IMG_4A8AF1D5B4B3_1.jpeg",
        title: "Spiderman",
        released_year: "1962",
        description:
          "Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy (Aug. 1962) in the Silver Age of Comic Books.",
      },
      "captain-aero": {
        banner_url: "https://bleedingcool.com/wp-content/uploads/2022/11/captain-aero-featured-1200x675.jpg",
        title: "Captain Aero",
        released_year: "1956",
        description:
          "Captain Aero Comics is a comic book from the Golden Age of Comics, originally published by Helnit Publishing and acquired by Holyoke Publishing in 1942. Issue was published in December 1941, and it ran through issue (August 1946).",
      },
      "outer-space": {
        banner_url: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/0c8c00b0-5de2-405d-a8a1-f42a17c51661.__CR0,0,1877,1161_PT0_SX970_V1___.jpg",
        title: "Outer Space",
        released_year: "1978",
        description:
          "Outer space comic is a comic!",
      },
    };
    const { itemId } = this.data;

    const fadeBackgroundEl = document.querySelector("#fadeBackground");

    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("id", `${itemId}-banner`);

    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.9,
      height: 1,
    });

    entityEl.setAttribute("material", { color: "#000" });
    entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });

    const item = postersInfo[itemId];

    const imageEl = this.createImageEl(item);
    const titleEl = this.createTitleEl(item);
    const descriptionEl = this.createDescriptionEl(item);

    entityEl.appendChild(imageEl);
    entityEl.appendChild(titleEl);
    entityEl.appendChild(descriptionEl);

    fadeBackgroundEl.appendChild(entityEl);
  },
  createImageEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.85,
      height: 0.4,
    });
    entityEl.setAttribute("material", { src: item.banner_url });
    entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
    return entityEl;
  },
  createTitleEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 1.2,
      height: 2,
      color: "#fff",
      value: `${item.title} (${item.released_year})`,
    });
    entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
    return entityEl;
  },
  createDescriptionEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 0.75,
      height: 2,
      color: "#fff",
      wrapCount: "40",
      value: item.description,
    });
    entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
    return entityEl;
  },
});
