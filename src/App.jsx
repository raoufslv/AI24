import { ThemeProvider } from "./context/theme-provider";
import { Fragment } from "react";
import Router from "./routes/Router";

function App() {
  return (
    <ThemeProvider>
      <Fragment>
        <Router />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
