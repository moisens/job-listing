import "./jobs.scss";
import data from "../../data/data.json";
import Position from "./Position";
import Categories from "./Categories";
import { useState } from "react";


const Jobs = () => {
  const [jobs, setJobs] = useState(data);
  const [filteredCategories, setFilteredCategories] = useState([]);
  

  const addToFilteredCategories = (category) => {
    setFilteredCategories([...filteredCategories, category]);
    
  };

  const deleteCategory = (e) => {
    const newFileteredCategory = [...filteredCategories];
    let content = e.target.parentElement.parentElement.textContent;
    let index = newFileteredCategory.findIndex(element => element === content);
    newFileteredCategory.splice(index, 1);
    setFilteredCategories(newFileteredCategory);
  }

  const clearFilteredCategories = () => {
    setFilteredCategories([]);
  }





  return (
    <div className="container">
      <div className={filteredCategories.length === 0 ? "filtered-categories" : "filtered-categories isVisible"}>
        {filteredCategories}
        <div className='clear-btn' onClick={clearFilteredCategories}>
          Clear
        </div>
      </div>
      <div className="jobs-container">
        {jobs.map(job => {
          const {
            id,
            index,
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
                jobs={jobs}
                addToFilteredCategories={addToFilteredCategories}
                deleteCategory={deleteCategory}
                
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
