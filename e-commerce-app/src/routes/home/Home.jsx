import React, {Fragment} from "react";

import { Directory } from "../../components/directory/Directory";

export const Home = () => {
  const SHOP_DATA = [
    {
      id: 1,
      name: "Office Desk",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
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
      id: 6,
      name: "Office Chair",
      imageUrl: "https://ibb.co/hdgywkw",
    },
    ,
    {
      id: 7,
      name: "Recliner Sofas",
      imageUrl: "https://ibb.co/jyKz314",
    },
    ,
    {
      id: 8,
      name: "Coffe Table",
      imageUrl: "https://ibb.co/ZdJspfG",
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
