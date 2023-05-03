import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import { AppLayout } from "@/layout";
const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider
        enableSystem={true}
        attribute="class"
        disableTransitionOnChange
      >
          <div className={`${font.className}`}>
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </div>
      </ThemeProvider>
    </Provider>
  );
}
