import { useEffect, useState } from "react";
import { _get } from "../../helpers/apiClient";
import Card from "../../components/card";
import "./styles.css";
import Header from "../../components/Header";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [draggedProductIndex, setDraggedProductIndex] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const onDragStart = (index) => {
    setDraggedProductIndex(index);
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (index) => {
    if (draggedProductIndex === null) return;
    const newProducts = [...data];
    const draggedItem = newProducts[draggedProductIndex];
    newProducts.splice(draggedProductIndex, 1);
    newProducts.splice(index, 0, draggedItem);
    setData(newProducts);
    localStorage.setItem("productsData", JSON.stringify(newProducts));
    setDraggedProductIndex(null);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await _get("/api/v2/projects");
      setData(response.data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  return loading ? (
    <p>is loading</p>
  ) : (
    <>
      <Header></Header>
      <div className="products">
        {data.map((item, index) => {
          return (
            <Card
              key={item.id}
              img={item.user.profile_image_url}
              title={item.name}
              price={item.project_songs_count}
              onDragStart={() => onDragStart(index)}
              onDragOver={onDragOver}
              onDrop={() => onDrop(index)}
              onClick={() => handleProductClick(item)}
            ></Card>
          );
        })}
      </div>
    </>
  );
};
export default Products;
