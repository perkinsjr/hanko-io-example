import {NextRequest, NextResponse} from "next/server"
import {jwtVerify, createRemoteJWKSet} from "jose";

const hankoAPI = process.env.NEXT_PUBLIC_HANKO_API_URL || "";

export async function middleware(req: NextRequest) {
    const hanko = req.cookies.get("hanko")?.value;

    const JWKS = createRemoteJWKSet(new URL(`${hankoAPI}/.well-known/jwks.json`))

    try {
        const verifiedJWT = await jwtVerify(hanko ?? "", JWKS );
    } catch (error) {
        console.log(error)
        return NextResponse.redirect(new URL("/login", req.url));
    }
}

export const config = {
    matcher: ["/user-page"]
}