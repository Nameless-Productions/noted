import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./lib/jws";

export default async function Proxy(req: NextRequest) {
    const pathname = req.nextUrl.pathname;

    if (
        pathname.startsWith("/_next") ||
        pathname === "/favicon.ico" ||
        /\.[^/]+$/.test(pathname)
    ) {
        return NextResponse.next();
    }

    if(pathname.startsWith("/login") || pathname.startsWith("/register")) return NextResponse.next();
    const token = req.cookies.get("auth-token")?.value;
    if(!token) return NextResponse.redirect(new URL("/login", req.url));

    const response: any = verifyToken(token);
    if(!response?.username) return NextResponse.redirect(new URL("/login", req.url));
    return NextResponse.next();
}