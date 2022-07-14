import { User } from './models/User';

const user = new User({ name: 'Alex', age: 26 });


console.log(user.get('name'));

