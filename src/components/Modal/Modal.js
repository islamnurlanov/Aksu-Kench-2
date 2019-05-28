import React, {Component} from 'react'
import classes from './Modalst.module.css';

let dialogStyles = {
    width:'500px',
    maxWidth:'100%',
    margin:'0 auto',
    position:'fixed',
    left:'50%',
    top:'50%',
    transform:'translate(-50%,-50%)',
    zIndex:'999',
    backgroundColor:'#eee',
    padding:'10px 20px 40px',
    borderRadius:'8px',
    display:'flex',
    flexDirection:'column'
};
let dialogCloseButtonStyles = {
    marginBottom:'15px',
    padding:'3px 8px',
    cursor:'pointer',
    borderRadius:'50% ',
    border:'none',
    width:'70px',
    height:'30px',
    fontWeight:'bold',
    alignSelf:'flex-end',
    transform:'translate(550%,1100%)',
    position:'relative'

};
let backdropStyle={
    position:'fixed',
    top:'0',
    bottom:'0',
    left:'0',
    right:'0',
    backgroundColor:'rgba(0,0,0,0.3)',
    padding:'50px'
}

class Modal extends Component{
    onclose = (e)=> {
        this.props.onClose && this.props.onClose(e);
    }
    render(){
        if (this.props.show){
           return null;
        } 
         return(
         <div style={backdropStyle}>
             <div style={dialogStyles}>
             {this.props.children}
             </div>
                 <button style={dialogCloseButtonStyles} onClick ={(e) =>  this.onclose(e)}>
                     Close
                 </button>
             
              </div>
            
         )
     }
}
export default Modal;