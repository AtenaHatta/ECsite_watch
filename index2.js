//gyunay writes code here

// fetch from new express API endpoint named get all watches
fetch("http://localhost:3000/GetAllWatches")
  .then((res) => res.text())
  .then((watchData) => {
    watchData = JSON.parse(watchData);
    var container = document.getElementsByClassName("ul-grid")[0];
    // for each watch in the resulting data we create Javascript elements to put into the DOM.
    watchData.forEach((watch) => {
      //li
      var li = document.createElement("li");

      //div
      var div = document.createElement("div");
      div.setAttribute("class", "imageCarousel");

      var prevBtn = document.createElement("button");
      var nextBtn = document.createElement("button");
      prevBtn.setAttribute("class", "prev-btn");
      prevBtn.textContent = "<";
      nextBtn.setAttribute("class", "next-btn");
      nextBtn.textContent = ">";

      var image = document.createElement("img");
      image.setAttribute("src", watch["image"][0]);
      image.setAttribute("class","apiImg")

      nextBtn.addEventListener("click", () => {
        const currentImageSrc = image.src;
        const currentIndexOfImage = watch["image"].indexOf(currentImageSrc);

        if (currentIndexOfImage < watch["image"].length - 1) {
          image.src = watch["image"][currentIndexOfImage + 1];
        } else {
          image.src = watch["image"][0];
        }
      });

      prevBtn.addEventListener("click", () => {
        const currentImageSrc = image.src;
        const currentIndexOfImage = watch["image"].indexOf(currentImageSrc);

        if (currentIndexOfImage > 0) {
          image.src = watch["image"][currentIndexOfImage - 1];
        } else {
          image.src = watch["image"][watch["image"].length - 1];
        }
      });

      //H4
      var h4 = document.createElement("h4");
      h4.textContent = watch["Name"];


      //P tag
      var para = document.createElement("p");
      para.textContent = watch["Description"];

      //big button
      var btn = document.createElement("button");
      btn.setAttribute("class", "add-btn");
      btn.textContent = "ADD TO BAG";

      div.append(image);
      div.append(prevBtn);
      div.append(nextBtn);

      li.append(div);
      li.append(h4);
      li.append(para);
      li.append(btn);

      container.append(li);
    });

    //Using this will select ONLY the first image that has the next-btn class
    // const btnRight = document.querySelector(".next-btn");
    // const btnLeft = document.querySelector(".prev-btn");
  });
