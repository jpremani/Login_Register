
import "./Home.css";
import { redirect } from "react-router-dom";

function ProjectClick(){
  redirect('https://github.com/jpremani/');
}
export default function () {
  return (
    <div>
      
      <div className="container">
        <div>
          <aside>
            <a href="https://github.com/jpremani/" target="_blank"><span className="bi bi-github"></span></a>
            <a href="https://www.linkedin.com/in/jay-premani"  target="_blank"><span className="bi bi-linkedin"></span></a>
            <a href="mailto:j.premani98@gmail.com" target="_blank"><span className="bi bi-google"></span></a>
            <a href=""></a> 
          </aside>
        </div>
        <div className="main">
            <div className="heading">HEY I'M Jay Premani</div>
            <p className="pasg">A Fromtend Web Developer building the FrontEnd Web Appliction and Websites <br/>
            that leads to the Success of the overall products</p>

            <button className="btn btn-light"><a href="https://github.com/jpremani/">Projects</a></button>
            
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}
