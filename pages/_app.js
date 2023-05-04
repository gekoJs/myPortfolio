import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import { AppLayout } from "@/layout";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { QueryClientProvider, QueryClient } from "react-query";
// const font = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  const router = useRouter();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          disableTransitionOnChange
        >
          {/* <div className={`${font.className}`}> */}
          <AnimatePresence mode="wait" key={router.route}>
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </AnimatePresence>
          {/* </div> */}
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}
