import React, { createContext, useContext } from "react";
// next/router  https://nextjs.org/docs/api-reference/next/router
import { useRouter } from "next/router";
import en from "../locales/en-US/common.json";
import es from "../locales/es-ES/common.json";

// create context provider
export const ContextProvider = ({ children }) => {
  // import current locale from NextRouter
  const { locale } = useRouter();

  // assign t as either of the translation json files localted in '../locales' according to the current locale
  let t = locale === "es" ? es : en;

  // create app context to retrieve t value across the app
  const Context = createContext(t);

  return <Context.Provider value={t}>{children}</Context.Provider>;
};

export function useAppContext() {
  // import current locale from NextRouter
  const { locale } = useRouter();

  // assign t as either of the translation json files localted in '../locales' according to the current locale
  let t = locale === "es-ES" ? es : en;

  // create app context to retrieve t value across the app
  const Context = createContext(t);

  return useContext(Context);
}
