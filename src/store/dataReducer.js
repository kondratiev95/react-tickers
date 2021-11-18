const defaultDtate = {
    data: [],
    tickers: ['AAPL','GOOGL','MSFT','AMZN','FB','TSLA']
}

const GET_DATA = 'GET_DATA';
const REMOVE_TICKER = 'REMOVE_TICKER';

export const dataReducer = (state = defaultDtate, action) => {
    switch(action.type) {
        case GET_DATA:
            return {...state, data: [...action.payload] };
        case REMOVE_TICKER: 
            return {...state, tickers: state.tickers.filter(ticker => ticker !== action.payload)};
        default: 
            return state;
    }
}
export const getDataAction = payload => ({ type: GET_DATA, payload});
export const removeTickerAction = payload => ({ type: REMOVE_TICKER, payload});