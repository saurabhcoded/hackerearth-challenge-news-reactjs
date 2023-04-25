import React from "react";
import { useOutletContext } from "react-router-dom";
import SimpleBackdrop from "../../layout/SimpleBackdrop";
import NewsCardGrid from "./newscard/NewsCardGrid";
import { apiJson } from "../../api";
import Carousel from "../components/Carousel";

const MainPage = () => {
  const [grid, setGrid] = React.useState([]);
  const [backdrop, setBackdrop] = useOutletContext();
  const [loader, setLoader] = React.useState(true);

  React.useEffect(() => {
    const FetchData = async () => {
      setBackdrop(true);
      try {
        const response = await apiJson.get("posts?per_page=12&context=embed");
        if (response.status == 200) {
          setGrid(response.data);
          setLoader(false);
          setBackdrop(false);
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    FetchData();
  }, []);
  return (
    <div>
      <SimpleBackdrop backdrop={backdrop} />
      <Carousel grid={grid} />
      <NewsCardGrid
        backdrop={backdrop}
        setBackdrop={setBackdrop}
        loader={loader}
        grid={grid}
      />
    </div>
  );
};

export default MainPage;
