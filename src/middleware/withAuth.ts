import { getToken } from "next-auth/jwt";
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

const onlyAdmin = ["/admin"];
const notAuth = ["/auth/login", "/auth/register"];

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = []
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;
    if (requireAuth.includes(pathname)) {
      const token = await getToken({
        req,
        secret: process.env.JWT_SECRET,
      });
      if (!token) {
        const url = new URL("/auth/login", req.url);
        return NextResponse.redirect(url);
      }
      if (token.role !== "admin" && onlyAdmin.includes(pathname)) {
        return NextResponse.redirect(new URL("/product", req.url));
      }
    }
    if (notAuth.includes(pathname) && !requireAuth.includes(pathname)) {
      const token = await getToken({
        req,
        secret: process.env.JWT_SECRET,
      });
      if (token) {
        const url = new URL("/admin", req.url);
        return NextResponse.redirect(url);
      }
    }
    return middleware(req, next);
  };
}
