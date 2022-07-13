import { User } from './models/User';

const user = new User({ name: 'Alex', age: 26 });

user.on('change', () => {
  console.log('User was changed');
})