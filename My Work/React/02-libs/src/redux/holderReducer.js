const initialState = {
    quantity : 10
}

const holderReducer = (state = initialState, action) => {
    switch(action.type){
        case 'quantity/increment' :
            return {
                quantity : state.quantity + 1
            }
        case 'quantity/decrement' :
            return {
                quantity : state.quantity - 1
            }
        case 'quantity/add' :
            return {
                quantity : state.quantity + Number(action.delta)
            }
        default :
            return state;
    }
}

export default holderReducer;