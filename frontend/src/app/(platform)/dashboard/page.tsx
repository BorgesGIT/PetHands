import { auth } from "@/auth";
import ButtonLogout from "@/components/shared/button-logout";
import Image from "next/image";
import React from "react";

type Props = {};

export default async function DashboardPage({}: Props) {
  const session = await auth();
  return (
    <div>
      <Image
        src={session?.user?.image || ""}
        alt="User Avatar"
        width={48}
        height={48}
      />
      <ButtonLogout />
    </div>
  );
}
