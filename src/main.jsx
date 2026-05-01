import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { store, persistor } from "./redux/store.js";
import App from "./App.jsx";
import "./styles/global.css";
import "react-datepicker/dist/react-datepicker.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
          <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
