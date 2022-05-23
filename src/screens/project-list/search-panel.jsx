import React from "react"
export const SearchPanel = ({param,setParam,users}) => {

    // eslint-disable-next-line no-unused-vars
  
    // eslint-disable-next-line no-unused-vars
   
    return <form action = "#" ><div>
    <input type="text" value ={param.name} onChange = {
        evt => setParam({
            ...param,
            name: evt.target.value
        })}/>
        <select value={param.personId} onChange={evt=>setParam({
            ...param,
            personId:evt.target.value
        })}>
            <option value={''}>负责人</option>
            {users.map(user=><option key={user.id} value={user.id}>{user.name}</option>)}
        </select>
         </div>
        </form>
}