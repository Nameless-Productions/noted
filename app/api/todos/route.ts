import getTodos from "@/lib/getTodos";
import { verifyToken } from "@/lib/jws";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth-token")?.value;
    if(!token) return new NextResponse(null, {status: 401});
    const jwtRes: any = verifyToken(token);
    if(!jwtRes || !jwtRes.userId) return new NextResponse(null, {status: 401});


    const todos = await getTodos(jwtRes.userId);
    return NextResponse.json({todos: todos});
}