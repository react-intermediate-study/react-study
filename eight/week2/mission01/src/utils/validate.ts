export const validateEmail = (email: string) => {
  return email.includes("@");
};

export const validatePassword = (password: string) => {
  // 비밀번호 8자 이상, 영문 소문자와 숫자, 특수기호 정규식
  const regex =
    /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+~`\-={}[\]:;"'<>,.?/\\]).{8,}$/;
  return regex.test(password);
};

// 테스트을 위한 이메알,패스워드
export const SUCCESS_USER = {
  email: "test@gmail.com",
  password: "password123!",
};
