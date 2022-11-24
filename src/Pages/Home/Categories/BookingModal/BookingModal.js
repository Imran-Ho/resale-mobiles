import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/ContextAPI';

const BookingModal = ({bookingModal}) => {
    const {user} = useContext(AuthContext);
    const {resale_price, title} = bookingModal;
    console.log(bookingModal)


    const bookingHandler = event =>{
        event.preventdefault()


    }
    return (
        <div>
            <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">User and Product details:</h3>
                    <form onSubmit={bookingHandler} className='grid grid-cols-1 gap-3 mt-6'>
                        
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="your name" className="input w-full input-bordered" />
                        <input name='email' type="text" defaultValue={user?.email} disabled placeholder="your email" className="input w-full input-bordered" />
                        <input name='model' type="text" defaultValue={title} disabled placeholder="your name" className="input w-full input-bordered" />
                        <input name='price' type="text" defaultValue={resale_price} disabled placeholder="your name" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="your phone" className="input w-full input-bordered" />
                        <input name='text' type="text" placeholder="your location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-primary w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default BookingModal;