export type LoginState = {
  email: string;
  password: string;
  errors: {
    email?: string;
    password?: string;
    general?: string;
  };
  isValid: boolean;
  isSubmitting: boolean;
};

export type LoginAction =
  | { type: "CHANGE_EMAIL"; payload: string }
  | { type: "CHANGE_PASSWORD"; payload: string }
  | { type: "SET_ERRORS"; payload: LoginState["errors"] }
  | { type: "SUBMIT" }
  | { type: "SUCCESS" }
  | { type: "FAIL"; payload: string }
  | { type: "RESET" };

export const initialState: LoginState = {
  email: "",
  password: "",
  errors: {},
  isValid: false,
  isSubmitting: false,
};

export const validate = (email: string, password: string) => {
  const errors: LoginState["errors"] = {};

  if (!email.includes("@")) {
    errors.email = "올바른 이메일 형식이 아닙니다.";
  }

  if (password.length < 6) {
    errors.password = "비밀번호는 6자 이상이어야 합니다.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

export const loginReducer = (
  state: LoginState,
  action: LoginAction,
): LoginState => {
  switch (action.type) {
    case "CHANGE_EMAIL": {
      const { errors, isValid } = validate(action.payload, state.password);

      return {
        ...state,
        email: action.payload,
        errors: {
          ...state.errors,
          email: errors.email,
          password: errors.password,
        },
        isValid,
      };
    }

    case "CHANGE_PASSWORD": {
      const { errors, isValid } = validate(state.email, action.payload);

      return {
        ...state,
        password: action.payload,
        errors: {
          ...state.errors,
          email: errors.email,
          password: errors.password,
        },
        isValid,
      };
    }

    case "SET_ERRORS":
      return {
        ...state,
        errors: action.payload,
        isValid: false,
      };

    case "SUBMIT":
      return {
        ...state,
        isSubmitting: true,
        errors: {
          ...state.errors,
          general: undefined,
        },
      };

    case "SUCCESS":
      return {
        ...state,
        isSubmitting: false,
      };

    case "FAIL":
      return {
        ...state,
        isSubmitting: false,
        errors: {
          ...state.errors,
          general: action.payload,
        },
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
};