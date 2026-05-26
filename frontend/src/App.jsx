import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#171717",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.1)",
          },
        }}
      />

      <Routes>

        {/* Public Portfolio */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />


      </Routes>
    </BrowserRouter>
  );
}

export default App;