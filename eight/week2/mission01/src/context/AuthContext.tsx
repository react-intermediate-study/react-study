import React, {
  createContext,
  useReducer,
  useContext,
  type ReactNode,
} from "react";

// 1. 상태 타입 정의
interface AuthState {
  email: string;
  password: string;
  emailError: string;
  passwordError: string;
}

type AuthAction =
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | {
      type: "SET_ERRORS";
      payload: { emailError?: string; passwordError?: string };
    }
  | { type: "RESET" };

const initialState: AuthState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
};

// 2. Reducer 로직
function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload, emailError: "" };
    case "SET_PASSWORD":
      return { ...state, password: action.payload, passwordError: "" };
    case "SET_ERRORS":
      return { ...state, ...action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

// 3. Context 생성
const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
} | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuthContext must be used within AuthProvider");
  return context;
};
