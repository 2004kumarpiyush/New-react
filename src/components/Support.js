import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {
const Navigate=useNavigate();
    function Handler(){
       Navigate('/labs')

    }
    function backhandler(){
        Navigate(-1);  /*mtlab just ek piche jaio*/
    }
  return (
    <div>
    <div>
      This is support page
    </div>
    <button onClick={Handler}>Move to labs page</button>
    <button onClick={backhandler}>Move back</button>
    </div>
  )
}

export default Support
