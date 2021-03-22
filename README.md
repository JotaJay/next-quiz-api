### WIP Quiz APP Serverless API

This is an example of a serverless Quiz API created using [Next.js](https://nextjs.org/) and [MongoDB](https://www.mongodb.com).

## Starting the project

First, install all dependencies

```bash
npm install
# or
yarn
```

Start the server

```bash
npm run dev
# or
yarn dev
```

## Entity Relation Diagram

![Diagram](https://github.com/JotaJay/next-quiz-api/blob/main/public/Diagram.png)

## API Endpoints

As of now the API offers the following endpoints:

## User

- `POST /users`: Create a new user
- `GET /users/{id}`: Get user by id
- `GET /users`: Get all users

## Quiz

- `POST /quizzes`: Create a new quiz
- `GET /quizzes/`: Get all quizzes
- `GET /quizzes/{id}`: Get quiz by id
- `DELETE /quizzes{id}`: Delete quiz by id
- `PUT /quizzes/{id}`: Update quiz by id
- `GET /quizzes/subject/{subject}`: Get quz by subject
- `GET /quizzes/category/{category}`: Get quiz by category

## CompletedQuiz

- `POST /quizzes/completed`: Create a new completed quiz
- `GET /quizzes/completed/{id}`: Get completed quiz by id
- `PUT /quizzes/completed/{id}`: Update completed quiz by id
- `DELETE /quizzes/completed/{id}`: Delete completed quiz by id
- `GET /quizzes/completed/user/{id}`: Get completed quiz by user id
