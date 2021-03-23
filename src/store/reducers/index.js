import {combineReducers} from 'redux';
import myService from './myService';
import myWork from './myWork';
import ourCustomers from './ourCustomers';
import ourEmployees from './ourEmployees';
import ourServices from './ourServices';
import user from './user';

export default combineReducers({
    user:user,
    myService:myService,
    myWork:myWork,
    ourCustomers:ourCustomers,
    ourEmployees:ourEmployees,
    ourServices:ourServices
});
