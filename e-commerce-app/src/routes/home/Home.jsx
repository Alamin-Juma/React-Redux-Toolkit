import React, { Fragment } from "react";

import { Directory } from "../../components/directory/Directory";
export const Home = () => {
  const SHOP_DATA = [
    {
      id: 1,
      name: "Office Desk",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/ecom-rtk.appspot.com/o/office%20desk.jpg?alt=media&token=938daf7d-1fe5-466a-ab71-8fadcc8834a1",
    },
    {
      id: 2,
      name: "Bedroom",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/ecom-rtk.appspot.com/o/bedroom.jpg?alt=media&token=4b98723c-60d3-47a4-9ce5-d9912afc3875",
    },
    {
      id: 3,
      name: "Dining Seats",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/ecom-rtk.appspot.com/o/dining%20seats.jpg?alt=media&token=6bc5f6b8-59d4-4298-a89f-940c87917d8a",
    },
    {
      id: 4,
      name: "Fabric Sofas",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/ecom-rtk.appspot.com/o/fabric%20sofas.jpg?alt=media&token=8a01d0d9-bf4d-49d4-b1f6-2e41c6ba5402",
    },
    {
      id: 5,
      name: "Tv Stand",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/ecom-rtk.appspot.com/o/tv%20stands.jpg?alt=media&token=371f9332-5cf9-4c79-8bdb-21d28201d0ce",
    },
    ,
    {
      id: 6,
      name: "Office Chair",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/ecom-rtk.appspot.com/o/office%20chair.jpg?alt=media&token=c11bbcd8-2ffb-4f1f-9b38-48c8d32cc899",
    },
    ,
    {
      id: 7,
      name: "Recliner Sofas",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/ecom-rtk.appspot.com/o/reclineer%20sofas.jpg?alt=media&token=0adc7603-480f-484e-a7fc-c6c51abddb9d",
    },
    ,
    {
      id: 8,
      name: "Coffe Table",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/ecom-rtk.appspot.com/o/coffe%20tables.jpg?alt=media&token=1fa0e5e1-506e-487f-a7d5-b9e058b54c03",
    },
    {
      id: 9,
      name: "Coffee Tables",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/ecom-rtk.appspot.com/o/coffe%20tables.jpg?alt=media&token=1fa0e5e1-506e-487f-a7d5-b9e058b54c03",
    },
  ];

  return (
    <div>
      <Fragment>
        <Directory categories={SHOP_DATA} />
      </Fragment>
    </div>
  );
};
