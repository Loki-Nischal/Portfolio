import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter basename="/Portfolio">

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;