import { NextResponse } from "next/server";

//skrevet fra repitition

export function middleware(request){
console.log("request",request.nextUrl);
if(request.nextUrl.pathname.includes('/kalender')){
    
    if (!request.cookies.has("dans_token") || !request.cookies.has("dans_userid")) {
        return NextResponse.redirect(new URL("/login", request.url))
    }
}
if(request.nextUrl.pathname === '/')
    if (request.cookies.has("welcome_token")) {
        return NextResponse.redirect(new URL("/aktiviteter", request.url))
    }
}

export const config = {
    matcher: [`/kalender/:path*`, '/']
    
}