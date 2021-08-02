import { connect } from 'react-redux';

import Settings from 'src/components/Settings';

import { isUserLogged } from 'src/store/selectors';

import {
  createSubmitLoginAction,
  createToggleSettingsAction,
  createSetSettingsFieldValueAction,
} from 'src/store/actions';

const mapStateToProps = (state) => ({
  emailValue: state.settings.email,
  passwordValue: state.settings.password,
  isSettingsOpen: state.settings.isOpen,
  isLogged: isUserLogged(state),
  isError: state.settings.isError,
});

const mapDispatchToProps = (dispatch) => ({
  onEmailChange: (event) => {
    dispatch(createSetSettingsFieldValueAction(event.target.value, 'email'));
  },
  onPasswordChange: (event) => {
    dispatch(createSetSettingsFieldValueAction(event.target.value, 'password'));
  },
  onSettingsSubmit: (event) => {
    event.preventDefault();
    dispatch(createSubmitLoginAction());
  },
  onToggleSettings: () => {
    dispatch(createToggleSettingsAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
