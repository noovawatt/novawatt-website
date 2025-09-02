"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import type { Session } from "next-auth";

interface SessionProviderCompProps {
  children: React.ReactNode;
  session: Session | null;
}

export default function SessionProviderComp({
  children,
  session,
}: SessionProviderCompProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
