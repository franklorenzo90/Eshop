import React from "react";

// My Components
import jewellery from "../public/jewellery.jpg";
import menClocthing from "../public/men clothing.jpeg";
import electronics from "../public/electronics.jpg";
import womenClothing from "../public/women-clothing.jpg";
import Card from "./Card";

function Dashboard() {
  return (
    <>
      <h1 className="text-center mt-5 text">Choose a category</h1>
      <div className="row  mt-4">
        <div className="col mx-5 zoom">
          <Card
            srcImage={jewellery}
            category="Jewelery"
            description="In this section you can find products related to Jewelery"
          />
        </div>
        <div className="col m-auto zoom">
          <Card
            srcImage={menClocthing}
            category="Men's clothing"
            description="In this section you can find products related to Men's clothing"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col mx-5 zoom">
          <Card
            srcImage={electronics}
            category="Electronics"
            description="In this section you can find products related to Electronics"
          />
        </div>
        <div className="col mx-auto zoom">
          <Card
            srcImage={womenClothing}
            category="Women's clothing"
            description="In this section you can find products related to Women's clothing"
          />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
