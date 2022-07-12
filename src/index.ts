import { User } from './models/User';
import axios from 'axios';

const user = new User({ name: 'Alex' });

user.events.on('click', () => {
  console.log('Clicked');
});

user.events.trigger('click');