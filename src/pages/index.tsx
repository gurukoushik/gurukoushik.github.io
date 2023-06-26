import * as React from "react";
import Home from "@/components/Home";

export default function HomePage() {
  React.useEffect(() => {
    document.title = "Guru Senthil";
  }, []);

  return (
    <>
      <Home />
    </>
  );
}
