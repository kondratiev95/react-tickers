import { usePrevious } from "./usePrevious";

export const Card = ({ card, remove }) => {

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

    return (
        <div className={handleClass()}>
            <div>
                <h1>{card.ticker}</h1>
            </div>
            <div>
                <h2>{card.price}</h2>
            </div>
            <button onClick={() => remove(card)}>
                &times;
            </button>
        </div>
    )
}