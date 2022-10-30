import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <>{message}</>;
};

export { Notification };

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
