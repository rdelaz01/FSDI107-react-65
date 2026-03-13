import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
function App() {
  return (
    <>
      <div>
      <Navbar />
      <Catalog />
      </div>
      <Footer />
    </>
  )
}

export default App
