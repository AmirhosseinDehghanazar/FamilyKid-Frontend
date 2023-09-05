import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div className=" md:mx-10 xl:mx-32">
        <Navbar />
        <Header />
      </div>
    </>
  );
}

export default App;
