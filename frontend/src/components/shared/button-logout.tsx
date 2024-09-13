import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export default function ButtonLogout() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <Button variant="outline" className="w-full" type="submit">
        Logout
      </Button>
    </form>
  );
}
