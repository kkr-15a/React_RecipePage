let Ingredients = () => {
  return (
    <div className="Ingredients">
      <h2>
        <strong>Ingredients</strong>
      </h2>
      <ul>
        <li>2-3 large eggs</li>
        <li>Salt, to taste</li>
        <li>Pepper, to taste</li>
        <li>1 tablespoon of butter and oil</li>
        <li>
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </li>
        <br />
        <hr />
        <br />
      </ul>
    </div>
  );
};

let Instructions = () => {
  return (
    <div className="Instructions">
      <h2>
        <strong>Instructions</strong>
      </h2>
      <ol>
        <li>
          <strong>Beat the eggs:</strong> In a Bowl, beat the eggs with a pinch
          of salt and pepper until they are well mixed. You can add a tablespoon
          of water or milk for a fluffier texture.
        </li>
        <li>
          <strong>Heat the pan:</strong> Place a non-stick frying pan over
          medium heat and add butter or oil.
        </li>
        <li>
          <strong>Cook the omelette:</strong> Once the butter is melted and
          bubbling, pour in the eggs. Tilt the pan tp ensure the eggs evenly
          coat the surface.
        </li>
        <li>
          <strong>Add fillings (optional):</strong> When the eggs begin tomset
          at the edges but are still slightly runny in the middle, sprinkle your
          choosen fillings over one half of the omelette.
        </li>
        <li>
          <strong>Fold and serve:</strong> As the onelette continues to cook,
          carefully lift one edge and fold it over the fillings. Let it cook for
          another minute, thyen slide it onto a plate.
        </li>
        <li>
          <strong>Enjoy:</strong> Serve hot, with additional salt and pepper if
          needed.
        </li>
      </ol>
    </div>
  );
};
export default Ingredients;
export { Instructions };
