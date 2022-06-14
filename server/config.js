import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT;
const user = process.env.USER;
const password = process.env.PASSWORD;

export { port, user, password };
