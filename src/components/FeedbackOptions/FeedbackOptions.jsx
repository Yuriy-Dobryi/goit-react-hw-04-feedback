import PropTypes from "prop-types";
import css from './FeedbackOptions.module.css';

export const FeedbackOptions =
  ({ options, onLeaveFeedback }) => (

    <div className={css.buttons}>
      {options.map((btnName, index) => (
        <button
          key={index}
          className={css.btn}
          onClick={onLeaveFeedback}
        >{btnName}
        </button>
      ))}
    </div>
  );

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};