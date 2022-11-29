
export const AddProductsForm = () => {

  return (
    <div className="create">
    <h2 className="page-title">Add a New Recipe</h2>
    <form onSubmit="">

      <label>
        <span>Recipe title:</span>
        <input
          type="text"
          onChange=""
          value=""
          required
        />
      </label>

      <label>
        <span>Recipe Ingredients:</span>
        <div className="ingredients">
          <input
            type="text"
            onChange=""
            value=""
            ref=""
          />
          <button onClick="" className="btn">add</button>
        </div>
      </label>

      <label>
        <span>Recipe Method:</span>
        <textarea
          onChange=""
          value=""
          required
        />
      </label>

      <label>
        <span>Cooking time (minutes):</span>
        <input
          type="number"
          onChange=""
          value=""
          required
        />
      </label>

      <button className="btn">submit</button>
    </form>
  </div> 
  )
}
