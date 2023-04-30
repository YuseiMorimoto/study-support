import { Inter } from "next/font/google";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";
import { TitleImage } from "@/components/TitleImage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Headline title="about" />

      <TitleImage />

      <Links />
    </main>
  );
}
