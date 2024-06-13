import logger from "./logger";
import { NextResponse } from "next/server";
import { authRoutes, protectedRoutes } from "./router/routes";

export function middleware(req) {
  const dev = process.env.NODE_ENV !== "production";
  console.log("middleware!!");
  const baseUrl = dev
    ? "http://localhost:3000"
    : "https://new-panel-beta.azurewebsites.net";

  const currentUser = req.cookies.get("token_ticket");

  // Use o objeto URL para analisar a URL completa
  const url = new URL(req.url, `https://${req.headers.host}`);
  //  console.log("Url: ");
  //  console.log(url);
  //  console.log("#");
  // Extrai o pathname
  let pathname = url.pathname;
  //  console.log("PathOrgin: ");
  //  console.log(pathname);
  //  console.log("#");
  // Verifica se o pathname contém o segmento a ser removido
  if (pathname.includes("/pipe/")) {
    // Remove o segmento do pathname
    const newPathname = pathname.replace(/\/pipe\/[a-zA-Z0-9-]+/, "");

    // Substitui o pathname original pelo novo pathname
    pathname = newPathname;
  }
  //  console.log("PathDestino: ");
  //  console.log(pathname);
  //  console.log("#");
  /*
      1- Caso acessar o login
      2- E o usuário possuir o token
      3- Redirecione para o dashboard
     */
  if (authRoutes.includes(pathname) && currentUser) {
    console.log("Token autorizado. redirecionando para o dashboard...");
    return NextResponse.redirect(`${baseUrl}/dashboard`);
  }
  /*
      1- Caso a rota for protegida
      2- E o usuário não possuir o token
      3- Redirecione para o login
     */
  if (protectedRoutes.includes(pathname) && !currentUser) {
    logger.info("sem token. redirecionando para o login...");
    return NextResponse.redirect(baseUrl);
  } else {
    const url = req.nextUrl.clone();
    logger.info(url);
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
