// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname.startsWith("/")) {
//     return NextResponse.rewrite(new URL("/home", request.url));
//   }
// }

import { NextResponse } from "next/server";

export function middleware(request: any) {
  // Check if the request is for the root path
  if (request.nextUrl.pathname === "/") {
    // Create a URL object with the '/home' path
    const url = request.nextUrl.clone();
    url.pathname = "/home";

    // Return a redirect response to the '/home' path
    return NextResponse.redirect(url);
  }

  // For all other requests, return the response as is
  return NextResponse.next();
}
