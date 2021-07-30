/* eslint-disable import/prefer-default-export */
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SET_SETTINGS_FIELD_VALUE = 'SET_SETTINGS_FIELD_VALUE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const createAddMessageAction = () => ({ type: ADD_MESSAGE });

export const createSetInputValueAction = (newValue) => ({
  type: SET_INPUT_VALUE,
  value: newValue,
});

export const createSubmitLoginAction = () => ({ type: SUBMIT_LOGIN });

export const createToggleSettingsAction = () => ({ type: TOGGLE_SETTINGS });

export const createSetSettingsFieldValueAction = (newValue, fieldKey) => ({
  type: SET_SETTINGS_FIELD_VALUE,
  newValue,
  fieldKey,
});

export const createLoginSuccessAction = (nickname) => ({ type: LOGIN_SUCCESS, nickname });

export const createLoginErrorAction = () => ({ type: LOGIN_ERROR });
