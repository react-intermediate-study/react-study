import React, {
  createContext,
  useReducer,
  useContext,
  type ReactNode,
} from "react";

// 타입 정의
interface AuthState {
  email: string;
  password: string;
  emailError: string;
  passwordError: string;
}
//액션 타입 지정
type AuthAction =
  | { type: "SET_EMAIL"; payload: string } //이메일 값 저장
  | { type: "SET_PASSWORD"; payload: string } //비밀번호 값 저장
  | {
      type: "SET_ERRORS"; //에러 메시지들 수정
      payload: { emailError?: string; passwordError?: string };
    }
  | { type: "RESET" }; //입력값,애러 초기호ㅏ

//초기 상태
const initialState: AuthState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
};

// Reducer 로직
function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "SET_EMAIL": //이메일 입력값 저장 기존 에러 메시지초기화
      return { ...state, email: action.payload, emailError: "" };
    case "SET_PASSWORD": //비밀번호 입력값 저장,기존 에러 메시지 초기화
      return { ...state, password: action.payload, passwordError: "" };
    case "SET_ERRORS": //에러메시지 업데이트
      return { ...state, ...action.payload };
    case "RESET": //초기화
      return initialState;
    default:
      return state;
  }
}

// Context 생성
const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
} | null>(null);

//상태와 dispatch 동시에 전달
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
//context 사용으로 context가 provider 없이 사용시 에러 뜨도록
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuthContext must be used within AuthProvider");
  return context;
};
