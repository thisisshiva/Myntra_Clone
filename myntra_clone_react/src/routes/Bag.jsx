import React from "react";
import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";

function Bag() {

  const bagItems = useSelector(store=> store.bag);
  const items = useSelector(store=> store.items);
  const finalItems = items.filter(items=>{
    const itemsFound = bagItems.indexOf(items.id)
    return itemsFound>=0;
  })

  return (
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map(item=> <BagItem item={item}/> )}
            
          </div>
            <BagSummary/>
        </div>
      </main>
  );
}

export default Bag;
