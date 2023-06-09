import { Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Table from "../Components/Tabel/BasicTable";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://foodlo-dev-app.onrender.com/api/products/")
      .then((response) => response.json())
      .then((result) => {
        if (result.data.length > 0) {
          setProducts(result.data);
        }
      })
      .catch((err) => console.log(err));

    return () => {};
  }, []);

  return (
    <section id="manage-products-container">
      <div
        style={{
          padding: "50px",
        }}
      >
        <Text fontSize="5xl" mb={10}>
          Manage Products
        </Text>
        <Table data={products} />
      </div>
    </section>
  );
}