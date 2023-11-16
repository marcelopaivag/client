const reducer = (globalState, action) => {

    switch (action.type) {

        case "GET_PRODUCTS":
            return {
                ...globalState,
                products: action.payload,
                product: [{
                    id_: "",
                    nombre: "",
                    precio: "",
                    descripción: "",
                    imagen: ""
                }]
            }

        case "GET_PRODUCT":
            return {
                ...globalState,
                product: [action.payload]
            }

        default: 
            return globalState

    }


}

export default reducer