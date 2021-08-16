import "../Menu/Menu.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  showcart,
  showfiter,
  showClock,
  showMusic,
  showCC,
} from "../../utils/common";
import { Button, UncontrolledPopover, PopoverHeader } from "reactstrap";
import Select from "react-select";
import ReactAudioPlayer from "react-audio-player";
import { useGlobalContext } from "../../App";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withRouter } from "react-router-dom";
toast.configure();
function Menu(props) {
  const { cart, setCart } = useGlobalContext();
  let [products, setProducts] = useState([]);
  // console.log(cart)
  const [typeSelected, setTypeSelected] = useState({});
  const [bpmSelected, setBpmSelected] = useState({});
  const [totalSelected, setTotalSelected] = useState({});
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const result = await axios.get(`https://sale-beat.herokuapp.com/beat`);
      // console.log(result);
      setProducts(result.data);
    } catch (error) {}
  };

  useEffect(async () => {
    getData();
  }, []);

  // điều kiện để search item
  // const handleSearch =()=>{
  const handleSeach = (e) => {
    if (!isEmpty(search)) {
      products = products.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }
  };
  // lọc qua các filter
  if (!isEmpty(bpmSelected)) {
    products =
      bpmSelected.value !== "all"
        ? products.filter((item) => item.bpm === bpmSelected.value)
        : products;
  }
  if (!isEmpty(typeSelected)) {
    products =
      typeSelected.value !== "all"
        ? products.filter((item) => item.genre === typeSelected.value)
        : products;
  }
  if (!isEmpty(totalSelected)) {
    products =
      totalSelected.value !== "all"
        ? products.filter((item) => item.mood === totalSelected.value)
        : products;
  }
  //  reset lại filter chả về giá trị all
  const handleResetFilter = (typeSelected, bpmSelected, totalSelected) => {
    setTypeSelected(typeSelected.value === "");
    setBpmSelected(bpmSelected.value === "");
    setTotalSelected(totalSelected.value === "");
  };
  //  add sản phẩm vào giỏ hàng
  const addToCart = (product, price,pay) => {
    const newProduct = { ...product, price};
    setCart([...cart, newProduct]);
    localStorage.setItem('cart',JSON.stringify([...cart, newProduct]))
  };

  // lấy thông tin sản phẩm vừa chọn
  const [product, setProduct] = useState({});
  const handleChange = (product) => {
    setProduct(product);
  };
  // lấy thông tin sản phẩm vừa chọn
  const [list, setList] = useState({});
  const handleClick = (product) => {
    setList(product);
  };

  const [typeOptions] = useState([
    {
      value: "Hiphop/Rap",
      label: "Hiphop/Rap",
    },
    {
      value: "Trap",
      label: "Trap",
    },
    {
      value: "Hiphop",
      label: "Hiphop",
    },
    {
      value: "all",
      label: "all",
    },
  ]);
  const [bpmOptions] = useState([
    {
      value: 100,
      label: 100,
    },
    {
      value: 110,
      label: 110,
    },
    {
      value: 120,
      label: 120,
    },
    {
      value: "all",
      label: "all",
    },
  ]);
  const [totalOptions] = useState([
    {
      value: "Dark",
      label: "Dark",
    },
    {
      value: "Happy",
      label: "Happy",
    },
    {
      value: "Laid Back",
      label: "Laid Back",
    },
    {
      value: "all",
      label: "all",
    },
  ]);

  // const errors = {
  //   name: "name cannot empty",
  // };
  const handleCheck = () => {
    if (localStorage.getItem("token") === null) {
      props.history.push("/login");
    } else {
      toast.warn("🦄 Chưa Cập Nhật Tính Năng Này!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  //  điều kiện hiện thị nếu giá trị lúc đầu là "null"
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  return (
    <div className="wrapper-menu">
      <div className="top-menu">
        <div className="inner-header">
          {/* input search */}
          <div className="custom-search">
            <nav className="navbar navbar-ligh">
              <form>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    style={{ width: "550px", height: "70px" }}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-danger"
                      type="button"
                      style={{ background: "#e1192b" }}
                      onClick={handleSeach()}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </nav>
          </div>
        </div>
        {/* Thông tin chi tiết sản phẩm đang chọn */}
        {!isEmpty(list) ? (
          <div className="container">
            <div className="detair">
              <div className="sub-detair">
                <div className="chil-sub-detair">
                  <div className="detair-img">
                    <img
                      alt=""
                      src={list.url_image}
                      style={{ width: "100%", height: "100%" }}
                    ></img>
                  </div>
                  <div className="information">
                    <div>
                      <h2>{list.last_name}</h2>
                    </div>
                    <div style={{ padding: "10px 0px" }}>Trần Ngọc</div>
                    <div className="style-icon-information">
                      {" "}
                      <div className="style-sub-icon-information">
                        <div style={{ color: "#fadb14" }}> {showCC()}</div>
                        <span style={{ paddingLeft: "7px" }}>{list.bpm}</span>
                      </div>
                      <div className="style-sub-icon-information">
                        <div style={{ color: "#f5222d" }}> {showMusic()} </div>
                        <span style={{ paddingLeft: "7px" }}>Gm</span>
                      </div>
                      <div className="style-sub-icon-information">
                        <div>
                          {showClock()}{" "}
                        </div>
                        <span style={{ paddingLeft: "7px" }}>jun 23,2021</span>
                      </div>
                    </div>

                    <div>
                      {" "}
                      For more exclusive deals and offers please visit our
                      official website!
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="audio-listen">
              <div className="left-audio-listen">
                <div className="img-spin">
                  <img
                    alt=""
                    src={list.url_image}
                    style={{
                      borderRadius: "50%",
                      width: "60px",
                      height: "60px",
                    }}
                  ></img>
                </div>
                <div className="name-singin">{list.title}</div>
              </div>

              <div className="cust-audio">
                <ReactAudioPlayer src={list.url} autoPlay controls />
              </div>
              <div className="icon-show">
                {showCC()}
                {showMusic()} {showClock()}
              </div>
            </div>
          </div>
        ) : null}
        <div className="product">
          <div className="container">
            <div className="detail"></div>
            <div className="list-product">
              <div style={{ paddingLeft: "20px" }}>
                <table style={{ border: "0px" }}>
                  <tbody>
                  {/* input giỏ hàng */}
                  <tr>
                    <td colSpan="5">
                      <div className="top-cust-filter">
                        <div className="filter-body">
                          <Button
                            id="PopoverClick"
                            type="button"
                            className="btn btn-dark cust-button-fiter"
                          >
                            Filter {showfiter()}
                          </Button>
                          <UncontrolledPopover
                            trigger="click"
                            placement="bottom"
                            target="PopoverClick"
                          >
                            <PopoverHeader>Filter by:</PopoverHeader>
                            <div className="cut-reset">
                              <button
                                className="cut-button-reset"
                                onClick={() =>
                                  handleResetFilter(
                                    typeSelected,
                                    bpmSelected,
                                    totalSelected
                                  )
                                }
                              >
                                Reset Filter
                              </button>
                            </div>

                            <div className="popoverheader">
                              <div className="popoverbody">
                                BPM :
                                <Select
                                  className="cust-popover-button"
                                  value={bpmSelected}
                                  options={bpmOptions}
                                  onChange={(event) => {
                                    setBpmSelected(event);
                                  }}
                                />
                              </div>
                              <div className="popoverbody">
                                Type :
                                <Select
                                  className="cust-popover-button"
                                  value={typeSelected}
                                  options={typeOptions}
                                  onChange={(e) => {
                                    setTypeSelected(e);
                                  }}
                                />
                              </div>
                              <div className="popoverbody">
                                Total :
                                <Select
                                  className="cust-popover-button"
                                  value={totalSelected}
                                  options={totalOptions}
                                  onChange={(e) => {
                                    setTotalSelected(e);
                                  }}
                                />
                              </div>
                            </div>
                          </UncontrolledPopover>
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* thông tin toàn bộ sẩn phẩm */}
                  <tr>
                    <td>
                      <div
                        style={{ paddingBottom: "20px", fontSize: "0.8rem" }}
                      >
                        <b>TITLE</b>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ paddingBottom: "20px", fontSize: "0.8rem" }}
                      >
                        <b>TIME</b>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ paddingBottom: "20px", fontSize: "0.8rem" }}
                      >
                        <b>BPM</b>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{
                          paddingBottom: "20px",
                          paddingLeft: "20px",
                          fontSize: "0.8rem",
                        }}
                      >
                        <b>TAGS</b>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ paddingBottom: "20px", fontSize: "0.8rem" }}
                      >
                        <b>PRICE</b>
                      </div>
                    </td>
                  </tr>

                  {products.map((product, index) => (
                    <tr
                      style={{
                        borderBottom: "1px solid white",
                        height: "70px",
                        cursor: "pointer",
                      }}
                      key={index}
                    >
                      <td style={{ paddingTop: "10px" }}>
                        <span >
                          <img
                            alt=""
                            src={product.url_image}
                            className="style-img-product"
                            onClick={() => handleClick(product)}
                          ></img>
                        </span>{" "}
                        <span style={{ paddingLeft: "10px" }}>
                          {product.title}
                        </span>
                      </td>
                      <td style={{ paddingRight: "30px" }}>{product.time}</td>
                      <td>{product.bpm}</td>
                      <td style={{ paddingLeft: "20px" }}>
                        {product.tags.map((tag,index) => (
                          <span style={{ paddingLeft: "5px" }} key={index}>{tag.name}</span>
                        ))}
                      </td>
                      <td>
                        {/* Button trigger modal */}
                        <button
                          className="btn btn-danger"
                          data-bs-toggle="modal"
                          href="#exampleModalToggle"
                          style={{ width: "100px", background: "#e1192b" }}
                          onClick={() => handleChange(product)}
                        >
                          <div className="button-price">
                            <div>{showcart()}</div>
                            <div style={{ paddingLeft: "2px" }}>
                              {product.prices[0].value}$
                            </div>
                          </div>
                        </button>
                      </td>
                      {/* <hr /> */}
                    </tr>
                  ))}
                  </tbody>
                </table>
                <div>
                  {/* Modal */}
                  <div>
                    <div
                      className="modal fade"
                      id="exampleModalToggle"
                      aria-hidden="true"
                      aria-labelledby="exampleModalToggleLabel"
                      tabIndex={-1}
                    >
                      <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="exampleModalToggleLabel"
                            >
                              THÔNG TIN SẢN PHẨM
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            <h2>Choose license type</h2>
                            <div className="sub-modal-body">
                              <div className="body-left">
                                <div className="sub-body-left">
                                  <div className="top-sub-body-left">
                                    <div className="avata-beast">
                                      <img
                                        alt=""
                                        src={product.url_image}
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                        }}
                                      ></img>
                                    </div>
                                  </div>
                                  <div className="bottom-sub-body-left">
                                    {product.title}
                                  </div>
                                </div>
                              </div>
                              {/* information */}
                              <div className="body-right">
                                <div className="choose-price">
                                  {product.prices && product.prices.length > 0
                                    ? product.prices.map((item,index) => (
                                        <div className="sub-choose-price">
                                          <div className="left-choose-price">
                                            <h4
                                              style={{ color: "#f4c82a " }}
                                              key={index}
                                            >
                                              {item.name}
                                            </h4>
                                            <span>
                                              MP3, WAV and TRACK STEMS
                                            </span>
                                          </div>
                                          <div className="between-choose-price"></div>
                                          <div
                                            className="right-choose-price"
                                            style={{ display: "flex" }}
                                          >
                                            <button
                                              className="btn btn-danger"
                                              data-bs-toggle="modal"
                                              href="#exampleModalToggle"
                                              style={{
                                                width: "100px",
                                                background: "#f5222d",
                                                paddingRight: "20px",
                                              }}
                                              onClick={() =>
                                                addToCart(product, item)
                                              }
                                            >
                                              {showcart()}
                                              <span
                                                style={{ paddingLeft: "2px" }}
                                              >
                                                {item.value}$
                                              </span>
                                            </button>
                                          </div>
                                        </div>
                                      ))
                                    : ""}
                                  <div style={{ paddingTop: "10px" }}>
                                    {" "}
                                    <div className="footer-choose-price">
                                      <div className="sub-footer-choose-price">
                                        <div
                                          className="negotiate"
                                          style={{ paddingRight: "5px" }}
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="bi bi-brush"
                                            viewBox="0 0 16 16"
                                          >
                                            <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z" />
                                          </svg>
                                        </div>

                                        <div
                                          onClick={handleCheck}
                                          data-bs-dismiss="modal"
                                          className="negotiate"
                                        >
                                          {" "}
                                          Negotiate the price
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Menu);
