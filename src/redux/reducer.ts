
export const reducer = (initialState = {
  dogList:[]
}, action) => {
  switch (action.type) {
    case "FETCH_DOGS":
      return{
        ...initialState,
        dogList:action.payload
      }
      case "UPDATE_FAV_DOG":
        let t = initialState.dogList.map(element=> {
          if(element.id === action.payload){
            return {
              ...element,
              isFav:!element.isFav
            }
          }
          else{
            return element
          }
        })
        return{
          ...initialState,
          dogList:[...t]
        }
    default:
      return initialState
  }
}
