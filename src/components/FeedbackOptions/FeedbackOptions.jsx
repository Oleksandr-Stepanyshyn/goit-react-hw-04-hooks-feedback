import PropTypes from "prop-types";
import { ButtonList, Button } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
  const feedbacks = Object.keys(options)
  return(
    <ButtonList>
      {feedbacks.map((feedback) => (
        <li key={feedback}><Button type="button" onClick={() => onLeaveFeedback(feedback)}>{feedback}</Button></li>
      ))}
    </ButtonList>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}