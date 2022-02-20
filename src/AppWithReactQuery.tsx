import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import "./App.css";


export interface IData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

async function getUser (id: number) {
  const request = await fetch(`https://reqres.in/api/users/${id}?delay=1`)

  const response = await request.json();

  if(!request.ok){
    throw new Error(response.error);
  }

  return response.data as IData;

}


function App() {
  const [currentUserId, setCurrentUserId] = useState(1);
  const { data, isError, isLoading} = useQuery(["users", currentUserId], () => getUser(currentUserId))

  if(isError) {
    return (
      <section>Ocorreu um error!</section>
    )
  }

  if( !data || isLoading) {
    return (
      <section>Loading...</section>
    )
  } 
  
  
  return (
    <section>
      <img src={data.avatar} />
      <p>
        {data.id} - {data.first_name}  {data.last_name} 
      </p>

      <p>Email: e-mail@email.com</p>

      <div>
        <button onClick={()=> setCurrentUserId(prev => prev-1)}>Prev</button>
        <button onClick={()=> setCurrentUserId(prev => prev+1)}>Next</button>
      </div>
    </section>
    

  )
}

export default App
