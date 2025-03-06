let Nutrition = () => {
  return (
    <div className="Nutrition">
      <h2>
        <strong>Nutrition</strong>
      </h2>
      <p>
        The table shows nutritional values per serving without the additional
        fillings.
      </p>
      <div className="nutrition-table">
        <div className="row">
          <span>Calories</span> <span class="value">277 kcal</span>
        </div>
        <div className="row">
          <span>Carbs</span> <span class="value">0g</span>
        </div>
        <div className="row">
          <span>Protein</span> <span class="value">20g</span>
        </div>
        <div className="row">
          <span>Fat</span> <span class="value">22g</span>
        </div>
      </div>
    </div>
  );
};
export default Nutrition;
