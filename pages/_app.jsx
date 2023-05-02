import "@/styles/globals.css";

// 共通化したいことなどは_app.jsx

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
