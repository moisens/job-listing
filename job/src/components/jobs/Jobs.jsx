import "./jobs.scss";
import data from "../../data/data.json";
import Position from "./Position";
import Categories from "./Categories";
import { useState, useEfect } from "react";
import { FaTimes } from "react-icons/fa";

const Jobs = () => {
  const [jobs, setJobs] = useState(data);
  const [filteredTags, setFilteredTags] = useState([]);
  const [filtredJobs, setFiltredJobs] = useState([]);
  
  const filterAndAdd = (tag) => {
    addToFilteredCategory(tag);
    filterJobs(tag);

  }

  const getrandomId = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const addToFilteredCategory = (tag) => {
    const newtag = <button 
      type="button" 
      className="categories-bgColor" 
      key={getrandomId(1,1000)}
    > {tag}<FaTimes />
    </button>
    
    setFilteredTags([...filteredTags, newtag]);

  }


  const filterJobs = (tag) => {
    const newFiltredJobs = jobs.filter(job => {
      if (job.role === tag || job.level === tag) return job;
    })
    setJobs(newFiltredJobs);
  }

  const clearJobs = () => {
    setFilteredTags([]);
  }

  


  return (
    <div className="container">
      <div
        className={
          filteredTags.length === 0
            ? "filtered-categories"
            : "filtered-categories isVisible"
        }
      >
        {filteredTags}
        <div className="clear-btn"
          onClick={clearJobs}
        >
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

          //Tags represent the role, level languages=[] and tools=[]
          //They are passed to Categories where I iterate through...
          const tags = [role, level];
          if (languages) {
            tags.push(...languages);
          }
          if (tools) {
            tags.push(...tools);
          }

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
                tags={tags}
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



// const filterJobs = (category) => {

//   const newJobs = jobs.filter(job => {
//     if (job.role === category || job.level === category) {
//       return Object.entries(job);

//     }
//   })
//   console.log(newJobs);

//   setJobs(newJobs);
//   //setFilteredCategories(newJobs)
// };





//   setFilteredCategories([...filteredCategories, newCategory]);
//   //console.log(filteredCategories);
// };

// const clearFilteredCategories = () => {
//   setFilteredCategories([]);
//   setJobs(data)
// };