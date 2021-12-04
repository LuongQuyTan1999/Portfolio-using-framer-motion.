import { Switch, Route, useLocation } from "react-router";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./views/Themes";
import { GlobalStyle } from "./globalStyles";
import { AnimatePresence } from "framer-motion";

// Views
import Main from "./views/Main";
import BlogPage from "./views/BlogPage";
import AboutPage from "./views/AboutPage";
import WorkPage from "./views/WorkPage";
import SkillsPage from "./views/MySkillsPage";
import SoundBar from "./components/SoundBar";

function App() {
  const location = useLocation();
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <SoundBar />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/blog" component={BlogPage} />
            <Route exact path="/work" component={WorkPage} />
            <Route exact path="/skills" component={SkillsPage} />
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
