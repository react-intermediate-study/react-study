export type MockLoginResult = {
  user: {
    id: number;
    name: string;
    email: string;
  };
  accessToken: string;
};

const MOCK_EMAIL = "test@test.com";
const MOCK_PASSWORD = "1234asdf@@";

export async function mockLogin({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<MockLoginResult> {
  await new Promise((res) => setTimeout(res, 500));

  if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
    return {
      user: {
        id: 1,
        name: "테스트 유저",
        email,
      },
      accessToken: "mock-token",
    };
  }

  throw new Error("이메일 또는 비밀번호가 올바르지 않습니다.");
}
