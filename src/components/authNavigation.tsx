import { auth } from "@/auth/handler";
import AuthClient from "./authClient";
import { SessionProvider } from "next-auth/react";

export default async function AuthNavigation() {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <AuthClient />
    </SessionProvider>
  );
}
