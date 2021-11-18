import { usePrevious } from "./usePrevious";
import { useDispatch } from "react-redux";
import { removeTickerAction } from "./store/dataReducer";

export const Card = ({ card }) => {

    const dispatch = useDispatch();

    const { price } = card;
    const prevPrice = usePrevious(price);
    const priceStatus = price ? price > prevPrice ? 'up' : 'down' : 'default';

    const handleClass = () => {
        if(priceStatus === 'up') {
            return 'card'
        } else {
            return 'card-red'
        }
    }

    const remove = ticker => {
        dispatch(removeTickerAction(ticker))
    }

    return (
        <div className={handleClass()}>
            <div>
                <h1>{card.ticker}</h1>
            </div>
            <div>
                <h2>{card.price}</h2>
            </div>
            <button onClick={() => remove(card.ticker)}>
                &times;
            </button>
        </div>
    )
}