import { NextResponse } from "next/server";

//skrevet fra repitition

export function middleware(request){
    if (!request.cookies.has("dans_token") || !request.cookies.has("dans_userid")) {
        return NextResponse.redirect(new URL("/login", request.url))
    }
}

export const config = {
    matcher: `/kalender/:path*`
}