//--로그인----

export const useSigninMutation = () => {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (requestData: SignInRequest) => postSignin(requestData),
    onSuccess: (response) => {
      if (response.resultType === "SUCCESS" && response.success) {
        const { jwtAccessToken, jwtRefreshToken } = response.success.result;
        login({ accessToken: jwtAccessToken, refreshToken: jwtRefreshToken });
        navigate("/");
      } else {
        //서버 실수 등 안전장치 역할
        showToast("아이디 또는 비밀번호를 확인해주세요.", "error");
      }
    },

    onError: (err: unknown) => {
      let message = "네트워크 연결이 원활하지 않습니다.";

      if (axios.isAxiosError<ApiErrorResponse>(err)) {
        //  response 객체 자체가 없을 때를 대비해 안전하게 꺼내기
        const status = err.response?.status;
        const errorData = err.response?.data?.error;

        // 3. HTTP 상태 코드 401 또는 특정 에러 코드(AUTH_BAD_REQUEST) 처리
        if (status === 401 || errorData?.errorCode === "AUTH_BAD_REQUEST") {
          message = "아이디 또는 비밀번호를 확인해주세요.";
        } else if (errorData?.reason) {
          // 4. 서버에서 보내준 구체적인 실패 사유가 있다면 활용
          message = errorData.reason;
        }
      }
      showToast(message, "error");
    },
  });
};
