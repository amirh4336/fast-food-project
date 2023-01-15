export default function Reducer(state , action) {
  switch (action.type) {
    case 'DataForm':
      let { Data } = action.payload;
      return {
        ...state ,
        EditData : Data
      }
    default:
      break;
  }
}