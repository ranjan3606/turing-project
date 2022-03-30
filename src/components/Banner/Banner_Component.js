import React, { useState, useEffect } from 'react';


function BannerComponent() {
    const [headerProduct, setHeaderProduct] = useState([])
    console.log(headerProduct)

    useEffect(() => {
        async function fetchData() {
            const products = await fetch('https://fakestoreapi.com/products')
                .then((res) => res.json())
            setHeaderProduct(products)
        }
        fetchData(headerProduct)
    }, [])
    return (
        <div className='container mt-5'>
            <div className='row mt-5'>
                {headerProduct.map((data) => {
                    const {id,title, image} = data;

                    return(
                        <div className='col-md-4 mt-5' key={id}>
                            <h3>{title}</h3>

                            <img src={image} className='img-fluid' alt=''/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BannerComponent;
