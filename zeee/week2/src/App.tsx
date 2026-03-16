import { useState } from "react"

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
const [passwordError, setPasswordError] = useState("")

  return (
    <main>
      <form noValidate onSubmit={
        (e)=>{e.preventDefault() 
                setEmailError("")
        setPasswordError("")
        let hasError = false
        console.log(email, password)

        if (!email.includes("@")) {
          setEmailError("이메일이 형식에 맞지 않습니다")
          hasError = true
        }
        if (password.length < 8) {
setPasswordError("비밀번호가 형식에 맞지 않습니다.")
hasError = true
        }
        if (hasError) return


        }}>
        <h1>로그인 화면</h1>
        <div>
          <label htmlFor="email">이메일 입력</label>
          <input
            id="email"
            type="email"
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />
         {emailError && <p>{emailError}</p>}
        </div>
        <div>
          <label htmlFor="password">비밀번호 입력</label>
          <input
            id="password"
            type="password"
            value={password}
            placeholder="비밀번호를 입력해주세요. "
            onChange={(e)=> setPassword(e.target.value)}
         />
                  {passwordError && <p>{passwordError}</p>}

        </div>

        <button type="submit">제출하기</button>
      </form>
    </main>
  );
}

export default App;
