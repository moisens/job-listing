import './jobs.scss';
import { data } from '../../data/data';
import Position from './Position';


const Jobs = () => {
  


  return (
    <div className='jobs-container'>
      {data.map(job => {
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
          tools 
        } = job;
        return (
          <div className='job-list-container' key={id}>
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
            <div className='position-categories-container'>
              <p className='categories-bgColor active-category'>Frontend</p>
              <p className='categories-bgColor'>Senior</p>
              <p className='categories-bgColor'>HTML</p>
              <p className='categories-bgColor'>CSS</p>
              <p className='categories-bgColor'>JAVASCRIPT</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Jobs
