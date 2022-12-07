import React, { Fragment } from "react";

import { Directory } from "../../components/directory/Directory";
import { useFetchProductsQuery } from "../../features/products/productsService";

export const Home = () => {
  const { data, isLoading } = useFetchProductsQuery();

  return (
    <div>
      <Fragment>
        <Directory categories={data} />
      </Fragment>
    </div>
  );
};
