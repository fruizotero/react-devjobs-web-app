/* eslint-disable no-unused-vars */
import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./component/Header";
import { JobsPage } from "./pages/JobsPage";
import { DetailsPage } from "./pages/DetailsPage";
import { DataProvider } from "./context/dataContext";
import { useState } from "react";

function App() {

  let [theme, setTheme] = useState(false);

  const handleTheme= ()=>{
    setTheme(!theme);
  }

  return (
    <>
      <main className={`main ${theme && "dark"}`}>
        <Header theme={handleTheme} />
        <DataProvider>
          <HashRouter>
            <Routes>
              <Route path="/" element={<JobsPage />} />
              <Route path="/details/:id" element={<DetailsPage />} />
              <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
          </HashRouter>
        </DataProvider>
      </main>
    </>
  );
}

export default App;
