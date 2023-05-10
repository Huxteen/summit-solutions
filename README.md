```markdown
# Summit Solutions

Summit Solution is a comprehensive application designed to help you organize talks, schedule talks, manage speakers and attendees, and facilitate real-time chat. It's built with Node.js, Express, Sequelize, and Socket.IO.

## Features

- **Organize Talks:** Easily create and manage talks for your event.
- **Schedule Talks:** Plan your talk with a built-in scheduling feature.
- **Manage Speakers and Attendees:** Keep track of speakers and attendees with dedicated management features.
- **Real-Time Chat:** Facilitate communication with a real-time chat feature powered by Socket.IO.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need to have Node.js and npm installed on your machine. You can download Node.js from the [official website](https://nodejs.org/), and npm is included with Node.js.

### Installing

1. First, clone the repository to your local machine:

```bash
git clone https://github.com/Huxteen/summit-solutions.git
```

2. Navigate into the project directory:

```bash
cd summit-solutions
```

3. Install the dependencies:

```bash
npm install
```

### Database Setup

This project uses SQLite as the database. Sequelize is used as the ORM. You will need to create the database and run the migrations.

```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
```

### Running the Application

You can start the application with the following command:

```bash
npm start
```

The application will be running at [http://localhost:3030](http://localhost:3030).

## API Documentation

You can view the API documentation at [http://localhost:3030/api-docs](http://localhost:3030/api-docs) when the application is running.

## Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express](https://expressjs.com/) - Web application framework
- [Sequelize](https://sequelize.org/) - Promise-based Node.js ORM
- [Socket.IO](https://socket.io/) - Real-time engine


```
