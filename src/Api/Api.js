const axios = require('axios').default;

// axios
//   .get('https://pfa.foreca.com/api/v1/capabilities', {
//     // headers: {
//     //   'Access-Control-Allow-Origin': '*',
//     //   authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9wZmEuZm9yZWNhLmNvbVwvYXV0aG9yaXplXC90b2tlbiIsImlhdCI6MTY1NTY1NjY0MiwiZXhwIjo5OTk5OTk5OTk5LCJuYmYiOjE2NTU2NTY2NDIsImp0aSI6IjY2NDc4MGI2NWUxNzk1Y2QiLCJzdWIiOiJhbmRyZXlzaHVsZ2EiLCJmbXQiOiJYRGNPaGpDNDArQUxqbFlUdGpiT2lBPT0ifQ.7EuvH4zBSBDF_cclXSqxAiScReNDqMRcUUG5OHVdo1o`
//     //   // authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9mbnc2LmZvcmVjYS5jb21cL2F1dGhvcml6ZVwvdG9rZW4iLCJpYXQiOjE1MjYzMDAzODAsImV4cCI6MTUyNjMwMzk4MCwibmJmIjoxNTI2MzAwMzgwLCJqdGkiOiJxSXl3WVlQNjc1NkczejBEIiwic3ViIjoibFFHa1Y4Z2pIeGUyZU1ibndUUUs4NktqVTY3RXJlS2htenY1IiwicHJ2IjoiYWY3YTAzOThkZGNiNWE3YTUzN2Q3YzdkMjU2NWEyZjgxZGM4ZTQxNCJ9.V8xg6L9yrY9__VH-jdrL_CqXisEpgcfdUa0NoxlGz0k`
//     // },
//     headers: {
//       'X-Requested-With': 'XMLHttpRequest',
//       'Access-Control-Allow-Origin': '*',
//     },
//     auth: {
//       username: 'andreyshulga',
//       password: 'pfhQCZdG0aXV'
//     },
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//     console.log(22);
//   });

axios
  .get('http://localhost:9020/list', {
    baseURL: 'https://pfa.foreca.com/api/v1/location/search/Barcelona?lang=es',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Origin': '*',
      authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9wZmEuZm9yZWNhLmNvbVwvYXV0aG9yaXplXC90b2tlbiIsImlhdCI6MTY1NTY1NjY0MiwiZXhwIjo5OTk5OTk5OTk5LCJuYmYiOjE2NTU2NTY2NDIsImp0aSI6IjY2NDc4MGI2NWUxNzk1Y2QiLCJzdWIiOiJhbmRyZXlzaHVsZ2EiLCJmbXQiOiJYRGNPaGpDNDArQUxqbFlUdGpiT2lBPT0ifQ.7EuvH4zBSBDF_cclXSqxAiScReNDqMRcUUG5OHVdo1o`
    },
    auth: {
      username: 'andreyshulga',
      password: 'pfhQCZdG0aXV'
    }
  })
  .then(function (response) {
    console.log(response);
    console.log(response.locations);
  })
  .catch(function (error) {
    console.log(error);
    console.log(22);
  });

// const instance = axios.create({
//   baseURL: 'https://pfa.foreca.com/api/v1/capabilities',
//   timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'}
// });
// instance.then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
//   console.log(22);
// });
// console.log(instance);
