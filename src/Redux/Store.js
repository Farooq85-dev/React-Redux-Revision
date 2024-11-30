// Create Store
// Provide Access of Store to Your Application by Wrapping inside provider
// Create Slice or Features
// Register them in Store
// User it
// Fetch data of store using hook useSelector that provided by React-Redux
// Dispath actions
// End

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
