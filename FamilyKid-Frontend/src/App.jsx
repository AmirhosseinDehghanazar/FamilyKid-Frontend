import "./App.css";
import Segments from "./components/Segments";
import Comment from "./components/comment/Comments";
import Footer from "./components/footer/Footer";
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
        <Comment />
        <Footer />
      </div>
    </>
  );
}

export default App;
