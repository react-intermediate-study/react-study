import { useReducer, type ChangeEvent, type FormEvent } from "react";

const correctEmail = "test@example.com";
const correctPassword = "abc1234!";
const passwordRegex =
  /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+~`\-={}[\]:;"'<>,.?/\\]).{8,}$/;

type State = {
  email: string;
  password: string;
  emailError: string;
  passwordError: string;
  loginFail: string;
  loginSuccess: string;
};

type Action =
  | { type: "CHANGE_EMAIL"; payload: string }
  | { type: "CHANGE_PASSWORD"; payload: string }
  | { type: "SET_EMAIL_ERROR" }
  | { type: "SET_PASSWORD_ERROR" }
  | { type: "SET_LOGIN_FAIL" }
  | { type: "SET_LOGIN_SUCCESS" }
  | { type: "RESET_MESSAGES" }
  | { type: "CLEAR_EMAIL_ERROR" }
  | { type: "CLEAR_PASSWORD_ERROR" };

const initialState: State = {
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
  loginFail: "",
  loginSuccess: "",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "CHANGE_EMAIL":
      return { ...state, email: action.payload };
    case "CHANGE_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };
    case "SET_EMAIL_ERROR":
      return { ...state, emailError: "이메일이 형식에 맞지 않습니다." };
    case "SET_PASSWORD_ERROR":
      return { ...state, passwordError: "비밀번호가 형식에 맞지 않습니다." };
    case "SET_LOGIN_FAIL":
      return { ...state, loginFail: "이메일 또는 비밀번호가 틀렸습니다." };
    case "SET_LOGIN_SUCCESS":
      return { ...state, loginSuccess: "로그인에 성공했습니다." };
    case "RESET_MESSAGES":
      return {
        ...state,
        email: "",
        password: "",
        emailError: "",
        passwordError: "",
        loginFail: "",
        loginSuccess: "",
      };
    case "CLEAR_EMAIL_ERROR":
      return { ...state, emailError: "" };
    case "CLEAR_PASSWORD_ERROR":
      return { ...state, passwordError: "" };

    default:
      return state;
  }
}

export function useLoginForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "RESET_MESSAGES" });

    let hasError = false;

    if (!state.email.includes("@")) {
      dispatch({ type: "SET_EMAIL_ERROR" });
      hasError = true;
    }
    if (!passwordRegex.test(state.password)) {
      dispatch({ type: "SET_PASSWORD_ERROR" });
      hasError = true;
    }
    if (hasError) return;
    if (state.email !== correctEmail || state.password !== correctPassword) {
      dispatch({ type: "SET_LOGIN_FAIL" });
      return;
    }

    dispatch({ type: "SET_LOGIN_SUCCESS" });
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    dispatch({
      type: "CHANGE_EMAIL",
      payload: value,
    });

    if (!value.includes("@")) {
      dispatch({ type: "SET_EMAIL_ERROR" });
    } else {
      dispatch({ type: "CLEAR_EMAIL_ERROR" });
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    dispatch({
      type: "CHANGE_PASSWORD",
      payload: value,
    });

    if (!passwordRegex.test(value)) {
      dispatch({ type: "SET_PASSWORD_ERROR" });
    } else {
      dispatch({ type: "CLEAR_PASSWORD_ERROR" });
    }
  };
  const closeModal = () => {
    dispatch({ type: "RESET_MESSAGES" });
  };

  return {
    state,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    closeModal,
  };
}
