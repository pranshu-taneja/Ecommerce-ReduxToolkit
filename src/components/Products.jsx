import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { add } from "../store/cartSlice"
import { STATUSES, fetchProducts } from "../store/productSlice";


function Products() {
    const dispatch = useDispatch();

    // const [fetchedData, setFetchedData] = useState([])
    const { data: products, status } = useSelector(state => state.product);


    useEffect(() => {
        dispatch(fetchProducts());
        //     async function fetchData() {
        //         const response = await fetch('https://fakestoreapi.com/products')
        //         const data = await response.json()
        //         setFetchedData(data);
        //         console.log(fetchedData)
        //     }
        //     fetchData();
    }, [])

    function handleAdd(product) {
        dispatch(add(product))
    }

    if (status === STATUSES.LOADING) {
        return <h2>Loading....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }

    return (
        <div>
            <div>Products</div>
            <li className="products">
                {
                    products.map((product) => (
                        <ul className="card" key={product.id}>
                            <img src={product.image} alt="" />
                            <h4>{product.title}</h4>
                            <h5>{product.price}</h5>
                            <button className="btn" onClick={() => { handleAdd(product) }}>
                                Add to cart
                            </button>
                        </ul>
                    ))
                }
            </li>

        </div>
    )
}

export default Products