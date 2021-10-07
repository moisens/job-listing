const Position = ({
  company,
  logo,
  news,
  featured,
  position,
  postedAt,
  contract,
  location,
}) => {
  return (
    <div className="position-container">
      <div className="logo-company">
        <img src={logo} alt={company} title={company}  />
      </div>
      <div className="position-content">
        <div className="company">
          <p className="company-name">{company}</p>
          <p className="company-new">{news ? "NEW!" : null}</p>
          <p className="company-featured">{featured ? "FEATURED" : null}</p>
        </div>
        <p className="position-title">{position}</p>
        <div className="position-infos">
          <p>{postedAt}</p>
          <p>.</p>
          <p>{contract}</p>
          <p>.</p>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Position;
