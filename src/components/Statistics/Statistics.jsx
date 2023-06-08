import PropTypes from "prop-types";

export const Statistics = (statistics) => (
    <div>
    {Object.keys(statistics).map((name, index) => (
      <p key={index}>{name}: {statistics[name]}</p>
      ))}
    </div>
)
  
Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};