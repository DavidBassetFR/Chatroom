import React from 'react';
import PropTypes from 'prop-types';

import './message.scss';

const Message = ({
  author,
  content,
  isMine,
}) => (
  <div className={isMine ? 'message message--mine' : 'message'}>
    <div className="message__author">{author}</div>
    <p className="message__content">
      {content}
    </p>
  </div>
);

Message.propTypes = {
  isMine: PropTypes.bool.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Message;
