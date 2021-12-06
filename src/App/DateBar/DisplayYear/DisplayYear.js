import './DisplayYear.css'

const DisplayYear = props => {
    return(
    <div className="main-div">
        <div>
            Left
        </div>
        <div>
            {new Date().getFullYear()}
        </div>
        <div>
            Right
        </div>
    </div>)
}

export default DisplayYear;
