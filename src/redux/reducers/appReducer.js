import * as ACTIONS from "../actions";


function appReducer(state, action) {

    switch (action.type) {
    
        case ACTIONS.SIGN_IN_SUCCESS:
        
            return Object.assign({}, state, {
                initialized: true
            });
    
        case ACTIONS.SIGN_IN_FAILED:
            
            return Object.assign({}, state, {
                initialized: false,
                pending: false
            });
        
        case ACTIONS.GET_LIST:

            return Object.assign({}, state, {
                pending: true
            });
    
        case ACTIONS.GET_LIST_OK:
        
            return Object.assign({}, state, {
                response: action.response,
                pending: false
            });
    
        case ACTIONS.READ_POST:
        
            return Object.assign({}, state, {
                pending: true
            });
            
        case ACTIONS.READ_POST_OK:
        
            return Object.assign({}, state, {
                pending: false
            });
    
        case ACTIONS.SAVE_POST:
        
            return Object.assign({}, state, {
                pending: true
            });
    
        case ACTIONS.SAVE_POST_OK:
        
            return Object.assign({}, state, {
                response: action.response,
                pending: false
            });
    
        default:
            return state;
    }
};

export default appReducer;
