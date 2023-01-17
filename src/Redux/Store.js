import {configureStore} from '@reduxjs/toolkit';
import { CartReducer} from './Reducers';



const Store= configureStore({
    reducer:{
        cart: CartReducer,
        
    },
})

export default Store;