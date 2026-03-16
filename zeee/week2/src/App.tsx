function App() {
  return (
    <main>
      <form>
        <h1>로그인 화면</h1>
        <div>
          <label htmlFor="email">이메일 입력</label>
          <input
            id="email"
            type="email"
            placeholder="이메일을 입력해주세요."
          ></input>
        </div>
        <div>
          <label htmlFor="password">비밀번호 입력</label>
          <input
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요. "
          ></input>
        </div>

        <button type="submit">제출하기</button>
      </form>
    </main>
  );
}

export default App;
