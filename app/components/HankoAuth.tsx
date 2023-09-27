"use client"

import { useEffect,useCallback, useState } from "react"
import {useRouter} from "next/navigation";
import { register, Hanko } from "@teamhanko/hanko-elements"

const hankoAPI = process.env.NEXT_PUBLIC_HANKO_API_URL || "";

export default function HankoAuth() {
    const router = useRouter();

  const [hanko, setHanko] = useState<Hanko>();

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoAPI))
    );
  }, []);

    const redirectAfterLogin = useCallback(() => {
        router.replace("/user-page");
    }, [router])

    useEffect(
        () =>
          hanko?.onAuthFlowCompleted(() => {
            redirectAfterLogin();
          }),
        [hanko, redirectAfterLogin]
    );

    useEffect(() => {
        register(hankoAPI).catch((error) => {
            console.log(error)
        })
    }, [])
    return <hanko-auth/>
}