import { useReducer } from "react"


type State = {
email: string
  password: string
  emailError: string
  passwordError: string
  loginFail: string
  loginSuccess: string
}

type Action =
  | { type: "CHANGE_EMAIL"; payload: string }
  | { type: "CHANGE_PASSWORD"; payload: string }
  | { type: "SET_EMAIL_ERROR"; }
  | { type: "SET_PASSWORD_ERROR"; }
   | { type: "SET_LOGIN_FAIL"; }
  | { type: "SET_LOGIN_SUCCESS"; }
  | { type: "RESET_MESSAGES"; }
  | { type: "RESET_FORM"; }
  | { type: "CLEAR_EMAIL_ERROR" }
| { type: "CLEAR_PASSWORD_ERROR" }




 function reducer(state:State, action:Action):State {
  switch( action.type) {
    case "CHANGE_EMAIL":
      return{...state, email:action.payload,}
    case "CHANGE_PASSWORD" :
      return {
        ...state, password: action.payload,
      }
      case "SET_EMAIL_ERROR" :
        return{...state, emailError:"이메일이 형식에 맞지 않습니다."}
            case "SET_PASSWORD_ERROR" :
        return{...state, passwordError:"비밀번호가 형식에 맞지 않습니다."}
            case "SET_LOGIN_FAIL" :
        return{...state, loginFail:"이메일 또는 비밀번호가 틀렸습니다."}
            case "SET_LOGIN_SUCCESS" :
        return{...state, loginSuccess:"로그인에 성공했습니다."}
            case "RESET_MESSAGES" :
        return{...state, emailError:"", passwordError:"", loginFail:"", loginSuccess:""}
            case "RESET_FORM" :
        return{...state, email:"", password:""}
            case "CLEAR_EMAIL_ERROR":
        return {...state, emailError:""}
        case "CLEAR_PASSWORD_ERROR":
          return {...state, passwordError:""}

      default: return state
  }
  
}

const initialState:State = {
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
  loginFail: "",
  loginSuccess: ""
}


function App() {
  const correctEmail = "test@example.com"
const correctPassword = "abc1234!"
const passwordRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+~`\-={}[\]:;"'<>,.?/\\]).{8,}$/

const [state, dispatch] = useReducer(reducer, initialState)



  return (
    <main>
      <form noValidate onSubmit={
        (e)=>{e.preventDefault()
dispatch({type:"RESET_MESSAGES"})
        let hasError = false
        console.log(state.email, state.password)

        if (!state.email.includes("@")) {
dispatch({type:"SET_EMAIL_ERROR"})
hasError = true
        }
        if (!passwordRegex.test(state.password)) {
dispatch({type:"SET_PASSWORD_ERROR"})
hasError = true
        }
        if (hasError) return 
        if (state.email !== correctEmail || state.password !== correctPassword) {
        dispatch({type:"SET_LOGIN_FAIL"})
        alert("이메일 또는 비밀번호가 올바르지 않습니다.")
        return
        }
        
          dispatch({type: "SET_LOGIN_SUCCESS"})
          alert("로그인에 성공했습니다.")

        }}>
        <h1>로그인 화면</h1>
        <div>
          <label htmlFor="email">이메일 입력</label>
          <input
            id="email"
            type="email"
            placeholder="이메일을 입력해주세요."
            value={state.email}
            onChange={(e) => {
                const value = e.target.value

  dispatch({
    type: "CHANGE_EMAIL",
    payload: value,
  })
        if (!state.email.includes("@")) {
dispatch({type:"SET_EMAIL_ERROR"})
}              

else { dispatch({type:"CLEAR_EMAIL_ERROR"})
}}}
            
         />
         {state.emailError && <p>{state.emailError}</p>}
        </div>
        <div>
          <label htmlFor="password">비밀번호 입력</label>
          <input
            id="password"
            type="password"
            value={state.password}
            placeholder="비밀번호를 입력해주세요. "
onChange={(e) => {
  const value = e.target.value

  dispatch({
    type: "CHANGE_PASSWORD",
    payload: value,
  })

  if (!passwordRegex.test(value)) {
    dispatch({ type: "SET_PASSWORD_ERROR" })
  } else {
    dispatch({ type: "CLEAR_PASSWORD_ERROR" })
  }
}}         />
                  {state.passwordError && <p>{state.passwordError}</p>}

        </div>

        <button type="submit">제출하기</button>
              {state.loginFail && <p>{state.loginFail}</p>}
              {state.loginSuccess && <p>{state.loginSuccess}</p>}

      </form>
    </main>
  );
}

export default App;
