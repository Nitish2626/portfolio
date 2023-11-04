import './Skills.css';

const Skills = () => {

    const htime = () => {
        let hnumber = document.getElementById("html");
        let htmlCounter = 0;
        setInterval(() => {
            if (htmlCounter >=90) {
                clearInterval();
            }
            else {
                htmlCounter++;
                hnumber.innerHTML = htmlCounter + "%";
            }
        }, 5);
    }

    const ctime=()=>{
        let cnumber=document.getElementById("css");
        let cssCounter=0;
        setInterval(()=>{
            if(cssCounter>=80){
                clearInterval();
            }
            else{
                cssCounter++;
                cnumber.innerHTML=cssCounter+"%";
            }
        },5)
    }

    const jstime=()=>{
        let jsnumber=document.getElementById("js");
        let jsCounter=0;
        setInterval(()=>{
            if(jsCounter>=70){
                clearInterval();
            }
            else{
                jsCounter++;
                jsnumber.innerHTML=jsCounter+"%";
            }
        },5)
    }

    const react=()=>{
        let react=document.getElementById("react");
        let reactCounter=0;
        setInterval(()=>{
            if(reactCounter>=50){
                clearInterval();
            }
            else{
                reactCounter++;
                react.innerHTML=reactCounter+"%";
            }
        },5)
    }

    const all=()=>{
        htime();
        ctime();
        jstime();
        react();
    }

    return (
        <div onLoad={all}>
            <div id="skills">
                <h3 id="text"><img id="skill-image"></img>
                    Skills
                </h3>
                <hr width="100%" color="white"></hr><br></br>

                <p>
                    I have profound knowledge of <strong>HTML (Hypertext Markup Language), CSS (Cascading Style Sheets) and JavaScript</strong>, which are extensively use in making Web Pages as well as doing Web Development.
                </p><br></br>
                <p>
                    I am also learning <strong>REACT JS</strong> which is used to make <strong>Web Apps</strong> and provides better <strong>User Experience</strong> than <strong>Web Pages</strong>.
                </p><br></br>

                <span id="heading">HTML</span>
                {/* <section class="tot">
                    <section id="know"></section>
                </section> */}
                <svg class="tot">
                    <circle id="know" cx="80" cy="80" r="70" stroke="white" stroke-width="7" strokeDasharray="396"><span id="html"></span></circle>
                </svg>
                <br></br>

                <span id="heading1">CSS</span>
                <section class="tot">
                    <section id="know1"></section>
                </section>
                <span id="css"></span><br></br>

                <span id="heading2">JavaScript</span>
                <section class="tot">
                    <section id="know2"></section>
                </section>
                <span id="js"></span><br></br>

                <span id="heading3">REACT JS</span>
                <section class="tot">
                    <section id="know3"></section>
                </section>
                <span id="react"></span>
            </div>
        </div>
    );
}
export default Skills;