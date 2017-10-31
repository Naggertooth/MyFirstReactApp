function filters(state = "NONE", action) {
    if (action.type === "NONE") {
        return "NONE"
    }

    if (action.type === "DONE") {
        return "DONE"
    }

    if (action.type === "NOT_DONE") {
        return "NOT_DONE"
    }
    return state;
}


export default filters;