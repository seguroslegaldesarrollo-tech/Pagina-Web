import { Routes, Route } from "react-router";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./pages/homePage/homePage";
import ContactDrawer from "./components/contactDrawer/ContactDrawer";
import Footer from "./components/footer/Footer";
import ContactPage from "./pages/contactPage/contactPage";

function App() {
  return (
    <>
      <NavBar />
      <ContactDrawer />
      <div className="main-container">
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="about-us" element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
