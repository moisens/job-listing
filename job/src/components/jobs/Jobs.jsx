import "./jobs.scss";
import data from "../../data/data.json";
import Position from "./Position";
import Categories from "./Categories";
import { useState, useEfect } from "react";
import { FaTimes } from "react-icons/fa";

const Jobs = () => {
  const [jobs, setJobs] = useState(data);
  const [filteredCategories, setFilteredCategories] = useState([]);
  
  
  const filterAndAdd = (tag) => {
    addToFilteredCategory(tag)

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
    if (filteredCategories.includes(newtag)) return;
    setFilteredCategories([...filteredCategories, newtag]);
    

  }

  

  


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
        <div className="clear-btn">
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





// const addToFilteredCategories = (category, id) => {
//   const newCategory = (
//     <div key={getrandomId(1, 1000)}>
//       <button type="button" className="categories-bgColor">
//         {category}
//         {/* <FaTimes className="detele-category" onClick={deleteCategory} /> */}
//       </button>
//     </div>
//   );


//   setFilteredCategories([...filteredCategories, newCategory]);
//   //console.log(filteredCategories);
// };

// const clearFilteredCategories = () => {
//   setFilteredCategories([]);
//   setJobs(data)
// };