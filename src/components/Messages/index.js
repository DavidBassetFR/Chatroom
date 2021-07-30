import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Message from 'src/components/Message';

import './messages.scss';

const Messages = ({ messages }) => {
  const messagesRef = useRef(null);

  // effet appelé lorsque le tableau de messages a changé
  useEffect(() => {
    // on scroll de toute la hauteur de scroll disponible
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages]);

  return (
    <div
      // association de la ref
      ref={messagesRef}
      className="messages"
    >
      {messages.map((m) => (
        <Message
          key={m.id}
          author={m.author}
          content={m.content}
        />
      ))}
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Messages;
