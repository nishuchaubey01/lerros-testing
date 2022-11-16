import { useState, useEffect }from 'react';

const Display = () => {

    const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(true);
        const [products, setproducts] = useState([]);

        useEffect(() => {
            fetch("https://dummyjson.com/products")
                .then((res) => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setproducts(result);
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                );
        }, []);

if (error) {
            return <>{error.message}</>;
        } else if (!isLoaded) {
            return <>loading...</>;
        } else {
            return (
                
                <div className="wrapper">
                    <ul className="card-grid">
                        {products.map((product) => (
                            <li>
                                <article className="card" key={product.id}>
                                    
                                    <div className="card-content">
                                        <h2 className="card-name">{product.title}</h2>
                                        <ol className="card-list">
                                            <li>
                                                <p>
                                                description:{" "}
                                                <span>{product.description}</span>
                                                </p>
                                            </li>
                                            <li>
                                                Price: <span>{product.price}</span>
                                            </li>
                                            <li>
                                                Category: <span>{product.category}</span>
                                            </li>
                                        </ol>
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
export default Display
