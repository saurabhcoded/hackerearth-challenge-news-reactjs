import React, { useEffect } from "react";
import Carousel from "../../components/Carousel";
import GridCard from "../../components/GridCard";
import LoadingCard from "../../components/LoadingCard";

const NewsCardGrid = ({
  backdrop,
  setBackdrop,
  loader,
  setLoader,
  grid,
  setGrid,
}) => {
  const [dummygrid, setDummyGrid] = React.useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  return (
    <div className="container py-5">
      <div className="row g-2 g-md-3 g-lg-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
        {!loader &&
          grid?.map((news) => {
            return (
              <div className="col">
                {" "}
                <GridCard news={news} />{" "}
              </div>
            );
          })}
      </div>
      {loader && (
        <div className="row g-2 g-md-3 g-lg-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
          {dummygrid?.map((none) => {
            return (
              <div className="col">
                {" "}
                <LoadingCard />{" "}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NewsCardGrid;
