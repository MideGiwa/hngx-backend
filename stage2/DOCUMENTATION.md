# Project: HNGX Internship Stage 2 Backend Task

# A. Documentation

---

## 1. Get All Persons

#### Description

- This endpoint gets all persons in the database.

### Method: GET

> ```
> https://hngx-backend-stage2.onrender.com/api/
> ```

### Example Response (**raw**)

```json
[
  {
    "_id": "64ff0942e567bfbe1a85cf6d",
    "name": "Mide Giwa",
    "__v": 0
    },
    {
    "_id": "6501b21566e81972799a64af",
    "name": "Adeleke Ogundare",
    "__v": 0
    }
]
```


## 2.Create a Person

#### Description

- This endpoint creates a new person and saves it to the database.
- Only name of type string is allowed in the body.
- The example below shows that a person of name "Adeleke Odundare" has been created and added to the database.
- Inputs must be passed through the request body.
- Name must be unique, if a duplicate name is entered, the request will return an error.

### Method: POST

> ```
> https://hngx-backend-stage2.onrender.com
> ```

### Example Body (**raw**)

```json
{
  "name": "Adeleke Ogundare"
}
```

### Example Response (**raw**)

```json
{
  "name": "Adeleke Ogundare",
  "_id": "6501b21566e81972799a64af",
  "__v": 0
}
```

### Example Empty or Non-String Resonse (**raw**)

```json
  { "message": "Provided input should not be empty and must be a string! Example: Mide Giwa." }

```

### Example Duplicate Error Response (**raw**)

```json
{
  "message": "User already exists. Please use another name."
}
```


## 3. Get a Person

### Method: GET

> ```
> https://hngx-backend-stage2.onrender.com{user_id}
> ```

- This endpoint gets a person for the database using the provided user_id.
- Supposing user_id is "6501b21566e81972799a64af";

### Example Response (**raw**)

```json
{
  "_id": "6501b21566e81972799a64af",
  "name": "Adeleke Ogundare",
  "__v": 0
}
```

### Example User Not Found Response (**raw**)

```json 
{ "message": "Person not found." }
```
### Example Invalid User Id Response (**raw**)

```json
  {"message": "Invalid user id!"}
```

## 4. Update a Person

### Method: PUT

> ```
> https://hngx-backend-stage2.onrender.com{user_id}
> ```

- This endpoint updates a person for the database using the provided user_id.
- Supposing user_id is "6501b21566e81972799a64af";

### Example Body (**raw**)

```json
{
  "name": "Adeleke Ogundare Micheal"
}
```

### Example Response (**raw**)

```json
{
  "msg": "User with ID 6501b21566e81972799a64af has  successfully been updated.",
  "person": {
    "_id": "6501b21566e81972799a64af",
    "name": "Adeleke Odundare Micheal",
    "__v": 0
  }
}
```


## 5. Delete a Person

### Method: DELETE

> ```
> https://hngx-backend-stage2.onrender.com{user_id}
> ```

- This endpoint deletes a person from the database using the provided user_id.
- Supposing user_id is "6501b21566e81972799a64af";

### Example Response (**raw**)

```json
{
  "message": "Adeleke Ogundare Micheal with ID 6501b21566e81972799a64af has been deleted."
}
```

---

# B. Installation

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
