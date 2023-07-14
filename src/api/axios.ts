// import axios from 'axios';

// // export default axios.create({
// //     // baseURL: 'http://localhost:3000'
// // });

// export default axios.get('https://jsonplaceholder.typicode.com/posts')
//   .then(response => {
//     // Handle the response data
//     console.log(response.data);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error(error);
//   });

// export{}
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    // Handle the response data
    console.log(response.data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
