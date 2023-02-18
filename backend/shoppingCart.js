// Shopping cart menu ------------------------------------------------------------------------------
document.querySelector('.menu-btn').addEventListener('click', function(){
  document.querySelector('.menu').classList.toggle('is-active');
});


// fetch from new express API endpoint named get all watches ----------------------------------------
fetch("http://localhost:3000/GetAllWatches")
  .then((res) => res.text())
  .then((watchData) => {

    watchData = JSON.parse(watchData);
    console.log(watchData)
    var container = document.getElementsByClassName("ul-grid")[0];
    // for each watch in the resulting data we create Javascript elements to put into the DOM.
    watchData.forEach((watch,i) => {
      console.log(i)
      
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

        
        cartContainer.append(cartDivItem);
        ////////////////////////////////////

        let value = 0;

        removeAll.addEventListener("click", deleteProduct);


        function deleteProduct(e) {
          value = "your total is $ " + 0;
          let cartItem;
          let clearLast ;                        
          if (e.target.tagName === "BUTTON") {
            cartItem = e.target.parentElement.previousElementSibling;
            clearLast = e.target.previousElementSibling
            cartItem.innerHTML = ""
            clearLast.innerHTML = value
            console.dir(clearLast);// this removes from the DOM only

          }
        }

        removeOneItem.addEventListener("click", deleteOneItem);

        function deleteOneItem(e) {
          console.dir(removeOneItem);
          let cartItem;
          if (e.target.tagName === "SPAN") {
            cartItem = e.target.parentElement;
            cartItem.remove();

            SumCalculatorNegative()
             // this removes from the DOM only
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
        
        console.dir(cartContainer);


          SumCalculator()
        
          function SumCalculator() {
            Array.from(cartContainer.children).forEach(item => {
              
              if(item.className === 'cart-item'){
                value = value + Number(item.childNodes[2].textContent)
                cartSumValue.textContent = value
                console.log(value);
                console.log(cartSumValue.textContent);
                document.getElementById("total").innerHTML = "your total is $" + value
              }
              const finalValue = value;
            });
          }

          function SumCalculatorNegative() {
            value = 0;
            Array.from(cartContainer.children).forEach(item => {
              if(item.className === 'cart-item'){
                value -= Number(item.childNodes[2].textContent);
              }
            });
            console.log(value);
            //For some reason this returns a negative number, but we can comvert to positive with
            document.getElementById("total").innerHTML = "your total is $" + value * -1
          }

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
  });



// const headerColor = document.querySelector(".header-fixed");
// window.onscroll = () => {
//   if (window.scrollY > 100) {
//     headerColor.classList.add("header-active");
//   } else {
//     headerColor.classList.remove("header-active");
//   }
// };

// Item counter ---------------------------------
arrowUp.setAttribute("class", "fas fa-chevron-up higher-amount");

var cartPara = document.createElement("p");
cartPara.setAttribute("class", "item-amount");
cartPara.textContent = "1";

var arrowDown = document.createElement("i");
arrowDown.setAttribute("class", "fas fa-chevron-down lower-amount");

arrowUp.addEventListener('click', () => {
  const counter = document.getElementById('cartPara');
  counter.innerHTML = ++state.count;
  });

  

