const initialPlans = [
    {
        id: 1,
        done: false,
        name: 'First plan'
    },
    {
        id: 2,
        done: true,
        name: 'First(1) plan'
    }
];

function planReducer( state = initialPlans, action ) {
    if ( action.type === "ADD_PLAN" ) {
        return [
            ...state,
            action.payload
        ];
    }

    if ( action.type === "REMOVE_PLAN" ) {
        const indexOfThisPlan = state.findIndex(
            (item) => { return item.id === action.payload ? true : false }
        );

        state.splice(indexOfThisPlan, 1);

        return [...state];
    }

    if ( action.type === "MARK_AS_DONE" ) {
        const indexOfThisPlan = state.findIndex(
            (item) => { return item.id === action.payload ? true : false }
        );
        state[indexOfThisPlan].done = !state[indexOfThisPlan].done;

        return state;
    }
    
    return state;
}


export default planReducer;