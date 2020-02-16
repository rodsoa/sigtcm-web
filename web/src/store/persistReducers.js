import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'tcm',
      storage,
      whitelist: ['auth', 'user'],
      blacklist: ['auth.loading'],
    },
    reducers
  );

  return persistedReducer;
};
