import classes from './Preloader.module.css'
import spinner from '../../../assets/img/spinner.svg'

const Preloader = (props) => {
    return (
        <div>
            <img src={spinner} className={classes.spinner}></img> 
        </div>
    )
}

export default Preloader