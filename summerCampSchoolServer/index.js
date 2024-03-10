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
    const summerCampSchoolReviewsCollection = client.db('summerCampSchool').collection('reviews');

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


    // * this is for getting all the users
    app.get('/users', async (req, res) => {
      const result = await summerCampSchoolUserCollection.find().toArray();
      res.send(result);
    });

    // * most popular instructor of all time api
    app.get('/mostpopularinstructor', async (req, res) => {
      const pipeline = [
        // Match users with role 'instructor'
        {
          $match: {
            role: "instructor"
          }
        },
        // Lookup classes for each instructor
        {
          $lookup: {
            from: "classes",
            localField: "instructor_id", // assuming instructor _id is stored here
            foreignField: "instructor_id", // assuming instructor id in classes collection
            as: "classes"
          }
        },
        // Unwind the classes array
        {
          $unwind: "$classes"
        },
        // Project to calculate percentage for each class
        {
          $project: {
            _id: 0,
            instructor_id: "$_id",
            instructor_name: "$instructor_name", // Assuming instructor name is stored in users collection
            class_name: "$classes.className",
            available_seats: "$classes.available_seats",
            students_enrolled: "$classes.students_enrolled",
            percentage: {
              $multiply: [
                {
                  $divide: ["$classes.students_enrolled", "$classes.available_seats"]
                },
                100
              ]
            }
          }
        },
        // Filter only popular instructors (percentage >= 70)
        {
          $match: {
            percentage: { $gte: 70 }
          }
        },
        // Group by instructor to calculate total popular classes and total classes
        {
          $group: {
            _id: "$instructor_id",
            instructor_name: { $first: "$instructor_name" },
            total_popular_classes: { $sum: 1 },
            total_classes: { $sum: 1 }
          }
        },
        // Project to calculate percentage of popular classes
        {
          $project: {
            _id: 0,
            instructor_id: "$_id",
            instructor_name: 1,
            popularity_percentage: {
              $multiply: [
                {
                  $divide: ["$total_popular_classes", "$total_classes"]
                },
                100
              ]
            }
          }
        },
        // Sort by popularity_percentage in descending order
        {
          $sort: {
            popularity_percentage: -1
          }
        }
      ];

      const result = await summerCampSchoolUserCollection.aggregate(pipeline).toArray();
      res.send(result);
    });

    // popular instructor
    app.get('/popularinstructor', async (req, res) => {
      const pipeline = [
        // Match users with role 'instructor'
        {
          $match: {
            role: "instructor"
          }
        },
        // Lookup classes for each instructor
        {
          $lookup: {
            from: "classes",
            localField: "instructor_id", // assuming instructor _id is stored here
            foreignField: "instructor_id", // assuming instructor id in classes collection
            as: "classes"
          }
        },
        // Unwind the classes array
        {
          $unwind: "$classes"
        },
        // Project to calculate percentage for each class
        {
          $project: {
            _id: 0,
            instructor_id: "$_id",
            instructor_name: "$name", // Assuming instructor name is stored in users collection
            email: "$email",
            instructor_image: "$image",
            class_name: "$classes.className",
            available_seats: "$classes.available_seats",
            students_enrolled: "$classes.students_enrolled",
            percentage: {
              $multiply: [
                {
                  $divide: ["$classes.students_enrolled", "$classes.available_seats"]
                },
                100
              ]
            }
          }
        },
        // Filter only popular classes (percentage >= 70)
        {
          $match: {
            percentage: { $gte: 70 }
          }
        },
        // Group by instructor to get distinct popular instructors
        {
          $group: {
            _id: "$instructor_id",
            instructor_name: { $first: "$instructor_name" },
            email: { $first: "$email" },
            instructor_image: { $first: "$instructor_image" },
            total_classes: { $sum: 1 },
            classes_names: { $push: "$class_name" }
          }
        },
        // Project to reshape the output
        {
          $project: {
            _id: 0,
            instructor_id: "$_id",
            instructor_name: 1,
            email: 1,
            instructor_image: 1,
            total_classes: 1,
            classes_names: 1
          }
        }
      ];

      const result = await summerCampSchoolUserCollection.aggregate(pipeline).toArray();
      res.send(result);
    });

    // reviews
    app.get('/reviews', async (req, res) => {
      const result = await summerCampSchoolReviewsCollection.find().toArray();
      res.send(result);
    });

    // stats for showing on the homepage
    app.get('/stats', async (req, res) => {
      // Get total amount of classes
      const classesCount = await summerCampSchoolClassesCollection.countDocuments();

      // Get amount of members
      const membersCount = await summerCampSchoolUserCollection.countDocuments({ role: { $ne: 'instructor' } });

      const instructorCount = await summerCampSchoolUserCollection.countDocuments({ role: 'instructor' });

      // Calculate average rating
      const reviews = await summerCampSchoolReviewsCollection.find().toArray();
      const totalRatings = reviews.reduce((sum, review) => sum + review.rating, 0);
      const averageRating = (totalRatings / reviews.length).toFixed(2);

      // Prepare response object
      const stats = [
        { classesCount: classesCount },
        { membersCount: membersCount },
        { instructor: instructorCount },
        { averageRating: averageRating },
      ];

      // Send response
      res.send(stats);
    });


    /* ------------------------------------------------ */
    // * Send a ping to confirm a successful connection
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