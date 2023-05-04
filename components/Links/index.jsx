import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// 変化しないものを定義するときには大文字で。
// データと処理の部分を分ける。
// mapは一意のkeyを持たせる。

export function Links({ items }) {
  return (
    <div>
      {items.map((item) => {
        return (
          <a
            key={item.href}
            href={item.href}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {item.title}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {item.description}
            </p>
          </a>
        );
      })}
    </div>
  );
}
