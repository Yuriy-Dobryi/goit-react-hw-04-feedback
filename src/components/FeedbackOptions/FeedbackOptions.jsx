import PropTypes from "prop-types";
import css from './FeedbackOptions.module.css';

export const FeedbackOptions =
  ({ options, setFeedback }) => (

    <div className={css.buttons}>
      {options.map((btnName, index) => (
        <button
          key={index}
          className={css.btn}
          onClick={setFeedback}
          name={btnName}
        >{btnName}</button>
      ))}
    </div>
  );

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  setFeedback: PropTypes.func.isRequired,
};