import './cart.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteCart } from '../../redux/action/action';

const Cart = () => {

    const state = useSelector((state)=> state.addItem);
    const dispatch = useDispatch();

    const cartItems = (cartItems) => {
        return(
            <div className="px-4 my-5 bg-light rounded-3">
                <div className="container py-4">
                    <button className="btn"></button>
                    <div className="row">
                        <div className="col-md-4">
                            <h3></h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  return (
    <>
       {state.length !== 0 && state.map(cartItems)}
    </>
  );
}

export default Cart