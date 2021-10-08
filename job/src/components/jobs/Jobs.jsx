import "./jobs.scss";
import data from "../../data/data.json";
import Position from "./Position";
import Categories from "./Categories";
import { useState } from "react";

const Jobs = () => {
  const [jobs, setJobs] = useState(data);
  const [filteredCategories, setFilteredCategories] = useState([]);
  console.log(jobs);

  const addToFilteredCategories = (category) => {
    setFilteredCategories([...filteredCategories, category]);
  };

  return (
    <div className="container">
      <div className="filtered-categories isVisible">{filteredCategories}</div>
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
                role={role}
                level={level}
                languages={languages}
                tools={tools}
                jobs={jobs}
                addToFilteredCategories={addToFilteredCategories}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
