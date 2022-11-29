import React from "react";

import { Directory } from "../../components/directory/Directory";

export const Home = () => {
  const SHOP_DATA = [
    {
      id: 1,
      name: "Office Desk",
      imageUrl: "https://ibb.co/kS0d1Jb",
    },
    {
      id: 2,
      name: "Bedroom",
      imageUrl: "https://ibb.co/X76K2Vq",
    },
    {
      id: 3,
      name: "Dining Seats",
      imageUrl: "https://ibb.co/fXf3168",
    },
    {
      id: 4,
      name: "Fabric Sofas",
      imageUrl: "https://ibb.co/PcYcY91",
    },
    {
      id: 5,
      name: "Tv Stand",
      imageUrl: "https://ibb.co/PmRtHqT",
    },
    ,
    {
      id: 5,
      name: "Office Chair",
      imageUrl: "https://ibb.co/hdgywkw",
    },
    ,
    {
      id: 5,
      name: "Recliner Sofas",
      imageUrl: "https://ibb.co/jyKz314",
    },
    ,
    {
      id: 5,
      name: "Coffe Table",
      imageUrl: "https://ibb.co/ZdJspfG",
    },
  ];

  return (
    <div>
      <Directory categories={SHOP_DATA} />
    </div>
  );
};
