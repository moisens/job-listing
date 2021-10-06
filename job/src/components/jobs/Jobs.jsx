import './jobs.scss';

const Jobs = () => {
  return (
    <div className='jobs-container'>
      <div className='job-list-container'>
        <div className='position-container'>
          <div className='logo-company'>logo</div>
          <div className='position-content'>
            <div className="company">
              <p>Photosnap</p>
              <p>NEW!</p>
              <p>FEATURED</p>
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
          <p>Frontend</p>
          <p>Senior</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>JAVASCRIPT</p>
        </div>
      </div>
    </div>
  )
}

export default Jobs
