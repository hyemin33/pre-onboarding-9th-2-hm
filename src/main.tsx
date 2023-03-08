import { ChakraProvider, extendBaseTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const colors = {
  brand: {
    // 900: "#1a365d",
    // 800: "#153e75",
    700: "#789bfb",
    400: "#2b3948",
  },
};

const theme = extendBaseTheme({
  components: {
    colors,
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider them={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
