import { Chrome } from "lucide-react";
import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export default function ButtonLogin() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/dashboard" });
      }}
    >
      <Button variant="outline" className="w-full" type="submit">
        <Chrome className="mr-2 h-4 w-4" />
        Google
      </Button>
    </form>
  );
}
