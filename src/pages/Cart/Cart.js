import React, { useState } from "react";
import "../Cart/Cart.css";
import { useGlobalContext } from "../../App";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
toast.configure();
function Cart(props) {
  const { cart, setCart } = useGlobalContext();
  // remove sảm phẩm đã mua
  const handleremove = (product) => {
    const a = cart.filter((item) => item !== product);
    setCart(a);
    localStorage.setItem("cart", JSON.stringify(a));
  };

  // tổng giá tiền trước khi discount
  const total = cart
    .reduce((total, thing) => total + thing.price.value, 0)
    .toFixed(2);
  // giá sale
  let discount = 0;

  if (cart.length === 2) {
    discount = (total * 0.1).toFixed(2);
  } else if (cart.length === 3) {
    discount = (total * 0.15).toFixed(2);
  } else if (cart.length >= 4) {
    discount = (total * 0.25).toFixed(2);
  } else {
    discount = 0;
  }

  const handleClick = async () => {
    if (localStorage.getItem("token") === null) {
      props.history.push("/login");
    } else if (cart.length === 0) {
      alert("Bạn chưa có sản phẩm nào ");
    } else {
      console.log(cart);
      const saveorder = await axios.post(
        "https://sale-beat.herokuapp.com/order",
        { items: cart },{headers:{Authorization: ` eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGVJZCI6Miwicm9sZSI6IkN1c3RvbWVyIiwidXNlck5hbWUiOiJ1c2VyMSIsImVtYWlsIjoidXNlcjFAZ21haWwuY29tIiwiaWF0IjoxNjI3NzE5NzI0fQ.cqZAO1v5KEQr5puNoLh1VLbyCeum6beQxIuUaz3f2kQ`}}
      );
      props.history.push("/");
      toast.success("Mua Hàng Thành Công!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setCart([])
      window.localStorage.removeItem("cart");
      console.log(saveorder);
    }
  };
  const pay = total - discount; /* giá tiền sau khi trừ  discount */
  return (
    <div className="wrapper">
      <div className="container" style={{ padding: "20px 10px" }}>
        <div className="top-cart">
          <h1 className="title-cart">CART REVIEW</h1>
        </div>
        <div className="body-cart">
          <div className="left-body-cart">
            <div className="sub-left-body-cart">
              <div className="name-sub-left-body-cart">
                <b>Product</b>
              </div>
              <div className="price-sub-left-body-cart">
                <b>Price</b>
              </div>
            </div>
            {cart.map((product) => (
              <div className="sub-left-body-cart">
                <div className="name-sub-left-body-cart">
                  <div className="avata-cart">
                    <img
                      alt=""
                      src={product.url_image}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    ></img>
                  </div>
                  <div style={{ padding: "10px 0px 0px 20px" }}>
                    {product.title}
                  </div>
                </div>
                <div className="price-sub-left-body-cart">
                  <div className="price-cart">{product.price.value}$</div>
                  <div className="custom-remove">
                    <button
                      style={{ background: "#ADADAD" }}
                      onClick={() => handleremove(product)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={25}
                        height={25}
                        fill="currentColor"
                        className="bi bi-x-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="information-pay">
              <div className="total-cart">
                <div className="left-total-cart">Gross</div>
                <div className="right-total-cart">{total}$</div>
              </div>
              <div className="total-cart">
                <div className="left-total-cart">Discount</div>
                <div className="right-total-cart">{discount}$</div>
              </div>
              <div className="total-cart">
                <div className="left-total-cart">Total</div>
                <div className="right-total-cart">{pay}$</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-cart">
          <div className="modal-footer">
            <div className="pay-cuts">
              {/* <Link to="/Use"> */}
              <button
                type="submit"
                className="btn btn-danger"
                style={{ padding: "15px" }}
                onClick={() => handleClick()}
              >
                Thanh Toán
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Cart);
