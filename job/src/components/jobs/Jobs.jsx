import './jobs.scss';

const Jobs = () => {
  return (
    <div className='jobs-container'>
      <div className='job-list-container'>
        <div className='position-container'>
          <div className='logo-company'>logo</div>
          <div className='position-content'>
            <div className="company">
              <p className='company-name'>Photosnap</p>
              <p className='company-new'>NEW!</p>
              <p className='company-featured'>FEATURED</p>
            </div>
            <p className='position-title'>Senior Front-End Developer</p>
            <div className='position-infos'>
              <p>1day ago</p>
              <p>.</p>
              <p>Full Time</p>
              <p>.</p>
              <p>USA only</p>
            </div>
          </div>
        </div>
        <div className='position-categories-container'>
          <p className='categories-bgColor active-category'>Frontend</p>
          <p className='categories-bgColor'>Senior</p>
          <p className='categories-bgColor'>HTML</p>
          <p className='categories-bgColor'>CSS</p>
          <p className='categories-bgColor'>JAVASCRIPT</p>
        </div>
      </div>
    </div>
  )
}

export default Jobs
