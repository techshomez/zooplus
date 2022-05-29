const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDPRO":
            // checking if product has already been added to the cart
            const  exist = state.find((x)=> x.id === product.id);
           
            if(exist){
                //Quantity increment
                return state.map((x)=> 
                x.id === product.id ? {...x, qty: x.qty + 1} : x
                );
            }else{
                const product = action.payload;
                return[
                    ...state,
                    {
                        ...product,
                        qty:1,
                    }
                ]
            } 
            break;

            case "DELPRO":
                const exist_del = state.find((x)=> x.id === product.id);
                if(exist_del.qty === 1){
                    return state.filter((x)=> x.id !== exist_del.id);
                }else{
                    return state.map((x)=>
                    x.id === product.id ? {...x, qty: x.qty-1} : x
                    );
                }
                break;

        default:
            return state;
            break;
    }
}

export default handleCart;