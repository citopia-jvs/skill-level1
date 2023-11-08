import { useState, useEffect } from "react";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { ToastProvider } from "react-native-toast-notifications";

import { store } from "~store";
import { FETCH_USER_INFO } from "~store/actions";
import { AppNavigator } from "~navigators/app-navigators";
import { ClassicToast } from "~components/ClassicToast";

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
        <ToastProvider
          placement="top"
          duration={5000}
          renderToast={(e) => {
            switch (e.message) {
              case "UPDATED_USER_INFO":
                return (
                  <ClassicToast
                    title="Profil mis à jour"
                    description={`Vous avez mis à jour votre profil avec succès`}
                    onPress={() => {
                      e.onHide();
                    }}
                    onHide={e.onHide}
                  />
                );

              default:
                return (
                  <ClassicToast
                    title="Error message"
                    description="Nous rencontrons un problème 😵‍💫"
                    onHide={e.onHide}
                  />
                );
            }
          }}
        >
          <AppNavigator />
        </ToastProvider>
      </SafeAreaProvider>
    </Provider>
  );
}
