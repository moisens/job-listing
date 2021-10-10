import { useState } from "react";
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
  filterJobs

}) => {

  return (
    <div className="position-categories-container">
      {/*Role btn*/}
      <button
        type="button"
        className="categories-bgColor"
        onClick={() => {addToFilteredCategories(role)}}
      >
        {role}
      </button>
      {/*End Role btn*/}
      {/*Level btn*/}
      <button
        type="button"
        className="categories-bgColor"
        onClick={() => {addToFilteredCategories(level)}}
      >
        {level}
      </button>
      {/*End level btn*/}
      {/*languages btn*/}
      {languages.map((lang, index) => {
        return (
          <div key={index}>
            <button 
              type="button" 
              className='categories-bgColor' 
              onClick={() => {addToFilteredCategories(lang)}}
            >{lang}</button>
          </div>
        )
      })}
      {/*End languages btn*/}
      {/*tools btn*/}
      {tools.map((tool, index) => {
        return (
          <div key={index}>
            <button 
              type="button" 
              className='categories-bgColor' 
              onClick={() => {addToFilteredCategories(tool)}}
            >{tool}</button>
          </div>
        )
      })}
      {/*End languages btn*/}
    </div>
  );
};

export default Categories;