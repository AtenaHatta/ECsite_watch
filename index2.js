//gyunay writes code here 

// fetch from new express API endpoint named get all watches
fetch("http://localhost:3000/GetAllWatches").then(res => res.text()).then(watchData => {
    console.log("here");
    console.log(watchData);
    watchData = JSON.parse(watchData);
    var container = document.getElementsByClassName("ul-grid")[0];
    // for each watch in the resulting data we create Javascript elements to put into the DOM.
    watchData.forEach(watch => {
            var li = document.createElement("li");
            var div = document.createElement("div");
            
            var h4 = document.createElement("h4");
        
            h4.textContent = watch["Name"];


            var para = document.createElement("p");

            para.textContent = watch["Description"];

            var image  = document.createElement("img");

            image.setAttribute("src", watch["image"]);

            var btn  = document.createElement("button");
            btn.setAttribute("class", "add-btn");
            btn.textContent = "ADD TO BAG";

            div.append(image);
            div.append(h4);
            div.append(para);
            div.append(btn);

            li.append(div);

            container.append(li);
    });

});
