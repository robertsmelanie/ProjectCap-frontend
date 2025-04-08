import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Components.css';
import BarnCatsImage from '../components/BarnCatsImage';


function Supplies() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/products')
            .then((res) => setProducts(res.data))
            .catch((err) => console.error('Error fetching products:', err));
    }, []);

  

    return (
        <>
            <main>


                <section>
                    <h2>Welcome to Our Pet Store!</h2>
                    <p>Your one-stop shop for all things pet-related.</p>
                    <div className="title">
                        <h1>
                            Supplies
                        </h1>
                    </div>
                    <div className="container">
                        <div className="container1">
                            <div className="containertext">
                                <div className="supply-container">
                                    <h3><em>Our Supplies</em></h3>
                                    <section className="container">
                                        <div className="row">
                                            {products.map((product, index) => (
                                                <div key={index} className="col-md-4 mb-4">
                                                    <div className="card h-100 shadow">
                                                       
                                                            <img
                                                                src={product.Image}
                                                                className="card-img-top"
                                                                alt={product.ItemTitle}
                                                                style={{ height: '200px', objectFit: 'cover' }}
                                                            />
                                                        
                                                       
                                                        <div className="card-body">
                                                            <h5 className="card-title">{product.ItemTitle}</h5>
                                                            <p className="card-text">{product.Description}</p>
                                                            <p className="card-text fw-bold">${product.Price}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </main>
        </>
    );
}

export default Supplies;
