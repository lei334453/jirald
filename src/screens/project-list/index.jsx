/*
 * @edu-class-demo: personal
 */
/*

 * @edu-class-demo: personal
 */
import React,{useState,useEffect} from 'react';
import { List } from './List';
import { SearchPanel } from './search-panel';
import {cleanObject,useMount} from '../../utils/clean'
import * as qs from 'qs'
import {useDebounce} from '../../utils/delay'
const apiUrl=process.env.REACT_APP_API_URL
export const ProjectListScreen = () => {
    // eslint-disable-next-line no-unused-vars
    const [list,setList] = useState([])
      const [users,setUsers]=useState([])
    // eslint-disable-next-line no-unused-vars
    const [param, setParam] = useState({
        name: "",
        personId: ''
    })
    //防抖函数
    const debounce=useDebounce(param,2000);

    {/* console.log(apiUrl) */}
    useEffect(() => {
      fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`)
      .then(async response=>{
          if(response.ok){
              setList(await response.json())
          }
      })
    }, [debounce])
      useMount(() => {
      fetch(`${apiUrl}/users`).then(async response=>{
          if(response.ok){
              setUsers(await response.json())
          }
        })
      })
    return (
        <div>
            <SearchPanel users={users} param={param} setParam={setParam}/>
            <List users={users} list={list}/>
        </div>
    )
}