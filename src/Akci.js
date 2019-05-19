import React from 'react'
import styled from 'styled-components';



const Styles = styled.div `
.table{
       border-collapse:collapse; 
       margin:5px;
}
.table-td{
        border:1px solid black
        
}

`;


export const Akci = (props) => (
       
       <Styles>
        <div>
            <h1>Прайс листы</h1>  
          
            <button>Калькулятор</button>
           <div id="myModal" className="modal">
                <div className="modal-content">
                        <span className="close">
                                <p>Modal window!</p>
                        </span>
                </div>
           </div>
   <table className='table'>
           <thead>
                   <tr>
                           <td className='table-td'>Будни</td>
                           <td className='table-td'> Выходные</td>
                   </tr>
           </thead>
           <tbody>
                   <tr>
                           <td className='table-td'> 200сом 1час</td>
                           <td className='table-td'>100сом 1час</td>
                   </tr>
           </tbody>
           <tfoot>
                   <tr>
                           <td className='table-td'>400сом 2час</td>
                           <td className='table-td'>300сом 2 час</td>
                   </tr>
           </tfoot>
   </table>
   
        </div>
        </Styles>
)