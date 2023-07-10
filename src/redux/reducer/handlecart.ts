interface Product {
    id: number;
    // Specify other properties of a product
    // image: string;
    // title: string;
    // price: number;
  }
  
  interface CartItem extends Product {
    qty: number;
  }
  
  type CartState = CartItem[];
  
  interface AddItemAction {
    type: "ADDITEM";
    payload: Product;
  }
  
  interface DeleteItemAction {
    type: "DELITEM";
    payload: Product;
  }
  
  type CartAction = AddItemAction | DeleteItemAction;
  
  const cart: CartState = [];
  
  const handleCart = (state: CartState = cart, action: CartAction) => {
    const product = action.payload;
  
    switch (action.type) {
      case "ADDITEM":
        const exist = state.find((x) => x.id === product.id);
  
        if (exist) {
          return state.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty + 1 } : x
          );
        } else {
          return [
            ...state,
            {
              ...product,
              qty: 1,
            },
          ];
        }
  
      case "DELITEM":
        const exist1 = state.find((x) => x.id === product.id);
  
        if (exist1 && exist1.qty === 1) {
          return state.filter((x) => x.id !== exist1.id);
        } else {
          return state.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty - 1 } : x
          );
        }
  
      default:
       return  state;
        break;
    }
  };
  
  export default handleCart;
  