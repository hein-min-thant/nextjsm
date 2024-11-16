import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex-center  flex-col items-center">
      <SignIn />
    </div>
  );
}
