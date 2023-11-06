# Project Name
Book Store CRUD Operation

## Description
Our Book Store is like a magical library where you can find all kinds of amazing stories and adventures to read and enjoy. We have books for kids of all ages, and we're here to help you find the perfect book to make your day extra special

## API Endpoints and Usage

### Create a Book (POST /books)

- **Description:** This endpoint allows you to add a new book to the BookStore.

- **Request: (body)**
  ```json
  {
    "title": "Book Title",
    "author": "Author Name",
    "summary": "Book Summary",
    "bookRating": 4.5
  }
  ```

- **Response:**
  ```json
  {
    "status": true,
    "message": "New book added to the BookStore",
    "result": {
      "_id": "123",
      "title": "Book Title",
      "author": "Author Name",
      "summary": "Book Summary",
      "bookRating": 4.5
    }
  }
  ```

### Read all Books (GET /books)

- **Description:** This endpoint retrieves a list of all books in the BookStore.

- **Response:**
  ```json
  {
    "status": true,
    "message": "List of all books in the BookStore",
    "result": [
      {
        "_id": "123",
        "title": "Book Title",
        "author": "Author Name",
        "summary": "Book Summary",
        "bookRating": 4.5
      },
      // Additional books...
    ]
  }
  ```

### Read a Book by ID (GET /books/:id)

- **Description:** This endpoint retrieves details of a specific book by its ID.

- **Request: (params)**
 ```json
    {
        "id": "123",
    }
 ```

- **Response:**
  ```json
  {
    "status": true,
    "message": "Book details retrieved successfully",
    "result": {
      "_id": "123",
      "title": "Book Title",
      "author": "Author Name",
      "summary": "Book Summary",
      "bookRating": 4.5
    }
  }
  ```

### Update Book (PATCH /books)

- **Description:** This endpoint allows you to update the details of a specific book by its ID.

- **Request: (body)**
  ```json
  {
    "id": "123",
    "title": "Updated Book Title",
    "author": "Updated Author Name",
    "summary": "Updated Book Summary",
    "bookRating": 4.7
  }
  ```

- **Response:**
  ```json
  {
    "status": true,
    "message": "Book details updated",
    "result": {
      "_id": "123",
      "title": "Updated Book Title",
      "author": "Updated Author Name",
      "summary": "Updated Book Summary",
      "bookRating": 4.7
    }
  }
  ```

### Delete Book (DELETE /books)

- **Description:** This endpoint allows you to delete a specific book by its ID.

- **Request: (body)**
 ```json
    {
        "id": "123",
    }
 ```

- **Response:**
  ```json
  {
    "status": true,
    "message": "Book information deleted"
  }
  ```

## Setup and Running Locally

Follow these steps to set up and run the application on your local machine:

### Prerequisites

Make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/): You need Node.js to run JavaScript on the server. You can download and install it from the official website.

- [MongoDB](https://www.mongodb.com/): MongoDB is used as the database for this application. Install MongoDB and make sure it's up and running. You can download MongoDB from their official website.

### Installation

1. **Clone the Repository:**

   Open your terminal and navigate to the directory where you want to store the project. Then, run the following command to clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Project Folder:**

   Change your current directory to the project folder:

   ```bash
   cd <project-folder>
   ```

3. **Install Dependencies:**

   Use npm to install the project dependencies:

   ```bash
   npm install
   ```

### Configuration

1. **Database Configuration:**

   In the project, you might need to configure the MongoDB connection. Look for a configuration file (e.g., `db/database.js`) or environment variables to set your MongoDB connection details. Update the MongoDB URI to point to your local MongoDB instance if necessary.

### Running the Application

1. **Start the Server:**

   To run the application, execute the following command:

   ```bash
   npm start
   ```

   This command will start the Node.js server.

2. **Access the Application:**

   Once the server is running, you can access the application by opening your web browser and navigating to:

   ```
   http://localhost:8000
   ```

   The application should now be accessible in your web browser, and you can begin interacting with it.
