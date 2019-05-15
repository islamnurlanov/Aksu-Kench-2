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


export const Akci = () => (
        <Styles>
        <div>
            <caption>Прайс листы</caption>  
            <button>Калькулятор</button>
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