import React from 'react';
import Akcist from './Akcist.module.css'
import Modal from './components/Modal/Modal';




export default class Akci extends React.Component {
      
     
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
                       <Akcist>
                <div>
                <h1>Прайс листы</h1>  
             <input type="button" onClick={this.showModal} value ="Show Modal"/>
             
               <Modal show={this.state.show}
               onClose={this.showModal}>
                        this massege is from Mo
               </Modal>
       <table className={Akcist.table}>
               <thead>
                       <tr>
                               <td className={Akcist.tabletd}>Будни</td>
                               <td  className={Akcist.tabletd}> Выходные</td>
                       </tr>
               </thead>
               <tbody>
                       <tr>
                               <td  className={Akcist.tabletd}> 200сом 1час</td>
                               <td  className={Akcist.tabletd}>100сом 1час</td>
                       </tr>
               </tbody>
               <tfoot>
                       <tr>
                               <td className={Akcist.tabletd}>400сом 2час</td>
                               <td  className={Akcist.tabletd}>300сом 2 час</td>
                       </tr>
               </tfoot>
       </table>
       
            </div>
            </Akcist>
               )
       }
       
        
}
