import { TextField } from '@mui/material';
import './PriceSection.css'

export const PriceSection = props => {
    return (
        <div className="price-section-div">
            <div className="price-header">
                Price
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <TextField label="Final Price" type="number" size='small' style={{marginTop: '20px'}}/>
                <TextField label="Down Payment" type="number" size='small' style={{marginTop: '20px'}}/>
            </div>
        </div>
    )
}

export default PriceSection;