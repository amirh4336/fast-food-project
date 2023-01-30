export default function Reducer(state , action) {
  switch (action.type) {
    case 'getToken':
      let { dataToken } = action.payload;
      console.log(dataToken);
      return {
        ...state ,
        dataToken : dataToken
      }
    default:
      break;
  }
}