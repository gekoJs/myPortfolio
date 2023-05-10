import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import { AppLayout } from "@/layout";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { QueryClientProvider, QueryClient } from "react-query";

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
          <AnimatePresence mode="wait" key={router.route}>
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </AnimatePresence>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}
