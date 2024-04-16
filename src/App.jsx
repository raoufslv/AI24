import { ThemeProvider } from "./context/theme-provider";
import { Fragment } from "react";
import Router from "./routes/Router";
import { Toaster } from "@/components/ui/toaster";
function App() {

  return (
      <Fragment>
        <ThemeProvider>
          <Router />
          <Toaster />
        </ThemeProvider>
      </Fragment>
  );
}

export default App;
