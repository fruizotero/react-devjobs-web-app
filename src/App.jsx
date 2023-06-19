import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./component/Header";
import { JobsPage } from "./pages/JobsPage";
import { DetailsPage } from "./pages/DetailsPage";

function App() {
  return (
    <>
      <Header />
      <HashRouter>
        <Routes>
          <Route path="/" element={<JobsPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
