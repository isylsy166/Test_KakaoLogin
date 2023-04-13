export const REST_API_KEY = "33f250be6998057f5968ac342ed9710c";
export const REDIRECT_URI = "http://localhost:3000/KakaoLogin";

export default function Home() {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const onClickLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <>
      <img src="/images/kakao_login_button.png" onClick={onClickLogin} />
    </>
  );
}
