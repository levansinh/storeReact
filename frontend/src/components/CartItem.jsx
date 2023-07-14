import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import numberWithCommas from "../util/covertPrice";
import { useDispatch } from "react-redux";
import { updateItem, removeItem } from "../redux/shopping-cart/cartItemSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
function CartItem(props) {
  const dispatch = useDispatch();
  const [item, setItem] = useState(props.item);
  const [quantity, setQuantity] = useState(props.item.quantity);
  const updateQuantity = (type) => {
    if (type === "+") {
      dispatch(updateItem({ ...item, quantity: quantity + 1 }));
    }
    if (type === "-") {
      dispatch(
        updateItem({ ...item, quantity: quantity - 1 === 0 ? 0 : quantity - 1 })
      );
    }
  };
  useEffect(() => {
    setItem(props.item);
    setQuantity(props.item.quantity);
  }, [props.item]);
  const removeCartItem = () => {
    dispatch(removeItem(item));
  };
  return (
    <div className="cart__item flex gap-x-10 items-center">
      <div className="cart__item__info">
        <div className="cart__item__info__name">
          <Link to={`/catalog/${item.slug}`} className="flex w-[200px] gap-x-5 items-center">
            <div className="">{item.title}</div>
            <div className="">{item.size}</div>
            <div className="">{item.color}</div>
          </Link>
        </div>
      </div>
      <div className="cart__item__info__price">
        {numberWithCommas(item.price)}
      </div>
      <div className="cart__item__info__quantity flex ">
        <div
          className="product__info__item__quantity__btn"
          onClick={() => updateQuantity("-")}
        >
          <i className="bx bx-minus"></i>
        </div>
        <div className="product__info__item__quantity__input">{quantity}</div>
        <div
          className="product__info__item__quantity__btn"
          onClick={() => updateQuantity("+")}
        >
          <i className="bx bx-plus"></i>
        </div>
      </div>
      <div className="cart__item__del">
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => removeCartItem()}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default CartItem;
