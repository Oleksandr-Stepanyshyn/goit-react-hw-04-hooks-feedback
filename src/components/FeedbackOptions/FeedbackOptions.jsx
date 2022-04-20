import PropTypes from "prop-types";
import { ButtonList, Button } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return(
    <ButtonList>
      {options.map((feedback) => (
        <li key={feedback}><Button type="button" onClick={() => onLeaveFeedback(feedback)}>{feedback}</Button></li>
      ))}
    </ButtonList>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}