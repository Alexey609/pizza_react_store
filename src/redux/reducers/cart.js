const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
  };

  const getTotalPrice = arr => arr.reduce((sum,obj) => obj.price + sum, 0);

  const cart = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_PIZZA_CART': {
        const curentItems = !state.items[action.payload.id] 
        ? [action.payload] 
        : [...state.items[action.payload.id].items, action.payload];

        const newItems = {
            ...state.items,
            [action.payload.id]: {
              items: curentItems,
              totalPrice: getTotalPrice(curentItems),
            },
        };

        const items = Object.values(newItems).map(obj => obj.items);
        const allPizzas = [].concat.apply([], Object.values(items));
        const totalPrice = getTotalPrice(allPizzas);

        return {
          ...state,
          items: newItems,
          totalCount: allPizzas.length,
          totalPrice,
        }
      }

       case 'CLEAR_CART':
         return {
           ...state,
           totalCount: 0,
           totalPrice: 0,
           items: {},
         };

         case 'CLEAR_CART_ITEM':
           const newItems = {
             ...state.items,
           }

           const currentPrice = newItems[action.payload].totalPrice;
           const currentCount = newItems[action.payload].items.length;
           delete newItems[action.payload];
          return {
            ...state,
           items: newItems,
           totalPrice: state.totalPrice - currentPrice,
           totalCount: state.totalCount - currentCount,
          };
  
      default:
        return state;
    }
    
  };
  
  export default cart;