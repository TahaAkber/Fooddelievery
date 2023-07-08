import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Carousal from "../components/Carousal";

export default function Home() {
  const [foodcat, setfoodcat] = useState([]);
  const [fooditem, setfooditem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    // console.log(response[0], response[1]);
    setfooditem(response[0]);
    setfoodcat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousal />
      </div>
      <div className="container">
        {foodcat !== [] ? (
          foodcat.map((data) => {
            return (
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr />
                {fooditem !== [] ? (
                  fooditem
                    .filter((item) => item.CategoryName === data.CategoryName)
                    .map((filteritems) => {
                      return (
                        <div
                          key={filteritems._id}
                          className="col-12 col-md-6 col-lg-3"
                        >
                          <Cards
                            foodName={filteritems.name}
                            options={filteritems.options[0]}
                            imgSrc={filteritems.img}
                          />
                        </div>
                      );
                    })
                ) : (
                  <div>"no such data found"</div>
                )}
              </div>
            );
          })
        ) : (
          <div>""""""""""""</div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
