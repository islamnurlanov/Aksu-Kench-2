import React, {Component} from 'react';
import classes from './Akcist.module.css';
import Modal from "../components/Modal/Modal";




 class Akci extends Component {
      
     
               state = {
                       show: false
               }

               
                showModal = () =>{
               this.setState({
                       ...this.state,
                       show: !this.state.show
               })
       }
       render(){
               return(
                <div className={classes.Akcist}>
                <h1>Прайс листы</h1>  
             <input type="button" onClick={this.showModal} value ="Show Modal"/>
             
               <Modal show={this.state.show}
               onClose={this.showModal}>
                        Это модальное окно
               </Modal>
       <table className="table">
               <thead>
                       <tr>
                               <td className="tabletd">Будни</td>
                               <td  > Выходные</td>
                       </tr>
               </thead>
               <tbody>
                       <tr>
                               <td  > 200сом 1час</td>
                               <td  >100сом 1час</td>
                       </tr>
               </tbody>
               <tfoot>
                       <tr>
                               <td >400сом 2час</td>
                               <td >300сом 2 час</td>
                       </tr>
               </tfoot>
       </table>
       
            </div>
               )
       }
       
        
}
export default Akci;