import { connect } from 'react-redux';

import Message from 'src/components/Message';

const mapStateToProps = (state, ownProps) => ({
  isMine: state.nickname === ownProps.author,
});

export default connect(mapStateToProps)(Message);
