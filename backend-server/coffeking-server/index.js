const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const cors = require('cors')
require("dotenv").config();
const port = process.env.PORT || 3000;

// middleware
app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0rmazcr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const database = client.db("coffeeKingDB");
    const coffeeKingCollection = database.collection("coffeeking");
    const userCollection = database.collection("users");


    // products

    app.post('/addProducts', async (req, res) => {
       const products = req.body;
       const result = await coffeeKingCollection.insertOne(products);
       res.send(result);
    })
    
    app.get('/addProducts', async (req, res) => {
        const products = await coffeeKingCollection.find({}).toArray();
        res.send(products);
    })

    app.get('/singleProduct/:id', async (req, res) => {
        const products = await coffeeKingCollection.findOne({_id: new ObjectId(req.params.id)});
        res.send(products);
    });
    

    app.get('/addProducts/:email', async (req, res) => {
        const products = await coffeeKingCollection.find({email: req.params.email}).toArray();
        res.send(products);
    });

    app.put('/updateProduct/:id', async (req, res) =>{
        const products = req.body;
        const filter = { _id: new ObjectId(req.params.id) };
        const options = { upsert: true };
        const updateDoc = { 
            $set: {
                name: products.name,
                price: products.price,
                description: products.description,
                image: products.image,
                email: products.email,
            } };
        const result = await coffeeKingCollection.updateOne(filter, updateDoc, options);
        console.log(result);
        res.send(result);
    })

    // users
    app.post('/addUsers', async (req, res) => {
      const users = req.body;
      const result = await userCollection.insertOne(users);
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

