import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
  <div><div class="card mt-3" style={{"width" : "18rem","maxHeight" : "360px"}}>
  <img class="card-img-top" src="..." alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is an important text.</p>
  </div>
</div></div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
