import React, { useState, useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import './popup.css';

const Popup = ({ product, onClose }) => {
  const { updateProduct } = useContext(ProductContext);
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);

  const handleSave = () => {
    updateProduct({ ...product, title, price });
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Edit Product</h2>
        <div>
          <label>Thumbnail:</label>
          <br />
          <img src={product.thumbnail} alt={product.title} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)', margin: '10px 0' }} />
        </div>

        <div style={{ margin: 10 }}>
          <label>
          Title:
          </label>
          <input
            type="text"
            value={title} onChange={(e) => setTitle(e.target.value)}
            style={{
              marginLeft:5,
              borderRadius: '5px',
              padding: '8px',
              border: '1px solid #ccc',
              boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.075)',
              cursor:"pointer"
            }}
          />

        </div>
        <div style={{ margin: 10 }}>
          <label>
            Price:
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            style={{
              marginLeft:5,
              borderRadius: '5px',
              padding: '8px',
              border: '1px solid #ccc',
              boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.075)',
              transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
            }}
          />

        </div>
        <br />
        <button
          style={{
            borderRadius: '20px',
            padding: '10px 20px',
            margin: '5px',
            border: 'none',
            background: "#e8e6e6"
          }}
          onClick={handleSave}
        >
          Save
        </button>
        <button
          style={{
            borderRadius: '20px',
            padding: '10px 20px',
            margin: '5px',
            border: 'none',
            background: "#ebcaca"
          }} onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default Popup;
