import { createStore } from '@/chase-react-ie8/index';
import user from './models/user';
import counter from './models/counter';
import menu from './models/menu';
import policySearch from './models/policySearch';

const store = createStore(
  {
    user,
    counter,
    menu,
    policySearch
  },
  {
    // options
  }
);

export default store;
