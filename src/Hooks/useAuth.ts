import { useAppSelector } from "./reduxHook";

export default function useAuth() {
  const auth = useAppSelector((state) => state.auth);
  if (auth?.isLoggedIn && auth?.user) {
    return true;
  } else {
    return false;
  }
}
