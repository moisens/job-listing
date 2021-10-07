import "./jobs.scss";
import { data } from "../../data/data";
import Position from "./Position";
import Categories from "./Categories";

const Jobs = () => {
  return (
    <div className="jobs-container">
      {data.map((job) => {
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
              role={role}
              level={level}
              languages={languages}
              tools={tools}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Jobs;
