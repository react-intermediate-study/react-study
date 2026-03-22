import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import {
  SUCCESS_USER,
  validateEmail,
  validatePassword,
} from "../utils/validate";

export const useSignIn = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useAuthContext();
  const { email, password } = state;

  const handleLogin = () => {
    // 1. 초기화 (이전 에러 지우기)
    dispatch({
      type: "SET_ERRORS",
      payload: { emailError: "", passwordError: "" },
    });

    let hasError = false;
    let errors = { emailError: "", passwordError: "" };

    // 2. 유효성 검사
    if (!validateEmail(email)) {
      errors.emailError = "잘못된 이메일 형식입니다.";
      hasError = true;
    }
    if (!validatePassword(password)) {
      errors.passwordError =
        "비밀번호 양식이 틀렸습니다. (8자 이상, 소문자, 숫자, 특수문자 포함)";
      hasError = true;
    }

    if (hasError) {
      dispatch({ type: "SET_ERRORS", payload: errors });
      return;
    }

    // 3. 가상 백엔드 로그인 로직
    if (email === SUCCESS_USER.email && password === SUCCESS_USER.password) {
      alert("로그인 성공!");
      navigate("/");
    } else {
      dispatch({
        type: "SET_ERRORS",
        payload: {
          emailError: "잘못된 이메일입니다.",
          passwordError: "잘못된 패스워드입니다.",
        },
      });
    }
  };

  return { handleLogin };
};
