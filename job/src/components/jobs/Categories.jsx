const Categories = ({ role, level, languages, tools }) => {
  return (
    <div className="position-categories-container">
      <p className="categories-bgColor">{role}</p>
      <p className="categories-bgColor">{level}</p>
      {languages.map((language, index) => {
        return (
          <p className="categories-bgColor" key={index}>{language}</p>
        )
      })}
      {tools.map((tool, index) => {
        return (
          <p className="categories-bgColor" key={index}>{tool}</p>
        )
      })}
    </div>
  )
}

export default Categories;