import { useEffect, useState } from "react";
import { getProducts } from "../../api/fakeStoreApi.js";
import './shop.css';
import ShopItem from "../ShopItem/ShopItem.jsx";
import { ClipLoader } from "react-spinners";
import { useOutletContext } from "react-router";

const ShopPage = () => {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { setCartItems, setCartCounter } = useOutletContext();

  useEffect(() => {
    let ignore = false;
    
    const fetchData = async () => {
      try {
        const data = await getProducts();

        if (!ignore) {
          setItems(data);
          setError(null);
        }
      } catch (error) {
        if (!ignore) {
          setItems(null);
          setError(error.message);
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => ignore = true;
  }, []);

  return (
    <>
      {isLoading && (
        <div className="loading-wrapper">
          <ClipLoader
            color="#5B3F8C"
            size={400}
            cssOverride={{
              filter:
                "drop-shadow(10px 10px 6px #5B3F8C) drop-shadow(0 0 14px #5B3F8C)",
            }}
          />
        </div>
      )}

      {error && <p>{error}</p>}

      <section>
        <div className="shop-items-wrapper">
          {items &&
            items.map((item) => (
              <ShopItem
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                setCartCounter={setCartCounter}
                setCartItems={setCartItems}
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default ShopPage;
