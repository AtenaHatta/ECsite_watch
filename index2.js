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

      //H4
      var h4 = document.createElement("h4");
      h4.textContent = watch["Name"];

      //P tag
      var para = document.createElement("p");
      para.textContent = watch["Description"];

      //for (let i = 1; i < watchData.length; i++) {
      // const element = array[i];

      // var image = document.createElement("img");
      // const className = `"class-" + ${i}` ;
      // image.setAttribute("src", watch["image"]);
      // image.className = className

      // }
      var image = document.createElement("img");
      image.setAttribute("src", watch["image"]);

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

    // watchData.forEach((imgWeWant) => {
    //     window.addEventListener("click", () => {
    //         img.setAttribute("src", imgWeWant["image"][1]);
    //     });
    // });
    const img = document.querySelector("img");

    const btnRight = document.querySelector(".next-btn");
    const btnLeft = document.querySelector(".prev-btn");
  });
