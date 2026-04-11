import {createContext} from 'react';


// GlobalContext defines context structure
const GlobalContext = createContext({
    key: {}, // default user is an empty object, can store info like FN, LN email etc.. 
})

export default GlobalContext; 
