import { createStore } from '@/chase-react-ie8/index';
import user from './models/user';
import counter from './models/counter';

const store = createStore(
  {
    user,
    counter
  },
  {
    // options
  }
);

export default store;
