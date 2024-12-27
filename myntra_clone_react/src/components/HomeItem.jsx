import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { IoAddCircle } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

const HomeItems = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const eleFound = bagItems.indexOf(item.id) >= 0;

  const HandleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  const HandleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">${item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>

        {eleFound ? (
          <button className="btn btn-danger btn-add-bag" onClick={HandleRemove}>
            <RiDeleteBin6Line /> Remove from Bag
          </button>
        ) : (
          <button className="btn btn-success btn-add-bag" onClick={HandleAddToBag}>
            <IoAddCircle /> Add to Bag
          </button>
        )}
      </div>
    </>
  );
};
export default HomeItems;
