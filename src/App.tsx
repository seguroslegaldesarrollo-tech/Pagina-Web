import { Routes, Route } from "react-router";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./pages/homePage/homePage";
import ContactDrawer from "./components/contactDrawer/ContactDrawer";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <ContactDrawer />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
