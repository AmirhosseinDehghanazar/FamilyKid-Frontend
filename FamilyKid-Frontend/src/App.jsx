import "./App.css";
import Segments from "./components/Segments";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Policy from "./components/policy/Policy";

function App() {
  return (
    <>
      <div className=" md:mx-10 xl:mx-32">
        <Navbar />
        <Header />
        <Segments />
        <Policy />
        <Gallery />
      </div>
    </>
  );
}

export default App;
