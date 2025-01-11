import "./App.css";
import About from "./sections/About";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Home from "./sections/Home";

function App() {
  return (
    <>
      <div className="app-background">
        <Header />
        <Home />
        <About />
        <Features />
        <Footer />
      </div>
    </>
  );
}

export default App;
