import React, {Component} from 'react'
import classes from './Modalst.module.css';
class Modal extends Component{


    onclose = (e)=> {
        this.props.onClose && this.props.onClose(e);
    }

    
    
    render(){
        if (this.props.show){
           return null;
        } 
         return(
         <div>
             {this.props.children}
             <div className={classes.Modalst}>
                 <button onClick ={(e) =>  this.onclose(e)}>
                     Close
                 </button>
             </div>
              </div>
            
         )
     }
}
export default Modal;