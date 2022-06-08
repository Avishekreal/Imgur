import React from "react";
import './footer.scss';

class Footer extends React.Component{

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      handleScroll = () => {
        if (window.scrollY > 120) {
          document.querySelector(".footer-container").className = "footer-container scroll";
        } else {
          document.querySelector(".footer-container").className = "footer-container";
        }
      };

    render(){
        return(
            <div className="footer-container">
                <div className="footer">
                    <div className="footer-left">
                        <span className="left-txt">© 2022 Imgur, Inc</span>
                        <span className="left-txt">About</span>
                        <span className="left-txt">Terms</span>
                        <span className="left-txt">Privacy</span>
                        <span className="left-txt">Rules</span>
                        <span className="left-txt">Help</span>
                        <span className="left-txt">Emerald</span>
                        <span className="left-txt">Store</span>
                        <span className="left-txt">Advertise</span>
                        <span className="left-txt">Blog</span>
                        <span className="left-txt">Wellness</span>
                        <span className="left-txt">CCPA</span>
                        <span className="left-txt">API</span>
                    </div>
                    <div className="footer-right">Get the App</div>
                </div>
            </div>
        )
    }
}

export default Footer;