import {Fragment} from 'react'
import CartLogo from '../../assets/cartlogo.png'
import classes from './carticon.module.css';

const CartIcon =()=>{
    return <Fragment>
        <img className={classes.icon}
        src={CartLogo} alt="Cart Svg" />
    </Fragment>
}
export default CartIcon;