import { createContext, useContext, useState } from "react";

const AppRefreshContext = createContext();

export function AppRefreshProvider({ children }) {

  const [refreshKey, setRefreshKey] = useState(0);

  function refreshApp() {
    setRefreshKey((key) => key + 1);
  }

  return (
    <AppRefreshContext.Provider
      value={{
        refreshKey,
        refreshApp,
      }}
    >
      {children}
    </AppRefreshContext.Provider>
  );
}

export function useAppRefresh() {
  return useContext(AppRefreshContext);
}