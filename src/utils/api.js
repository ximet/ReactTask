import axios from 'axios';
// import { token } from '../Config/token';

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9wZmEuZm9yZWNhLmNvbVwvYXV0aG9yaXplXC90b2tlbiIsImlhdCI6MTY1MDYzNjIwMiwiZXhwIjo5OTk5OTk5OTk5LCJuYmYiOjE2NTA2MzYyMDIsImp0aSI6ImU3ODNiOTA5NDdhZjZlYjciLCJzdWIiOiJsdWtvbmVsaXMxIiwiZm10IjoiWERjT2hqQzQwK0FMamxZVHRqYk9pQT09In0.aZP7m278J_ToDZFqLUVBARHs161WQf-bjhbwa1y_fIo';

export const weatherApi = axios.create({
  baseURL: 'https://pfa.foreca.com/api/v1',
  headers: { authorization: `Bearer ${token}` }
});
