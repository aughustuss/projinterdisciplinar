import Footer from "components/fixeds/Footer";
import Header from "components/fixeds/Header";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const HomePage = React.lazy(() => import("views/Home"))
function App() {
  return (
    <React.Suspense>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route index path="/" Component={HomePage} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </React.Suspense>
  );
}

export default App;
