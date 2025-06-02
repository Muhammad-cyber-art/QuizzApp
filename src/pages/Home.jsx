import React from "react";
import Navbar from "../components/Navbar.jsx";
import MenuLinks from "../components/MenuLinks.jsx";

function Home() {
  return (
    <section className="w-196 h-116 bg-indigo-900 flex justify-between items-center">
      <div className="w-96 h-100 flex  items-center flex-col">
        <div className="w-76 h-66 mt-14 ml-9 text-white enter">
          <h1 className="text-4xl">Welcom to the</h1>
          <h1 className="text-4xl font-bold">Frontend Quiz!</h1>
          <i className="   text-white translate-y-16">you may work a tests in here</i>
        </div>
      </div>
      <div className="w-96 h-100  flex justify-between items-center flex-col">
        <MenuLinks/>
      </div>
    </section>
  );
}

export default Home;
