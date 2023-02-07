export default function Reducer(state , action) {
  switch (action.type) {
    case 'getList':
      let { burger , sandwich , italy , american , drinks , apetizer , fried} = action.payload;
      return {
        ...state ,
        listBurger : burger,
        listSandwich : sandwich,
        listPizzaItaly : italy,
        listPizzaAmerican : american,
        listApetizer : apetizer,
        listFried : fried,
        listDrinks : drinks,
      }
    default:
      break;
  }
}
