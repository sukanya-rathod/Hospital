import React from 'react'
import Landing from './landing'
import '../styles/payment.css'
import card_img from '../assets/card_img.png'

export default function Payment() {
  return (
   
    <div class="container">

    <form action='landing.js'>

        <div class="row">

            <div class="col">

                <h3 class="title">billing address</h3>

                <div class="inputBox">
                    <span>full name :</span>
                    <input type="text" placeholder="john deo"/>
                </div>
                <div class="inputBox">
                    <span>email :</span>
                    <input type="email" placeholder="example@example.com"/>
                </div>
                <div class="inputBox">
                    <span>address :</span>
                    <input type="text" placeholder="room - street - locality"/>
                </div>
                <div class="inputBox">
                    <span>city :</span>
                    <input type="text" placeholder="mumbai"/>
                </div>

                <div class="flex">
                    <div class="inputBox">
                        <span>state :</span>
                        <input type="text" placeholder="india"/>
                    </div>
                    <div class="inputBox">
                        <span>zip code :</span>
                        <input type="text" placeholder="123 456"/>
                    </div>
                </div>

            </div>

            <div class="col">

                <h3 class="title">payment</h3>

                <div class="inputBox">
                    <span>cards accepted :</span>
                    <img src={card_img} alt=""/>
                </div>
                <div class="inputBox">
                    <span>name on card :</span>
                    <input type="text" placeholder="mr. john deo"/>
                </div>
                <div class="inputBox">
                    <span>credit card number :</span>
                    <input type="number" placeholder="1111-2222-3333-4444"/>
                </div>
                <div class="inputBox">
                    <span>exp month :</span>
                    <input type="text" placeholder="january"/>
                </div>

                <div class="flex">
                    <div class="inputBox">
                        <span>exp year :</span>
                        <input type="number" placeholder="2022"/>
                    </div>
                    <div class="inputBox">
                        <span>CVV :</span>
                        <input type="text" placeholder="1234"/>
                    </div>
                </div>

            </div>
    
        </div>

        <input type="submit" value="proceed to checkout" class="submit-btn" />

    </form>

</div>    
  )
}




// import React from 'react';
// import { useHistory } from 'react-router-dom'; // Assuming you are using React Router for navigation
// import '../styles/payment.css';

// export default function Payment() {
//   const history = useHistory();

//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent default form submission

//     // Here you can add any form validation or data handling logic

//     // Redirect to landing page
//     history.push('/Landing');
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <div className="row">
//           <div className="col">
//             <h3 className="title">billing address</h3>
//             {/* Your billing address input fields */}
//             <div class="inputBox">
//                     <span>full name :</span>
//                     <input type="text" placeholder="john deo"/>
//                 </div>
//                 <div class="inputBox">
//                     <span>email :</span>
//                     <input type="email" placeholder="example@example.com"/>
//                 </div>
//                 <div class="inputBox">
//                     <span>address :</span>
//                     <input type="text" placeholder="room - street - locality"/>
//                 </div>
//                 <div class="inputBox">
//                     <span>city :</span>
//                     <input type="text" placeholder="mumbai"/>
//                 </div>

//                 <div class="flex">
//                     <div class="inputBox">
//                         <span>state :</span>
//                         <input type="text" placeholder="india"/>
//                     </div>
//                     <div class="inputBox">
//                         <span>zip code :</span>
//                         <input type="text" placeholder="123 456"/>
//                     </div>
//                 </div>
//           </div>

//           <div className="col">
//             <h3 className="title">payment</h3>
//             {/* Your payment input fields */}
//             <div class="inputBox">
//                     <span>cards accepted :</span>
//                     <img src="images/card_img.png" alt=""/>
//                 </div>
//                 <div class="inputBox">
//                     <span>name on card :</span>
//                     <input type="text" placeholder="mr. john deo"/>
//                 </div>
//                 <div class="inputBox">
//                     <span>credit card number :</span>
//                     <input type="number" placeholder="1111-2222-3333-4444"/>
//                 </div>
//                 <div class="inputBox">
//                     <span>exp month :</span>
//                     <input type="text" placeholder="january"/>
//                 </div>

//                 <div class="flex">
//                     <div class="inputBox">
//                         <span>exp year :</span>
//                         <input type="number" placeholder="2022"/>
//                     </div>
//                     <div class="inputBox">
//                         <span>CVV :</span>
//                         <input type="text" placeholder="1234"/>
//                     </div>
//                 </div>

//             </div>
          
//         </div>

//         <input type="submit" value="proceed to checkout" className="submit-btn" />
//       </form>
//     </div>
//   );
// }
