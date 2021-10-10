import "./jobs.scss";
import data from "../../data/data.json";
import Position from "./Position";
import Categories from "./Categories";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Jobs = () => {
  const [jobs, setJobs] = useState(data);
  const [filteredCategories, setFilteredCategories] = useState([]);

  const filterJobs = (category) => {
    const newJobs = jobs.filter((job) => {
      if (job.role === category || job.level === category) {
        return job;
      }
    });
    setJobs(newJobs);
    //console.log("newJobs: ", newJobs);
  };

  const getrandomId = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const addToFilteredCategories = (category, id) => {
    const newCategory = (
      <div key={getrandomId(1, 100)}>
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
  };

  const deleteCategory = (e) => {
    const newFileteredCategory = [...filteredCategories];
    console.log(newFileteredCategory);
    //let content = e.target.parentElement.parentElement.textContent;
    //let index = newFileteredCategory.findIndex(
    //  (element) => element === content
    //);
    //console.log("index: ", index);
    //newFileteredCategory.slice(index, 1);
    //console.log("newFileteredCategory: ", newFileteredCategory);

    newFileteredCategory.filter((category) => {});

    setFilteredCategories(newFileteredCategory);
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
                addToFilteredCategories={addToFilteredCategories}
                deleteCategory={deleteCategory}
                filterJobs={filterJobs}
                jobs={jobs}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
