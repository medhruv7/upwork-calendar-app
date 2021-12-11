import './PriceSection.css'

export const PriceSection = props => {
    return (
        <div className="price-section-div">
            <div className="price-header">
                Price
            </div>
            <div>
                <div className="final-price-wrapper">
                    <div>
                        Final Price: 
                    </div>
                    <div className="price-input">
                        <input type="number"/>
                    </div>
                </div>
                <div className="down-payment-wrapper">
                    <div>
                        Down Payment: 
                    </div>
                    <div className="price-input">
                        <input type="number"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceSection;