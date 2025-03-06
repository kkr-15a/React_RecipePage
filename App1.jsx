import Preparation from "./Preparation";
import MainImg from "./ImgMain";
import Ingredients from "./Ingredients";
import { Instructions } from "./Ingredients";
import Nutrition from "./Nutrition";

let RecipePage = () => {
  return (
    <div className="main">
      <MainImg />
      <Preparation />
      <Ingredients />
      <Instructions />
      <br />
      <hr />
      <br />
      <Nutrition />
    </div>
  );
};

export default RecipePage;
