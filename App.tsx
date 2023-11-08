import { useState, useEffect } from "react";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { Provider } from "react-redux";

import { FETCH_USER_INFO } from "~store/actions";

import { AppNavigator } from "./app/navigators/app-navigators";
import { store } from "./app/store";

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    (async () => {
      await store.dispatch({ type: FETCH_USER_INFO, payload: { id: 2 } });

      setIsAppReady(true);
    })();
  }, []);

  if (!isAppReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}
