import { Inter } from "next/font/google";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";
import { TitleImage } from "@/components/TitleImage";

const inter = Inter({ subsets: ["latin"] });

export function Main(props) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Headline>
        <code className="font-mono font-bold">pages/{props.page}.js</code>
      </Headline>

      <TitleImage />

      <Links />
    </main>
  );
}
