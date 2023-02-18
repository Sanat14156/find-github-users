import React, { useState,useEffect } from 'react'
import Card from './Card';

function Main() {

    let [search,setSearch]=useState(false);
    let [username,setUsername]=useState("");
    let[data,setData]=useState({});
    
    useEffect(()=>{
        if(search){
            fetch(`https://api.github.com/users/${username}`).then(res=>{
                res.json().then(data=>{ setData(data);
                    console.log(data)});

            })
        }

        setSearch(false);
    },[username,search]);

    let handleSubmit=e=>{
        e.preventDefault();
        console.log(username);
        setSearch(true);
    };

  return (
    <div>
        <form onSubmit={handleSubmit} className='form'>
        {/* username{""} */}
        <label>Search User:</label> <input type="text" placeholder='enter username' name="username" onChange={e=>setUsername(e.target.value)}></input>
        <br></br>
        <br></br>
        <button>Search</button>
        </form>
       <Card html_url={data.html_url} username={username} avatar_url={data.avatar_url}></Card>
    </div>
  )
}

export default Main;