var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

// simulates a database containing 12 watches with name, image, desc

const watches = [
    {
        "id" : 1,
        "Name" : "Rolex",
        "Description" : 2500,
        "image" : ["https://content.rolex.com/dam/watches/family-pages/datejust/update/2021/_rollers/01/family-page-datejust-roller-01-m126333-0010_1912jva-_002.jpg?imwidth=2880","https://content.rolex.com/dam/watches/family-pages/datejust/update/2021/_rollers/01/family-page-datejust-roller-01-m126334-0014_2001jva_001.jpg?imwidth=2880"]
    },

    {
        "id" : 2,
        "Name" : "Rolex ",
        "Description" : 2000,
        "image" : ["https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw5e8806b4/images/large/638084824088959423-2402987.png?sw=750&sh=750&sm=fit&sfrm=png","https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw90d29136/images/large/638084824088959423-2403069.png?sw=750&sh=750&sm=fit&sfrm=png","https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw8316ac50/images/large/638084824088959423-2403041.png?sw=750&sh=750&sm=fit&sfrm=png"]

    },
    {
        "id" : 3,
        "Name" : "Rolex ",
        "Description" : 2500,
        "image" : ["https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwb0cae0e4/images/large/637709568577061617-2135938.png?sw=750&sh=750&sm=fit&sfrm=png", "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwb9d1c0c9/images/large/637709568577061617-2136042.png?sw=750&sh=750&sm=fit&sfrm=png","https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw88b6fd31/images/large/637820451185413109-2308802.png?sw=750&sh=750&sm=fit&sfrm=png"]
    },
    {
        "id" : 4,
        "Name" : "Rolex ",
       "Description" : 2500,
        "image" : ["https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw9c35373d/images/large/637848004374586527-2303254.png?sw=750&sh=750&sm=fit&sfrm=png","https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw88fb2255/images/large/638089068818065785-2416551.png?sw=750&sh=750&sm=fit&sfrm=png", "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw35d6eefe/images/large/638089068818065785-2416735.png?sw=750&sh=750&sm=fit&sfrm=png"]
    },
    {
        "id" : 5,
        "Name" : "Rolex ",
       "Description" : 2500,
        "image" : ["https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwb0cae0e4/images/large/637709568577061617-2135938.png?sw=750&sh=750&sm=fit&sfrm=png", "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwb9d1c0c9/images/large/637709568577061617-2136042.png?sw=750&sh=750&sm=fit&sfrm=png","https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw88b6fd31/images/large/637820451185413109-2308802.png?sw=750&sh=750&sm=fit&sfrm=png"]
    },
    {
        "id" : 6,
        "Name" : "Rolex",
       "Description" : "900", 
       "image": ["https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw9c35373d/images/large/637848004374586527-2303254.png?sw=750&sh=750&sm=fit&sfrm=png","https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw88fb2255/images/large/638089068818065785-2416551.png?sw=750&sh=750&sm=fit&sfrm=png", "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw35d6eefe/images/large/638089068818065785-2416735.png?sw=750&sh=750&sm=fit&sfrm=png"]
    },
    {
        "id" : 7,
        "Name" : "Rolex ",
       "Description" : 2500,
        "image" : ["https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw192c8222/images/large/637709174551867959-2059087.png?sw=750&sh=750&sm=fit&sfrm=png", "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw490a1338/images/large/637709174551867959-2059117.png?sw=2000&sh=2000&sm=fit&sfrm=png"]
    },
    {
        "id" : 8,
        "Name" : "Rolex ",
       "Description" : 2500,
        "image" : ["https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw5e8806b4/images/large/638084824088959423-2402987.png?sw=750&sh=750&sm=fit&sfrm=png","https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw90d29136/images/large/638084824088959423-2403069.png?sw=750&sh=750&sm=fit&sfrm=png","https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw8316ac50/images/large/638084824088959423-2403041.png?sw=750&sh=750&sm=fit&sfrm=png"]
    },
    {
        "id" : 9,
        "Name" : "Rolex ",
       "Description" : 2500,
        "image" : ["https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw192c8222/images/large/637709174551867959-2059087.png?sw=750&sh=750&sm=fit&sfrm=png", "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw490a1338/images/large/637709174551867959-2059117.png?sw=2000&sh=2000&sm=fit&sfrm=png"]
    },
    {
        "id" : 10,
        "Name" : "Rolex ",
       "Description" : 3500,
        "image" : ["https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw192c8222/images/large/637709174551867959-2059087.png?sw=750&sh=750&sm=fit&sfrm=png", "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw490a1338/images/large/637709174551867959-2059117.png?sw=2000&sh=2000&sm=fit&sfrm=png"]
    },
    {
        "id" : 11,
        "Name" : "Rolex ",
       "Description" : 2500,
        "image" : ["https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw192c8222/images/large/637709174551867959-2059087.png?sw=750&sh=750&sm=fit&sfrm=png", "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw490a1338/images/large/637709174551867959-2059117.png?sw=2000&sh=2000&sm=fit&sfrm=png"]
    },
    {
        "id" : 12,
        "Name" : "Rolex ",
       "Description" : 2500,
        "image" : ["https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw192c8222/images/large/637709174551867959-2059087.png?sw=750&sh=750&sm=fit&sfrm=png", "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw490a1338/images/large/637709174551867959-2059117.png?sw=2000&sh=2000&sm=fit&sfrm=png"]
    }


]



app.get('/', (req, res) => {
  res.send('hello worldddd')
})


// Creates an API GET Endpoint for the "watch database" which returns the JSON for the list of watches
app.get('/GetAllWatches', (req, res) => {
    res.json(watches);
  })

  // write an endpoint which gets a watch BY ID
// app.get('/getID', (req, res) => {
//     res.json(watches{id})
// })

  // Starts the server on port 3000
app.listen(3000)