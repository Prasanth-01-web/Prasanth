import React from "react";
import './footer.css'

class Footer extends React.Component{
    render() {
        return(
            <div className="Footer" style={{
                position:"relative",
                top:"55px",
                textAlign:"center"
            }}>
            © Copyright is a form of legal protection that gives you ownership rights to your original works.<br/>
             The moment you create a work of creative expression that falls within the scope of <br/>
             US copyright laws, it is automatically protected by law.</div>
        )
    }
}
 export default Footer