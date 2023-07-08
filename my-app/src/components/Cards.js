import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";
export default function Cards(props) {
  let options = props.options;
  let dispatch = useDispatchCart();
  const priceRef = useRef();
  let priceoptions = Object.keys(options);
  const [qty, setqty] = useState(1);
  const [size, setsize] = useState("");
  let data = useCart();
  const handleaddtocart = async () => {
    await dispatch({
      type: "Add",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: FinalPrice,
      qty: qty,
      size: size,
    });
    console.log(data);
  };
  let FinalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setsize(priceRef.current.value);
  }, []);
  return (
    <div>
      <div>
        <div class="card mt-3">
          <img
            class="card-img-top"
            src={props.foodItem.img}
            alt="..."
            style={{ height: "200px", objectFit: "fill" }}
          />
          <div class="card-body">
            <h5 class="card-title">{props.foodItem.name}</h5>
            <div className="container w-100">
              <select
                className="m-2 h-50 bg-success rounded"
                onChange={(e) => setqty(e.target.value)}
              >
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select
                className="m-2 h-50 bg-success rounded"
                ref={priceRef}
                onChange={(e) => setsize(e.target.value)}
              >
                {priceoptions.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
              <div className="d-inline h-100 fs-5">${FinalPrice}</div>
            </div>
            <hr></hr>
            <button
              className="btn bg-success justify-center ms-2"
              onClick={handleaddtocart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
