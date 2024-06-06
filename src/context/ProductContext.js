import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const limit = 10;

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const fetchProducts = async (page) => {
    const skip = page * limit;
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,discountPercentage,thumbnail`);
      const data = await response.json();
      setProducts(data.products);
    } catch (e) {
      console.log(e);
    }
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const saveProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) => 
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
  };

  const updateProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) => 
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <ProductContext.Provider value={{ products, nextPage, prevPage, saveProduct, deleteProduct, setProducts, currentPage,updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
