import { useState } from "react";

function Home() {
  const [products, setProducts] = useState({ peujo: 3, totoya: 4 });
  fetch("http://localhost:3000/api/products/").then((res) => {
    res.json().then((data) => console.log(data));
  });
  return (
    <div>
      <h2>Home.jsx :)</h2>
      <ul>
        {Object.keys(products).map((item) => {
          return (
            <li key={item}>
              {item}: {products[item]}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
