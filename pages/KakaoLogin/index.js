import { useEffect } from "react";
import { REDIRECT_URI, REST_API_KEY } from "..";
import { useRouter } from "next/router";

export default function KakaoLogin() {
  // 인가코드
  const router = useRouter();
  const KAKAO_CODE = router.query.code;
  console.log(`인가코드: ${KAKAO_CODE}`);

  const kakaoToken = () => {
    try {
      fetch("https://kauth.kakao.com/oauth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant-type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}
        `,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.access_token) {
            localStorage.setItem("token", data.access_token);
          } else {
            router.push("/");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!router.query) {
      return;
    }
    kakaoToken();
  }, []);

  return <div>KakaoLogin Page</div>;
}
