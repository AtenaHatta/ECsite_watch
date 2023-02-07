var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

// simulates a database containing 4 watches with name, image, desc

const watches = [
    {
        "id" : 1,
        "Name" : "Watch 1",
        "Description" : "Watch 1 description",
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_N3O7AO4gnk1lnQZRUS1cfA_HG5Za50KmUMRWN3e4fto51Vd8TDcWNselEiOIpZG09II&usqp=CAU"
    },

    {
        "id" : 2,
        "Name" : "Watch 2",
        "Description" : "Watch 2 description",
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_N3O7AO4gnk1lnQZRUS1cfA_HG5Za50KmUMRWN3e4fto51Vd8TDcWNselEiOIpZG09II&usqp=CAU"
    },
    {
        "id" : 3,
        "Name" : "Watch 3",
        "Description" : "Watch 3 description",
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmtKFAPHH40dYyMF7PXhi4jf5wi6BzHXB0INdh3PMZ_gkCOnYwSwBorTmwc9VilPHzUzc&usqp=CAU"
    },
    {
        "id" : 4,
        "Name" : "Watch 4",
        "Description" : "Watch 4 description",
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiroHvzawCs1rdG5qG06gQI35__X0xEdHhKQ&usqp=CAU"
    },
    {
        "id" : 5,
        "Name" : "Watch 1",
        "Description" : "Watch 1 description",
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_N3O7AO4gnk1lnQZRUS1cfA_HG5Za50KmUMRWN3e4fto51Vd8TDcWNselEiOIpZG09II&usqp=CAU"
    },
    {
        "id" : 6,
        "Name" : "Rolex",
        "Description" : "3546",
        "image" : ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_N3O7AO4gnk1lnQZRUS1cfA_HG5Za50KmUMRWN3e4fto51Vd8TDcWNselEiOIpZG09II&usqp=CAU", 
                   "https://content.rolex.com/dam/2022-11/upright-bba-with-shadow/m126720vtnr-0001.png?impolicy=v6-upright&imwidth=270" ]
    },
    {
        "id" : 7,
        "Name" : "Watch 1",
        "Description" : "Watch 1 description",
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_N3O7AO4gnk1lnQZRUS1cfA_HG5Za50KmUMRWN3e4fto51Vd8TDcWNselEiOIpZG09II&usqp=CAU"
    },
    {
        "id" : 8,
        "Name" : "Watch 1",
        "Description" : "Watch 1 description",
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_N3O7AO4gnk1lnQZRUS1cfA_HG5Za50KmUMRWN3e4fto51Vd8TDcWNselEiOIpZG09II&usqp=CAU"
    },
    {
        "id" : 9,
        "Name" : "Watch 1",
        "Description" : "Watch 1 description",
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_N3O7AO4gnk1lnQZRUS1cfA_HG5Za50KmUMRWN3e4fto51Vd8TDcWNselEiOIpZG09II&usqp=CAU"
    },
    {
        "id" : 10,
        "Name" : "Watch 1",
        "Description" : "Watch 1 description",
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_N3O7AO4gnk1lnQZRUS1cfA_HG5Za50KmUMRWN3e4fto51Vd8TDcWNselEiOIpZG09II&usqp=CAU"
    },
    {
        "id" : 11,
        "Name" : "Watch 1",
        "Description" : "Watch 1 description",
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_N3O7AO4gnk1lnQZRUS1cfA_HG5Za50KmUMRWN3e4fto51Vd8TDcWNselEiOIpZG09II&usqp=CAU"
    },
    {
        "id" : 12,
        "Name" : "Watch 1",
        "Description" : "Watch 1 description",
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_N3O7AO4gnk1lnQZRUS1cfA_HG5Za50KmUMRWN3e4fto51Vd8TDcWNselEiOIpZG09II&usqp=CAU"
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
  // Starts the server on port 3000
app.listen(3000)