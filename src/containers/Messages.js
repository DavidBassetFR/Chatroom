import { connect } from 'react-redux';

import Messages from 'src/components/Messages';

const mapStateToProps = (state) => ({
  messages: state.messages,
});

export default connect(mapStateToProps)(Messages);
