import React from "react";
import Policy from "../components/policy/Policy";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Segments from "../components/Segments";
import Gallery from "../components/gallery/Gallery";
import Comment from "../components/comment/Comments";
import Footer from "../components/footer/Footer";

const Main = () => {
  return (
    <div className=" md:mx-10 xl:mx-32">
      <Navbar />
      <Header />
      <Segments />
      <Policy />
      <Gallery />
      <Comment />
      <Footer />
    </div>
  );
};

export default Main;
