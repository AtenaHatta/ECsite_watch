//gyunay writes code here

// fetch from new express API endpoint named get all watches
fetch("http://localhost:3000/GetAllWatches")
  .then((res) => res.text())
  .then((watchData) => {

    watchData = JSON.parse(watchData);
    console.log(watchData)
    var container = document.getElementsByClassName("ul-grid")[0];
    // for each watch in the resulting data we create Javascript elements to put into the DOM.
    watchData.forEach((watch,i) => {
      //li
      var li = document.createElement("li");
console.log(i)
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
      image.setAttribute("class", "apiImg");

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
      para.textContent = "$" + watch.Description;

      //big button
      var btn = document.createElement("button");
      btn.setAttribute("class", "add-btn");
      btn.textContent = "ADD TO BAG";

      btn.addEventListener("click", () => {
        //we create the div item
        var cartDivItem = document.createElement("div");
        cartDivItem.setAttribute("class", "cart-item");

        //we create the img tag
        var cartImage = document.createElement("img");
        cartImage.src = watch["image"];

        //we create the h4 tag
        var cartH4 = document.createElement("h4");
        cartH4.textContent = watch["Name"];

        //we create the h5 tag
        var cartH5 = document.createElement("h5");
        cartH5.textContent = watch["Description"];

        //we create the span that removes one item
        var cartSpan = document.createElement("span");
        cartSpan.setAttribute("id", "remove-item");
        cartSpan.textContent = "remove";

        //we create the arrow up
        var arrowUp = document.createElement("i");
        arrowUp.setAttribute("class", "fas fa-chevron-up higher-amount");

        //we create the p tag
        var cartPara = document.createElement("p");
        cartPara.setAttribute("class", "item-amount");
        cartPara.textContent = "1";

        // we create the arrow down item
        var arrowDown = document.createElement("i");
        arrowDown.setAttribute("class", "fas fa-chevron-down lower-amount");

        cartDivItem.append(cartImage);
        cartDivItem.append(cartH4);
        cartDivItem.append(cartH5);
        cartDivItem.append(cartSpan);
        cartDivItem.append(arrowUp);
        cartDivItem.append(cartPara);
        cartDivItem.append(arrowDown);
        
        
        cartContainer[i].append(cartDivItem);

        //////////////===================///////////////////

        // const removeBtn = document.getElementById('removeAll')
        // //remove all items
        // var cartItems = document.querySelectorAll(".cart-item");
        // removeBtn.addEventListener("click", () => {
        //   // cartItems.remove();
        //   cartItems.forEach((item) => {
        //     item.remove()
        //   })
        // });

        //remove one items
        // cartContainer.addEventListener('click', (e) => {
        //   console.dir(e.target);
        //   if (e.target.parentElement.childNodes[3] === "remove-item") {
        //     const listToDelete = e.target.parentNode;
        //     cartItems.remove()
        //   }
        // })

        removeAll.addEventListener("click", deleteProduct);
        function deleteProduct(e) {
          let cartItem;
          if (e.target.tagName === "BUTTON") {
            cartItem = e.target.parentElement.previousElementSibling;
            cartItem.innerHTML = ""; // this removes from the DOM only
          }
        }

        removeOneItem.addEventListener("click", deleteOneItem);

        function deleteOneItem(e) {
          console.dir(removeOneItem);
          let cartItem;
          if (e.target.tagName === "SPAN") {
            cartItem = e.target.parentElement;
            cartItem.remove(); // this removes from the DOM only
          }
        }

        let state = { counter: 1 };
        const counter = cartDivItem.querySelector(".item-amount");
        arrowUp.addEventListener("click", (e) => {
          counter.textContent = ++state.counter;
        });

        arrowDown.addEventListener("click", () => {
          if (Number(counter.textContent) > 1) {
            counter.textContent = --state.counter;
          }
        });

        
        
        // Sum()
        // function Sum() {
        //   let SumHolder = 0;
        //   SumHolder += watch.Description;
        //   cartSumValue.textContent = SumHolder;
        // }
        
        console.dir(cartContainer);


        
          
          let value = 0
          cartContainer.forEach(item => {
            if(item.target.children === '.cart-item'){
              value += childNodes[2].textContent
              cartSumValue.textContent = value
            }
  
          });
        


      })



      div.append(image);
      div.append(prevBtn);
      div.append(nextBtn);

      li.append(div);
      li.append(h4);
      li.append(para);
      li.append(btn);

      container.append(li);
    });

    const removeOneItem = document.querySelector(".cart-content");
    const removeAll = document.querySelector(".cart-footer");
    const cartSumValue = removeAll.querySelector(".cart-total");
    const cartContainer = document.querySelector(".cart-content");
    //Using this will select ONLY the first image that has the next-btn class
    // const btnRight = document.querySelector(".next-btn");
    // const btnLeft = document.querySelector(".prev-btn");
  
  });

//Header Scroll background change
const headerColor = document.querySelector(".header-fixed");
window.onscroll = () => {
  if (window.scrollY > 100) {
    headerColor.classList.add("header-active");
  } else {
    headerColor.classList.remove("header-active");
  }
};
