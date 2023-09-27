"use client"

import {useEffect} from "react"
import { register } from "@teamhanko/hanko-elements"

const hankoAPI = process.env.NEXT_PUBLIC_HANKO_API_URL || "";

export default function HankoProfile() {
    useEffect(() => {
        register(hankoAPI).catch((error) => {
            console.log(error)
        })
    }, [])

    return <hanko-profile/>
}