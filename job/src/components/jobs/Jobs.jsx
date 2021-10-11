import "./jobs.scss";
import data from "../../data/data.json";
import Position from "./Position";
import Categories from "./Categories";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Jobs = () => {
  const [jobs, setJobs] = useState(data);
  const [filteredCategories, setFilteredCategories] = useState([]);

  const filterAndAdd = (category) => {
    filterJobs(category);
    addToFilteredCategories(category);

  }

  const filterJobs = (category) => {
    const newJobs = jobs.filter((job) => {
      const newlang = job.languages.map(lang => {
        if (lang === category) {
          return job;
        }
      });
      //console.log(newlang);

      if (job.role === category || job.level === category) {
        return job;
      } else if (newlang === category) {
        return newlang;
      }
      
      
      
    });
    setJobs(newJobs);
    setFilteredCategories(newJobs)
    //console.log("newJobs: ", newJobs);
  };

  const getrandomId = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const addToFilteredCategories = (category, id) => {
    const newCategory = (
      <div key={getrandomId(1, 1000)}>
        <button type="button" className="categories-bgColor">
          {category}
          <FaTimes className="detele-category" onClick={deleteCategory} />
        </button>
      </div>
    );


    setFilteredCategories([...filteredCategories, newCategory]);
    console.log(filteredCategories);
  };

  const clearFilteredCategories = () => {
    setFilteredCategories([]);
    setJobs(data)
  };

  const deleteCategory = (e) => {
    setFilteredCategories(filterJobs())
    const newFileteredCategory = [...filteredCategories];
    // let content = e.target.parentElement.parentElement.textContent;
    // let index = newFileteredCategory.findIndex(ele => ele === content);
    // newFileteredCategory.slice(index, 1)
    // console.log(index, content);
    // console.log('newFileteredCategory: ', newFileteredCategory);

    
   
    setFilteredCategories([...newFileteredCategory]);
    if (filteredCategories.length <= 0) {
      setJobs(data);
    }
  };

  return (
    <div className="container">
      <div
        className={
          filteredCategories.length === 0
            ? "filtered-categories"
            : "filtered-categories isVisible"
        }
      >
        {filteredCategories}
        <div className="clear-btn" onClick={clearFilteredCategories}>
          Clear
        </div>
      </div>
      <div className="jobs-container">
        {jobs.map((job, index) => {
          const {
            id,
            company,
            logo,
            news,
            featured,
            position,
            role,
            level,
            postedAt,
            contract,
            location,
            languages,
            tools,
          } = job;
          return (
            <div className="job-list-container" key={id}>
              <Position
                company={company}
                logo={logo}
                news={news}
                featured={featured}
                position={position}
                postedAt={postedAt}
                contract={contract}
                location={location}
              />
              <Categories
                id={id}
                index={index}
                role={role}
                level={level}
                languages={languages}
                tools={tools}
                deleteCategory={deleteCategory}
                filterAndAdd={filterAndAdd}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
