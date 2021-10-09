import { FaTimes } from "react-icons/fa";

const Categories = ({
  id,
  index,
  role,
  level,
  languages,
  tools,
  jobs,
  addToFilteredCategories,
  deleteCategory,
}) => {
  return (
    <div className="position-categories-container">
      {/*Role btn*/}
      <button
        type="button"
        className="categories-bgColor"
        onClick={() => {
          addToFilteredCategories(
            <button type="button" className="categories-bgColor" key={id}>
              {role}
              <FaTimes className="detele-category" onClick={deleteCategory} />
            </button>
          );
        }}
      >
        {role}
      </button>
      {/*End Role btn*/}

      {/*Languages btn*/}
      {languages.map((lang, index) => {
        return (
          <button
            type="button"
            className="categories-bgColor"
            key={index}
            onClick={() => {
              addToFilteredCategories(
                <button
                  type="button"
                  className="categories-bgColor"
                  key={index}
                >
                  {lang}
                  <FaTimes
                    className="detele-category"
                    onClick={deleteCategory}
                  />
                </button>
              );
            }}
          >
            {lang}
          </button>
        );
      })}
      {/*End Languages btn*/}
      {/*Tools btn*/}
      {tools.map((tool, index) => {
        return (
          <button
            type="button"
            className="categories-bgColor"
            key={index}
            onClick={() => {
              addToFilteredCategories(
                <button
                  type="button"
                  className="categories-bgColor"
                  key={index}
                >
                  {tool}
                  <FaTimes
                    className="detele-category"
                    onClick={deleteCategory}
                  />
                </button>
              );
            }}
          >
            {tool}
          </button>
        );
      })}
      {/*End Tools btn*/}
    </div>
  );
};

export default Categories;