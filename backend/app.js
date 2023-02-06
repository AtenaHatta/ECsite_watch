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
    }


]



app.get('/', (req, res) => {
  res.send('hello worldddd')
})


// Creates an API GET Endpoint for the "watch database" which returns the JSON for the list of watches
app.get('/GetAllWatches', (req, res) => {
    res.json(watches);
  })


  // Starts the server on port 3000
app.listen(3000)