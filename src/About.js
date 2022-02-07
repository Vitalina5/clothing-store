import image1 from './about.jpg';
function About() {
    return (
        <div>
            <div className="cont about">
                <h2>OUR MISSION</h2>
            </div> 
            <div className='text'>   
                <p>We are renowned for delivering the season’s most wanted styles to millions of people worldwide, which earned us the title of the #1 Most-Searched Fashion Brand on Google in 2019.
                Our team works around-the-clock to bring you the world’s hottest styles.
                We listen to our customers and are always finding innovative ways to improve and deliver the most coveted styles at a moment’s notice.
                Today is our mission remains the same—making affordable fashion accessible to customers around the world.</p>
            </div>
            <div className="cont">
                <img className='slide' src={image1} width="900px" height="600px" alt="women"/>
            </div>
            <div className='cont about'>
                <p className='one'><strong>"WE STAY AHEAD OF THE FASHION CURVE AND THE COMPETITION</strong> BY ENGAGING WITH OUR COMMUNITY EVERY DAY…"</p>
            </div>
        </div>
    )
}

export default About;