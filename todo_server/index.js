const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
require('dotenv').config()
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());

// Configure Multer for file uploads
const upload = multer({ dest: "uploads/" });

// In-memory array to store uploaded file data temporarily
let uploadedFiles = [];



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.izczxgs.mongodb.net/?retryWrites=true&w=majority`;

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
    // await client.connect();
    
    // const filesCollection = client.db('todoDB').collection('files');

    const filesCollection = client.db('todoDB').collection('files');
 // Route to handle file uploads
    app.post("/files", upload.array("files"), (req, res) => {
      const files = req.files.map((file) => ({
        name: file.originalname,
        extension: file.originalname.split(".").pop(),
        size: file.size,
      }));

      // Append new files to in-memory array
      uploadedFiles = [...uploadedFiles, ...files];

      res.json({ message: "Files uploaded successfully", count: uploadedFiles.length });
    });

    // Route to retrieve the count of uploaded files
    app.get("/files/count", (req, res) => {
      res.json({ count: uploadedFiles.length });
    });

    // // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
    run().catch(console.dir);
    
    app.get('/', (req, res) => {
        res.send('server is running')
    })

    app.listen(port, () => {
        console.log(`server is running on port ${port}`);
    })
