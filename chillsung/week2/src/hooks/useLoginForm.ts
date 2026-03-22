import { useReducer } from "react";
import {
  initialState,
  loginReducer,
  validate,
  type LoginState,
} from "../utils/auth/loginReducer";

type LoginParams = {
  email: string;
  password: string;
};

type LoginFn = (params: LoginParams) => Promise<void>;

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
    } catch (error) {
      dispatch({
        type: "FAIL",
        payload: "이메일 또는 비밀번호가 올바르지 않습니다.",
      });
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