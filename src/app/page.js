
import WelcomeLink from "@/components/WelcomeLink";
import Image from "next/image";
import logo from "../../public/images/Logo.png"


export default function Home() {
  return (
    <main className="welcome-page h-[100vh] w-full flex flex-col justify-end">
      <div className="h-[50%] flex flex-col justify-between pb-[2.5rem]">
        <Image alt="logo" src={logo} />
        <div className="flex justify-center">
          <WelcomeLink path="/aktiviteter" text="Kom i gang" />
        </div>
      </div>
    </main>
  );
}
