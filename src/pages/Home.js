import { useEffect } from "react";

const Home = () => {
  //loads the page from the top instead of where the prev page was
  useEffect(() => window.scroll(0, 0), []);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
