import React, { useEffect, useState } from "react";
import Preloader from "./components/Preloader/Preloader";
import Nav from "./components/Nav/Nav";
import "./App.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading && <Preloader setIsLoading={setIsLoading} />}
      {!isLoading && <Nav />}
    </div>
  );
}
