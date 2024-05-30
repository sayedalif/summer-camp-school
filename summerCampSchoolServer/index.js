const express = require('express')
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');
// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
  res.send('summer camp school server is running!')
});


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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
    const summerCampSchoolBannerCollection = client.db('summerCampSchool').collection('banner');
    const summerCampSchoolCurriculumCollection = client.db('summerCampSchool').collection('curriculum');
    const summerCampSchoolClassesCollection = client.db('summerCampSchool').collection('classes');
    const summerCampSchoolReviewsCollection = client.db('summerCampSchool').collection('reviews');
    const summerCampSchoolCartsCollection = client.db('summerCampSchool').collection('carts');
    const summerCampSchoolPaymentCollection = client.db('summerCampSchool').collection('payments');

    // banner data

    // images and description
    app.get('/banner', async (req, res) => {
      const result = await summerCampSchoolBannerCollection.find().toArray();
      res.send(result);
    });

    // curriculum
    app.get('/curriculum', async (req, res) => {
      const result = await summerCampSchoolCurriculumCollection.find().toArray();
      res.send(result);
    });


    // for all the classes
    // using it in the classes route
    app.get('/classes', async (req, res) => {
      const result = await summerCampSchoolClassesCollection.find().toArray();
      res.send(result);
    });

    // for specific instructor classes
    app.get('/classes/:instructorId', async (req, res) => {
      const { instructorId } = req?.params;
      // console.log("🚀 ~ app.get ~ instructorId:", instructorId);
      const result = await summerCampSchoolClassesCollection.find({ instructor_id: instructorId }).toArray();
      res.send(result);
    });

    // * here is the api for popular classes
    // * i'm deciding popular classes based on their available seats and students enrolled in that class if the students enrolled are 70% of the available seats then that class is popular
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

    // save specific user information to database
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
      const query = { email: email };
      const result = await summerCampSchoolUserCollection.findOne(query);
      res.send(result);
    });

    // save users info to database when they login for the first time
    app.post('/users', async (req, res) => {
      const user = req.body;
      const result = await summerCampSchoolUserCollection.insertOne(user);
      res.send(result);
    });

    // save users more info to database
    app.post('/users/save-user-data', async (req, res) => {
      const { email, bio, address, phone, gender } = req?.body;
      const result = await summerCampSchoolUserCollection.updateOne(
        { email },
        {
          $set: {
            bio,
            address,
            phone,
            gender
          }
        },
        { upsert: false }
      );
      res.send(result);
    });

    // follow a specific instructor
    app.put('/users/follow/:instructorId', async (req, res) => {
      const { instructorId } = req?.params;
      // console.log("🚀 ~ app.put ~ instructorId:", instructorId)
      const { userEmail } = req?.body;
      // console.log("🚀 ~ app.put ~ userEmail:", userEmail);

      // Update user document to include the followed instructor's _id
      await summerCampSchoolUserCollection.updateOne(
        { email: userEmail },
        { $addToSet: { following: instructorId } }
      );

      res.send({ message: 'Successfully followed instructor.' });
    });


    // delete / unfollow specific instructor
    app.patch('/users/unfollow/:instructorId', async (req, res) => {
      const { instructorId } = req.params;
      const { userEmail } = req.body;

      // Find the user document using the email
      const user = await summerCampSchoolUserCollection.findOne({ email: userEmail });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Remove the instructorId from the list of followed instructors
      const updatedFollowedInstructors = user.following.filter(id => id !== instructorId);

      // Update the user document in the database with the new list of followed instructors
      await summerCampSchoolUserCollection.updateOne(
        { email: userEmail },
        { $set: { following: updatedFollowedInstructors } }
      );

      res.status(200).json({ message: 'Successfully unfollowed instructor' });
    });

    // * for add to cart
    app.post('/carts', async (req, res) => {
      const email = req?.query?.email;
      console.log("🚀 ~ app.post ~ email:", email);
      const addedToCart = req?.body;
      console.log("🚀 ~ app.post ~ addedToCart:", addedToCart);
      const result = await summerCampSchoolCartsCollection.insertOne(addedToCart);
      return res.send(result);
    });

    // delete a specific item from cart
    app.delete('/carts:/id', async (req, res) => {
      const id = req?.params?.id;
      const query = { _id: new ObjectId(id) };
      const result = await summerCampSchoolCartsCollection.deleteOne(query);
      res.send(result);
    });

    // * get specific user booked data
    app.get('/carts', async (req, res) => {
      const email = req?.query?.email;
      const result = await summerCampSchoolCartsCollection.find({ email: email }).toArray();
      return res.send(result);
    });

    // store all payment information to database.
    app.post('/payment', async (req, res) => {
      const { payment } = req?.body;
      const insertedResult = await summerCampSchoolPaymentCollection.insertOne(payment);
      const query = { _id: { $in: payment?.carts_id?.map(_id => new ObjectId(_id)) } };
      const deletedResult = await summerCampSchoolCartsCollection.deleteMany(query);

      res.send({ insertedResult, deletedResult });
    });

    // * for getting all instructors
    app.get('/instructors', async (req, res) => {
      const result = await summerCampSchoolUserCollection.find({ role: "instructor" }).toArray();
      res.send(result);
    });

    // * popular instructor
    app.get('/popularinstructor', async (req, res) => {

      const pipeline = [
        // Match users with role 'instructor'
        { $match: { role: 'instructor' } },
        // Convert _id to string
        { $addFields: { "_id": { $toString: "$_id" } } },

        // Lookup classes by instructor_id
        {
          $lookup: {
            from: 'classes',
            localField: '_id',
            foreignField: 'instructor_id',
            as: 'classes'
          }
        },
        // Unwind classes array
        { $unwind: '$classes' },
        // Calculate the ratio of students enrolled to available seats
        {
          $addFields: {
            popularityRatio: { $divide: ['$classes.students_enrolled', '$classes.available_seats'] }
          }
        },
        // Filter instructors with popularity ratio >= 0.7
        { $match: { popularityRatio: { $gte: 0.7 } } },
        // Group by instructor and collect class names
        {
          $group: {
            _id: '$_id',
            instructorName: { $first: '$name' },
            image: { $first: '$image' }, // Assuming 'image' field exists in users collection
            classesNames: { $push: '$classes.className' } // Assuming 'className' field exists in classes collection
          }
        },
        // Sort by instructor name
        { $sort: { instructorName: 1 } }
      ];

      const result = await summerCampSchoolUserCollection.aggregate(pipeline).toArray();
      res.send(result);
    });

    // payment-intent
    app.post("/create-payment-intent", async (req, res) => {
      const { price } = req?.body;
      console.log("🚀 ~ app.post ~ price:", typeof (price));
      console.log("🚀 ~ app.post ~ price:", price);

      const amount = price * 100;
      // Create a PaymentIntent with the order amount and currency
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
        automatic_payment_methods: {
          enabled: true,
        },
      });

      res.send({
        clientSecret: paymentIntent.client_secret,
      });
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
      // here I'm returning the data
      const stats = [
        { classes: classesCount },
        { members: membersCount },
        { instructor: instructorCount },
        { 'average rating': averageRating },
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