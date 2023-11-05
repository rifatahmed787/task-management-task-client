import { useEffect, useState } from "react";
import { useAppDispatch } from "./reduxHook";
import { useCookies } from "react-cookie";
import { userLoggedIn } from "@/Redux/features/auth/authSlice";

export default function useAuthCheck() {
  const dispatch = useAppDispatch();
  const [authChecked, setAuthChecked] = useState(false);
  const [cookies] = useCookies(["auth_details"]);

  useEffect(() => {
    if (cookies.auth_details?.isLoggedIn) {
      const {
        isLoggedIn = false,
        user = undefined,
        accessToken = "",
      } = cookies.auth_details;
      if (isLoggedIn && user) {
        dispatch(
          userLoggedIn({
            isLoggedIn: isLoggedIn,
            user,
            accessToken,
          })
        );
      }
    }
    setAuthChecked(true);
  }, [cookies.auth_details, dispatch]);
  return authChecked;
}
