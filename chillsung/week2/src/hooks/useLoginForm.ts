import { useReducer } from "react";
import {
  initialState,
  loginReducer,
  validate,
} from "../utils/auth/loginReducer";
import type { MockLoginCredentials } from "../utils/auth/mockLogin";

type LoginFn = (params: MockLoginCredentials) => Promise<void>;

export const useLoginForm = (loginFn?: LoginFn) => {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const changeEmail = (email: string) => {
    dispatch({ type: "CHANGE_EMAIL", payload: email });
  };

  const changePassword = (password: string) => {
    dispatch({ type: "CHANGE_PASSWORD", payload: password });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const submit = async () => {
    const { errors, isValid } = validate(state.email, state.password);

    if (!isValid) {
      dispatch({ type: "SET_ERRORS", payload: errors });
      return;
    }

    dispatch({ type: "SUBMIT" });

    try {
      if (loginFn) {
        await loginFn({
          email: state.email,
          password: state.password,
        });
      }

      dispatch({ type: "SUCCESS" });
    } catch (error : any) {
      const message = error.message;
      dispatch({ type: "FAIL", payload: message });
    }
  };

  return {
    state,
    dispatch,
    changeEmail,
    changePassword,
    submit,
    reset,
  };
};