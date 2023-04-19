

import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import counterReducer from './screens/data/dataSlice';

import AsyncStorage from '@react-native-async-storage/async-storage';



import { FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE, } from 'redux-persist'



const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }





const persistedReducer = persistReducer(persistConfig, counterReducer)



export const store = configureStore({
    reducer: persistedReducer,
    
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });


export const persistor = persistStore(store)





export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;