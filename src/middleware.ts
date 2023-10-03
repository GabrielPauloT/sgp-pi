import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const token = req.cookies.get("auth")?.value;

  const signInURL = new URL("/", req.url);
  const homeInURL = new URL("/home", req.url);

  if (!token) {
    if (req.nextUrl.pathname === "/") {
      return NextResponse.next();
    }

    return NextResponse.redirect(signInURL);
  }

  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(homeInURL);
  }
}

export const config = {
  matcher: ["/", "/home"],
};
