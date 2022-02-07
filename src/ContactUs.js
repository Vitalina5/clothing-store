import image3 from './phone.jpg';

function ContactUs() {
    return (
        <div className="container">
    <div className="contact-image">
        <img className='phone' src={image3} width="500" height="650px" alt="phone"/>
    </div>
    <div className="contact-text">
        <div className="cont about">
            <h2>Contact us</h2>
        </div>
        <div className='text'>
            <p>You can contact a member of our friendly customer care team in one of the following ways:</p>
            <h4>By Phone</h4>
            <p>For any customer service enquiries you can contact our customer care team by phone on 1430 124 2185</p>
            <h4>Customer Service Opening Hours</h4>
            <p>Mon-Fri 9.00am to 5.30pm GMT<br></br>Sat 9.00am to 1.00pm GMT</p>
            <h4>By Email</h4>
            <p>For any customer service enquiries you can contact our customer care team by emailing - customercare@gmail.com</p>
            <h4>Telephone Ordering</h4>
            <p>If you would like to place an order by telephone, please call our order line on 1430 124 2184</p>
            <h4>Telephone Order Line Opening Hours</h4>
            <p>Mon-Fri 9.00am to 5.30pm GMT<br></br>Sat 9.00am to 1.00pm GMT</p>
            <h4>Delivery</h4>
            <p>For questions about your delivery, please contact us.</p>
        </div>
    </div>
</div>

    )
}
export default ContactUs;