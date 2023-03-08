import { Global } from "@emotion/react";

import { globalStyles } from "./commons/styles/globalStyles";
import AppRouter from "./components/commons/routes/AppRouter";

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <AppRouter />
    </>
  );
}

export default App;
