import './contact.css';

export default function Contact () {
    return (
        <div className="col-12 col-md-8 mb-3 form">
            <h1>Contact Me</h1>
            <p>Please fill out the form below to discuss any work oppertunities.</p>
            <form action="">
                <input type="text" className="name" placeholder="Your Name"/>
                <input type="text" className="email" placeholder="Your Email"/>
                <textarea name="message" className="msg" placeholder="Your Message"></textarea>
                 <button type="submit" value="Send" className="submitbtn">Submit</button>
                 <div className="links"></div>
            </form>
        </div>
    )
}