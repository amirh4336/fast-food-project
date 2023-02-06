export default function Reducer(state , action) {
  switch (action.type) {
    case 'DataForm':
      let { Data } = action.payload;
      return {
        ...state ,
        EditData : Data
      }
    case 'IdItem':
      let { IdItem } = action.payload;
      return {
        ...state ,
        IdItems : IdItem
      }
    case 'refresh':
      return {
        ...state ,
        refresh : !state.refresh
      }
    default:
      break;
  }
}