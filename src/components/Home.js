import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
const img1 =
  "https://www.mobipicker.com/wp-content/uploads/2016/02/macbook-pro.jpg";
const img2 =
  "https://th.bing.com/th/id/OIF.HHBJOaapNnoEn8UThWNKIw?pid=ImgDet&rs=1";
const img3 =
  "https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/11/PS5-Review-8-scaled.jpg";
const img4 =
  "https://images-cdn.ubuy.co.in/633adebbaceaea19c141dbfb-led-44.jpg";
const img5 =
  "https://www.newgennindia.com/wp-content/uploads/2021/03/FM9936.jpg";
const img6 =
  "https://5.imimg.com/data5/ANDROID/Default/2021/1/GZ/TU/CU/12235381/product-jpeg-500x500.jpg";

const Home = () => {
  const dispatch = useDispatch();

  const productList = [
    {
      name: "Macbook",
      price: "89000",
      imgSrc: img1,
      id: "gghshgsugjhjh",
    },
    {
      name: "Iphone",
      price: "52000",
      imgSrc: img2,
      id: "gghshgshjhhkjjsoh",
    },
    {
      name: "PS5",
      price: "65000",
      imgSrc: img3,
      id: "gghshyayay",
    },
    {
      name: "LED Strip Lights",
      price: "2000",
      imgSrc: img4,
      id: "gghshowphkjjsoh",
    },
    {
      name: "Adidas Sipper Bottle",
      price: "1800",
      imgSrc: img5,
      id: "gghshgshj56hhkjjsoh",
    },
    {
      name: "Nike Jordan Retro ",
      price: "12000",
      imgSrc: img6,
      id: "gghshg21shjhhkjjsoh",
    },
  ];
  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Item Added To Cart");
  };
  return (
    <div className="home">
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          imgSrc={product.imgSrc}
          price={product.price}
          name={product.name}
          id={product.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>Rs {price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);
export default Home;
