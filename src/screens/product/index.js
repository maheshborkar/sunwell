import React, { useContext, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';
import Popup from '../../components/popup/CustomPopup'; 
import './table.css';
const ProductList = () => {
    const { products, nextPage, prevPage, deleteProduct } = useContext(ProductContext);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);

    const openPopup = (product) => {
        setCurrentProduct(product);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setCurrentProduct(null);
    };

    return (
        <div style={{ padding: 50 }}>
            <h1>Product List</h1>
            <table className="table-container">
                <thead>
                    <tr>
                        <th >Title</th>
                        <th >Price</th>
                        <th >Discounted Price</th>
                        <th >Thumbnail</th>
                        <th >Edit</th>
                        <th >Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        const discountedPrice = product.price * (1 - product.discountPercentage / 100);
                        return (
                            <tr key={product.id}>
                                <td >{product.title}</td>
                                <td >{product.price}</td>
                                <td >{discountedPrice.toFixed(2)}</td>
                                <td ><img src={product.thumbnail} alt={product.title} width="50" height="50" /></td>
                                <td ><button className="button" onClick={() => openPopup(product)}>Edit</button></td>
                                <td ><button className="button" onClick={() => deleteProduct(product.id)}>Delete</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div>
                <button className="button" onClick={prevPage} disabled={products.length === 0}>Previous</button>
                <button className="button" onClick={nextPage}>Next</button>
            </div>
            {isPopupOpen && (
                <Popup product={currentProduct} onClose={closePopup} />
            )}
        </div>
    );
};

export default ProductList;
