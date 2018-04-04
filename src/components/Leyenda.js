import React from 'react';
import {Button} from 'semantic-ui-react'

const Leyenda = () => {
    return (
        <div id='Leyenda'>
          <Button size="big" >Continuar con la Compra</Button>
          <p>Leyenda:</p>
          <table>
            <tr>
            <td className='libre-box'>
            </td>
            <td>
              Libre
            </td>
            <td className='seleccionado-box'>
            </td>
            <td>
              Seleccionado
            </td>
            <td className='ocupado-box'>
            </td>
            <td>
              Ocupado
            </td>
          </tr>
          </table>
        </div>
    )
}

export default Leyenda