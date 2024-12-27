import React from "react";
import HomeItems from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);
  
  return (
    <>
      <main className="Hero-section">
        <div className="items-container">
          {items.map((myntraitems) => (
            <HomeItems key={myntraitems.id} item={myntraitems} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
