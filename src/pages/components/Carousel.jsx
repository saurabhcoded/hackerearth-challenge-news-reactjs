import { Button } from "@mui/material";
import React from "react";

const Carousel = ({ grid }) => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-inner">
          {grid?.map((item, index) => {
            if (index < 4) {
              console.log({
                "Error Check": { item: item?.jetpack_featured_media_url },
              });
              let htmlData = item?.title?.rendered;
              let htmlDesc = item?.excerpt?.rendered;
              return (
                <div
                  data-bs-interval="3000"
                  className={`carousel-item  ${index == 0 ? "active" : ""}`}
                  key={item}
                >
                  <div
                    className="py-5"
                    style={{
                      background: `url(${item?.jetpack_featured_media_url}) no-repeat center`,
                      backgroundSize: "cover",
                      height: "80vh",
                      boxShadow: "inset 0 0 0 2000px rgb(0,0,0,0.7)",
                    }}
                  >
                    <div className="container">
                      <div className="col-md-8 col-lg-6">
                        <h1
                          className="text-white fw-bold"
                          dangerouslySetInnerHTML={{ __html: htmlData }}
                        ></h1>
                        <h6
                          className="text-light mt-4"
                          dangerouslySetInnerHTML={{ __html: htmlDesc }}
                        ></h6>
                        <Button
                          size="large"
                          color="warning"
                          className="rounded-3 bg-light"
                        >
                          Read More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
