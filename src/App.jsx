import { ThemeProvider } from "./context/theme-provider";
import { Fragment } from "react";
import Router from "./routes/Router";
import { Toaster } from "@/components/ui/toaster"

function App() {
  return (
    <ThemeProvider>
      <Fragment>
        <Router />
        <Toaster />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
