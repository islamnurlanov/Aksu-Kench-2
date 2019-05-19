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
.modal{
        display:none;
        position:fixed;
        z-index:1;
        left:0;
        top:0;
        width:100%;
        height:100%;
        overflow:auto;
        background-color:rgba(0,0,0,0.8);
}
.modal-content{
        background-color:#fefefe;
        margin:15% auto;
        padding:20px;
        border:1px solid #888;
        width:80%;
}
.close{
        color:#aaa;
        float:right;
        font-size:28px;
        font-weight:bold;
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