import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../slices/productSlice";
import Message from "../components/Message";

const HomePage = () => {
  // isLoading: a boolean indicating whether the data is still being loaded.
  const { data: products, isLoading, error } = 
  useGetProductsQuery();
  console.log(products);
  return (
    <>
      <h2>Latest Products</h2>
      {isLoading ? (
        <h5>Loading...</h5>
      ) : error ? (
        <Message variant="danger">{error.data.error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            // The code maps over the products array and renders a Product component for each item.
            // The Product component is wrapped in a Col component from react-bootstrap with different width settings for different screen sizes.
            // The key prop is set to the product's _id property to help React keep track of the components.
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomePage;
