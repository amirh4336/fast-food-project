export default function Reducer(state , action) {
    switch (action.type) {
        case 'changeList':
            let list = action.payload;
            if (list === 'listPizza') {
                let listNew = state.listPizza
                return {
                    ...state,
                    listCurrent : listNew
                }
            } else if (list === 'listBurger')  {
                let listNew = state.listBurger
                return {
                    ...state,
                    listCurrent : listNew
                }
            } else if (list === 'listSandwich')  {
                let listNew = state.listSandwich
                return {
                    ...state,
                    listCurrent : listNew
                }
            } else if (list === 'listApetizer')  {
                let listNew = state.listApetizer
                return {
                    ...state,
                    listCurrent : listNew
                }
            } else if (list === 'listDrinks')  {
                let listNew = state.listDrinks
                return {
                    ...state,
                    listCurrent : listNew
                }
            } else if (list === 'listFried')  {
                let listNew = state.listFried
                return {
                    ...state,
                    listCurrent : listNew
                }
            }
            
            break;

        default:
            break;
    }

}
