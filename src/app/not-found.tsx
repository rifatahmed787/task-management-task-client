"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 5000);

  return (
    <>
      <div className="flex justify-center items-center">
        <div>
          <h2>Something went wrong!</h2>
          <Link href={"/"}>
            <button>Back To Home</button>
          </Link>
        </div>
      </div>
    </>
  );
}
