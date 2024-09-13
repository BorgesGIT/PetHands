import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default async function LayoutDashboard({ children }: Props) {
  const session = await auth();

  if (!session?.user) redirect("/auth/login");
  return children;
}
