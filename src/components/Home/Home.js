import './Home.css';

const Home = () => {
    return (
        <div id="info">
            <div id="introduction">
                <img id="profile-image"></img>

                <h2 id="name">Nitish Kumar Sharma</h2>

                <h4 id="field">Frontend Developer</h4>

                <a href="mailto:nk.sharma2626@gmail.com" id="gmail-link">
                    <img id="gmail-contact"></img>
                    Gmail
                </a>

                <a href="https://linkedin.com/in/nitish-sharma-9465ab252" id="linkedin-link">
                    <img id="linkedin-contact"></img>
                    Linkedin
                </a>

                <a href="https://github.com/Nitish2626" id="github-link">
                    <img id="github-contact"></img>
                    Github
                </a>

                <a href="tel:+91 8976520212" id="phone-link">
                    <img id="tel"></img>
                    Phone
                </a>

                <a id="download-link" download><img id="download-image"></img>C.V</a>

                <a id="view-link" target="_blank"><img id="view-image"></img>C.V</a>
            </div>

            <div id="about-me">
                <h3 id="about-text"><img id="about-image"></img>About Me</h3>
                <hr width="100%" color="grey"></hr><br></br>
                <p>
                    My name is <strong>Nitish Kumar Sharma</strong>, currently i'd opted <strong>BCA (Bachelor of Computer Applications)</strong> Undergraduate degree program from <strong>Yashwantrao Chavan Maharashtra Open University (YCMOU)</strong>.
                </p><br></br>
                <p>
                    I am <strong>Frontend Web Developer</strong> with profound knowledge of <strong>HTML5, CSS3, JAVASCRIPT and REACT JS</strong>. Now, I am learning how to make dynamic <strong>Web Apps</strong> and vision is to learn all <strong>Full Stack Technologies</strong>.
                </p><br></br>
                <p>
                    I am a very <strong>passionate developer</strong> and always try to learn and understand things to become better and <strong>build better</strong>.
                </p>
            </div>
        </div>
    );
}
export default Home;