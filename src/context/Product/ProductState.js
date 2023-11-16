import { useReducer } from 'react'

import axiosClient from "./../../config/axios"

import ProductContext from "./ProductContext"
import ProductReducer from "./ProductReducer"

const ProductState = (props) => {

    const initialState = {
        products: [],
        product: [{
            id_: "",
            nombre: "",
            precio: "",
            decripción: "",
            imagen: ""
        }]
    }

    const [globalState, dispatch] = useReducer(ProductReducer, initialState)

    const getProduct = async (id) => {

        const res = await axiosClient.get(`/obtener-producto/${id}`)

        const product = res.data.product

        dispatch({
            type: "GET_PRODUCT",
            payload: product
        })

        return product

    }


    const getProducts = async () => {

        const res = await axiosClient.get("/obtener-productos")

        dispatch({
            type: "GET_PRODUCTS",
            payload: res.data.productos
        })

    }

    const getPreferenceCheckoutMP = async (dataform) => {

        console.log("dataform:", dataform)

        const res = await axiosClient.post("/mercadopago", dataform)

        return res.data.checkoutId

    }


    return (
        <ProductContext.Provider
            value={{
                products: globalState.products,
                product: globalState.product,
                getProduct,
                getProducts,
                getPreferenceCheckoutMP       
            }}
        >
            { props.children }
        </ProductContext.Provider>
    )

}


export default ProductState