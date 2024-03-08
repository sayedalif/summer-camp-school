const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('summer camp school server is running!')
});


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.iegqqxy.mongodb.net/?retryWrites=true&w=majority`;

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

    const summerCampSchoolUserCollection = client.db('summerCampSchool').collection('users');
    const summerCampSchoolClassesCollection = client.db('summerCampSchool').collection('classes');

    // save user to database
    app.put('/users/:email', async (req, res) => {
      const email = req.params.email;
      const user = req.body;
      // console.log("🚀 ~ file: index.js:39 ~ app.put ~ user:", user);
      const filter = { email: email };
      const option = { upsert: true }
      const updateDoc = {
        $set: user
      };

      const result = await summerCampSchoolUserCollection.updateOne(filter, updateDoc, option);
      // console.log(result);
      res.send(result);
    });

    // get single user info form the database
    app.get('/users/:email', async (req, res) => {
      const email = req.params.email;
      console.log(email);
      const query = { email: email };
      console.log(query);
      const result = await summerCampSchoolUserCollection.findOne(query);
      console.log(result);
      res.send(result);
    });


    // these are for all the classes
    app.get('/classes', async (req, res) => {
      const result = await summerCampSchoolClassesCollection.find().toArray();
      res.send(result);
    });

    // here is the api for popular classes
    // i'm deciding popular classes based on their available seats and students enrolled in that class if the students enrolled are 70% of the available seats then that class is popular
    app.get('/popularclasses', async (req, res) => {
      const pipeline = [
        {
          $project: {
            _id: 1,
            className: 1,
            available_seats: 1,
            students_enrolled: 1,
            category: 1,
            description: 1,
            class_thumbnail: 1,
            rating: 1,
            price: 1,
            instructor_name: 1,
            percentage: {
              $multiply: [
                { $divide: ["$students_enrolled", "$available_seats"] },
                100
              ]
            }
          }
        },
        {
          $match: {
            percentage: { $gte: 70 } // Filter classes with percentage >= 70%
          }
        }
      ];

      const result = await summerCampSchoolClassesCollection.aggregate(pipeline).toArray();

      res.send(result);
    });

    // instructor api

    // * this is for getting all the instructor
    app.get('/users', async (req, res) => {
      const result = await summerCampSchoolUserCollection.find().toArray();
      res.send(result);
    });

    // popular instructor

    /* app.get('/popularinstructor', async (req, res) => {
      
    }); */

    // request to be an instructor
    app.patch('/users/:email', async (req, res) => {
      const email = req.query.email;
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`summer camp school app listening on port ${port}`)
});