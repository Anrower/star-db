import React, { useState } from "react";
import Row from "../row";
import { StarshipDetails, StarshipList } from '../sw-components';
import { Outlet } from "react-router-dom";

const StarshipPage = () => {

  const [item, setItem] = useState({
    selectedItem: null
  });

  const onItemSelected = (selectedItem) => {
    setItem({ selectedItem })
  };

  const { selectedItem } = item
  return (
    <>
      <Row
        left={<StarshipList onItemSelected={onItemSelected} />}
        right={<StarshipDetails itemId={selectedItem} />}
      />
      <Outlet />
    </>
  );

};

export default StarshipPage;