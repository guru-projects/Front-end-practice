import { data } from "./data";
import { useState } from "react";
import Cart from "./components/Cart";
import add from './assets/images/icon-increment-quantity.svg'
import sub from './assets/images/icon-decrement-quantity.svg'
import addToCart from './assets/images/icon-add-to-cart.svg'

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (data) => {
    setCart((perv) => {
      const existingItem = perv.find((item) => item.name === data.name);

      if (existingItem) {
        return perv.map((item) =>
          item.name === data.name ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...perv, { name: data.name, price: data.price, count: 1 }];
      }
    });
  };

  const deleteCount = (data) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.name === data.name);
  
      if (existingItem) {
        // If the item's count is more than 1, decrement it.
        if (existingItem.count > 1) {
          return prev.map((item) =>
            item.name === data.name ? { ...item, count: item.count - 1 } : item
          );
        }
        // If the item's count is 1, remove it from the cart.
        return prev.filter((item) => item.name !== data.name);
      }
  
      return prev;
    });
  };
  

  const deleteItem = (item) => {
    setCart((prev) => prev.filter((i) => i.name !== item.name));
  };

  return (
    <section className="bg-slate-800 p-6 flex">
      <div className="flex-2 p-6">
        <h1 className="text-4xl text-slate-200">Desserts</h1>

        <div className="grid grid-cols-3">
          {data.map((data, index) => (
            <div className="max-w-[300px] p-4" key={index}>
              <div className="relative">
                <img
                  className="rounded-lg object-contain"
                  src={data.image.mobile}
                  alt={data.name}
                />
                {cart.find((cartItem) => cartItem.name === data.name &&
                cartItem.count > 0) ? (
                  <button
                    className="w-max inline-flex items-center gap-6 absolute -bottom-5 left-1/2 transform -translate-x-1/2 border px-6 py-2 border-red bg-red rounded-3xl cursor-pointer"
                    >
                    <img src={sub} alt="minus" className="p-[2px] py-[6px] border rounded-full" onClick={() => deleteCount(data)} />
                    <span className="text-nowrap">{cart.find(item => item.name === data.name).count}</span>
                    <img src={add} alt="add" className="p-[2px] border rounded-full" onClick={() => handleAddToCart(data)}/>
                  </button>
                ) : (
                  <button
                    className="w-max inline-flex gap-2 absolute -bottom-5 left-1/2 transform -translate-x-1/2 border px-6 py-2 border-red bg-white rounded-3xl cursor-pointer"
                    onClick={() => handleAddToCart(data)}>
                    <img src={addToCart} alt="addToCart" />
                    <span className="text-nowrap">Add to cart</span>
                  </button>
                )}
              </div>

              <div className="mt-8">
                <p className="text-base text-rose-300">{data.category}</p>
                <h2 className="text-rose-500 font-semibold text-lg">
                  {data.name}
                </h2>
                <span className="text-red font-semibold text-lg">
                  ${data.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Cart cartData={cart} deleteItem={deleteItem} />
    </section>
  );
}

export default App;
