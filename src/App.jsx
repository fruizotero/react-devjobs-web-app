import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./component/Header";
import { JobsPage } from "./pages/JobsPage";
import { DetailsPage } from "./pages/DetailsPage";
import { DataProvider } from "./context/dataContext";

function App() {
  return (
    <>
      <Header />
      <DataProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<JobsPage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </HashRouter>
      </DataProvider>
    </>
  );
}

export default App;
