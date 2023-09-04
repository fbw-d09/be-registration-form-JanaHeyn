# Backend for a Registration Form

This assignment will allow to practise building the database structure for a registration form

## What you will be doing

This project will allow you to practise;

> - Connecting to a MongoDB database
> - Writing a schema for a MongoDB database with Mongoose

## Tasks

### Task 1 - Write a .env file

Note: For this assignment, we already assume you have a MongoDB server, and know how to access your credentials.

- Using the `.env.example` file as a template, create a `.env` file

> The database connection string should be provided to you by MongoDB

### Task 2 - Using dotenv

1. Install the [dotenv](https://www.npmjs.com/package/dotenv) npm package
2. Import `dotenv` into `server.js`
3. Add the following code to parse your `.env` variables into the `process.env` global object:

    ```javascript
    dotenv.config();
    ```

### Task 3 - Connecting Mongoose with your database

We will install `mongoose` and connect it to our database

1. Install the [mongoose](https://www.npmjs.com/package/mongoose) npm package
2. Import `mongoose` into `server.js`
3. Use the `connect` method from `mongoose` to connect to your database, using the connection string you can now read with the `process.env` global variable

    ```javascript
     mongoose.connect();
    ```

### Task 4 - Let's test our DB connection

The `mongoose.connect()` method returns a promise, which we can use to determine if the connection with the database worked or not.

1. Use the `then` method (the promise was **resolved**) to display a `console.log()` message that the connection was successful

2. Use the `catch` method (the promise was **rejected**) to display a `console.log()` message that the database connection failed

3. Test your code by running it. What message do you see in printed in the `console`?

### Task 5 - Creating a registration endpoint

Now we've connected our database, we want to build an endpoint which will allow us to register new users onto our website. To do this, we will have to use `express.js`

1. Install the [express](https://www.npmjs.com/package/express) npm package

2. Import `express` into `server.js`

3. Make a call to `app.listen()` to allow the server to start listening for incoming connections. We will use port `3001`.

   > Bonus: Move the port number into your `.env` file

4. Create an endpoint. It should:
    - listen for a `POST` request (we want to receive data)
    - use the path `/register`
    - don't forget `response.send()`!
   
5. Use an API testing tool such as [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) to test your endpoint.

If your endpoint works, move onto the next assignment

### Task 6 - Mongoose - Complete the User schema

In the file `models/User.js`;

1. Import `mongoose` into `models/User.js`
2. Create a schema and assign it to the variable `userSchema`. The schema should have the following fields;

    ```
    username
    password
    firstName
    lastName
    dateOfBirth
    email
    telephone
    gender
    ```

    `dateOfBirth` should be of type `Date`

    The rest should be of type `String`

### Task 7 - Adding validation to the User schema

1. `username`, `password` and `email` should be `required`

2. `gender` should have an `enum` validation. It should accept only the strings:
   - `'Male'`
   - `'Female'`
   - `'Other'`
   - `'N/A'`

3. `gender` should default to the string `'N/A'`

### Task 8 - Creating a model from the schema

Now our schema has been defined, we must instantiate it into a model

> By doing this it will give us access to the document methods such as `create()`, allowing us to quickly and easily save data into our database.

In the file `models/User.js`;

1. Create model from the `userSchema` and assign it to a variable called `User`
2. Export the variable `User` from `models/User.js`
3. Import the `User` model into `server.js`

### Task 9 - Preparing to receive data from POST

We will replace our sample data with the data we receive from the **POST** request

Before we can do this, we must prepare our application to receive data.

1. Install the [cors](https://www.npmjs.com/package/cors) npm package
2. Add the middleware `express.json()` and `cors()` to your server

   > Hint: Don't forget to import `cors` before trying to use it

### Task 10 - Saving data to your collection with the model

When we save data to our model with the `create()` method, the data is automatically saved to the database

Our data for the new user will come from the request **body** object - for this step we will assume that all the properties on this object match the fields in the `User` schema

Inside the `/register` endpoint;

1. use the `User` model with the `create()` method to save a user into the database

   ##### Example
   
   ```javascript
   User.create({});
   ```

   > `create()` returns a `Promise`! Either use the `async / await` keywords or `then()` and `catch()` methods

2. Fill in the fields with the properties from the request **body** object

3. Update your code to handle errors
   - If the `Promise` fails send a status code of `400` with an appropriate message
   - If the `Promise` succeeds send a status code of `200` with an appropriate message
   
   > Hint: You will need 2 `response.send()` statements
   
   > Hint: You can send a different response code with `response.status()` 

4. Test your endpoint. Use a MongoDB database viewing tool such as [Compass](https://www.mongodb.com/products/compass) to check if the data you added is in the database.

### Task 11 - Get all users with GET /list

1. Create an endpoint inside `server.js`. It should:
   - listen for a `GET` request (we want to receive data from the server)
   - use the path `/list`
   - don't forget `response.send()`

2. Inside the handler for the `/list` endpoint, use the method `User.find()` to get all the users saved in the database
   - `User.find()` returns a `Promise`
   - Return the results to the user

# Bonus Tasks

## Bonus 1 - Build a frontend for the POST /user/register request

Build a frontend which will make the `POST` requests you were previously testing with your API testing tool.

1. The frontend should consist of a `<form>`, which will take the following details:

    - username
    - password
    - firstName
    - lastName
    - dateOfBirth
    - email
    - telephone
    - gender

    There should be a button to `Submit` the form
