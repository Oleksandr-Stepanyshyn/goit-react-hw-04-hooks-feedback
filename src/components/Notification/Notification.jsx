import PropTypes from "prop-types";
import { MessageText } from './Notification.styled.js';

export const Notification = ({message}) => {
  return(
    <MessageText>{message}</MessageText>
  )
}

Notification.propTypes = {
  message: PropTypes.string.isRequired
}