import Filters from "./Filters";
import Content from "./Content";
import { useState } from "react";
import { IFiltersValue } from "../types/types";
import "../styles/app.scss";

function App() {
  const [activeFilter, setActiveFilter] = useState<IFiltersValue | null>(null);

  const addActiveFilter = (filter: IFiltersValue | null) => {
    setActiveFilter(filter);
  };

  return (
    <div className="app">
      <Filters addActiveFilter={addActiveFilter} />
      <Content activeFilter={activeFilter} />
    </div>
  )
}

export default App
