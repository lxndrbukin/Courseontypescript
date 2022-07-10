import { User } from './models/User';
import axios from 'axios';

// const user = new User({ name: 'Alex', age: 26 });

// user.on('click', () => {
//   console.log('Hi');
// });
// user.on('hover', () => {
//   console.log('Hi there');
// });

// user.trigger('hover');

axios.post('http://localhost:3000/users', {
  name: 'Alex',
  age: 26
});