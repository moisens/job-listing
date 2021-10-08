const Categories = ({
  id,
  role,
  level,
  languages,
  tools,
  jobs,
  addToFilteredCategories,
}) => {
  return (
    <div className="position-categories-container">
      <button
        className="categories-bgColor"
        onClick={() => {
          addToFilteredCategories(
            <button className="categories-bgColor" key={id}>
              {role}
              <span className="delete">x</span>
            </button>
          );
        }}
      >
        {role}
      </button>
      <button
        className="categories-bgColor"
        onClick={() => {
          addToFilteredCategories(
            <button className="categories-bgColor" key={id}>
              {level}
              <span className="delete">x</span>
            </button>
          );
        }}
      >
        {level}
      </button>
      {languages.map((language, index) => {
        return (
          <button
            className="categories-bgColor"
            key={index}
            onClick={() => {
              addToFilteredCategories(
                <button className="categories-bgColor" key={id}>
                  {language}
                  <span className="delete">x</span>
                </button>
              );
            }}
          >
            {language}
          </button>
        );
      })}
      {tools.map((tool, index) => {
        return (
          <button
            className="categories-bgColor"
            key={index}
            onClick={() => {
              addToFilteredCategories(
                <button className="categories-bgColor" key={id}>
                  {tool}
                  <span className="delete">x</span>
                </button>
              );
            }}
          >
            {tool}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
