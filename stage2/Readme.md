# HNGX Backend Stage 2 - REST API
This API allows you to perform CRUD (Create, Read, Update, Delete) operations on person records stored in a MongoDB database.


#  Installation
---

To use this repository on your local machine. You must have installed [Node.js](https://nodejs.org/) and also have [Git](https://git-scm.com/) configured on your machine.

Follow the steps below.

### Step 1: Clone the repository

In your preferred directory on your machine run this command

```
  git clone https://github.com/MideGiwa/hngx-backend.git
```

Move to the stage2 directory.

```
 cd hngx-backend/stage2
```

### Step 2: Install the dependencies

The clone repository contains a package.json file. Run the following command to install the packages

```
  npm install
```

### Step 3: Create an environment variable

Create a .env file, and paste the code below, replace <your-mongo-url-connection-string> with your MongoDB collection connection string. 
To set up MongoDB Atlas collection click here. [MongoDB](https://www.mongodb.com/).

```
  MONGO_URI=<your-mongo-url-connection-string>
```

### Step 4: Run your app

Run the app on your machine by running the command below

```
 npm start
```
