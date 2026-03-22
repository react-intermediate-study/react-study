import React from "react";
import { Button } from "../components/Button";
import { useAuthContext } from "../context/AuthContext";
import { useSignIn } from "../hooks/useLogin";
import { removeWhitespace, blockSpaceKey } from "../utils/inputUtils";

const LoginPage = () => {
  const { state, dispatch } = useAuthContext();
  const { handleLogin } = useSignIn(); // 훅 사용
  const { email, password, emailError, passwordError } = state;

  return (
    <div className="w-[375px] min-h-screen bg-white mx-auto flex flex-col p-4">
      <div className="flex flex-col gap-4 py-10">
        {/* 이메일 영역 */}
        <div>
          <input
            type="text"
            placeholder="이메일 (@ 포함)"
            value={email}
            onChange={(e) =>
              dispatch({
                type: "SET_EMAIL",
                payload: removeWhitespace(e.target.value),
              })
            }
            className={`w-full h-12 border p-4 rounded-lg outline-none ${emailError ? "border-red-500" : "border-gray-200"}`}
          />
          {emailError && (
            <p className="text-red-500 text-xs mt-1">{emailError}</p>
          )}
        </div>

        {/* 비밀번호 영역 */}
        <div>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onKeyDown={blockSpaceKey}
            onChange={(e) =>
              dispatch({
                type: "SET_PASSWORD",
                payload: removeWhitespace(e.target.value),
              })
            }
            className={`w-full h-12 border p-4 rounded-lg outline-none ${passwordError ? "border-red-500" : "border-gray-200"}`}
          />
          {passwordError && (
            <p className="text-red-500 text-xs mt-1">{passwordError}</p>
          )}
        </div>

        <Button onClick={handleLogin}>로그인</Button>
      </div>
    </div>
  );
};

export default LoginPage;
