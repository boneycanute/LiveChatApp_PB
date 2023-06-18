import { configureStore } from "@reduxjs/toolkit";
import themeSliceReducer from "./themeSlice";
import refreshSidebar from "./refreshSidebar";

export const store = configureStore({
  reducer: {
    themeKey: themeSliceReducer,
    refreshKey: refreshSidebar,
  },
});
