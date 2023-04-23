import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export default function App({ Component, pageProps }) {

  return (
    <ThemeProvider enableSystem ={true} attribute="class" disableTransitionOnChange>
      <div className={`${font.className}`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
