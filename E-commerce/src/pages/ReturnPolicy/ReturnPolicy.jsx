import React from 'react';
import './ReturnPolicy.css';

const ReturnPolicy = () => {
  return (
    <div className='return-policy'>
      <h1>Return Policy</h1>
      
      <p>Thank you for shopping with us! We want you to be completely satisfied with your purchase. If you are not satisfied, we are here to help.</p>

      <h2>Returns</h2>
      <p>You have <strong>15 calendar days</strong> to return an item from the date you received it.</p>
      
      <h2>Eligibility for Returns</h2>
      <ul>
        <li>Items must be unused and in the same condition that you received them.</li>
        <li>Items must be in the original packaging.</li>
        <li>Proof of purchase (receipt or order confirmation) is required.</li>
      </ul>

      <h2>Non-Returnable Items</h2>
      <ul>
        <li>Gift cards</li>
        <li>Downloadable software products</li>
        <li>Customized products</li>
      </ul>

      <h2>How to Return an Item</h2>
      <ol>
        <li>Contact our customer service team at <a href="mailto:devcreationsblr@gmail.com">devcreationsblr@gmail.com</a> to initiate a return.</li>
        <li>Pack the item securely in its original packaging.</li>
        <li>Include the proof of purchase.</li>
        <li>Ship the item to the address provided by our customer service team.</li>
      </ol>

      <h2>Refunds</h2>
      <p>Once we receive your item, we will inspect it and notify you of the status of your refund. If approved, we will initiate a refund to your original method of payment.</p>

      <h2>Exchanges</h2>
      <p>If you need to exchange an item for the same item, please contact us at <a href="mailto:devcreationsblr@gmail.com">devcreationsblr@gmail.com</a>.</p>

      <h2>Shipping Costs</h2>
      <p>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions about our return policy, please contact us:</p>
      <p>Email: <a href="mailto:devcreationsblr@gmail.com">devcreationsblr@gmail.com</a></p>
    </div>
  );
};

export default ReturnPolicy;