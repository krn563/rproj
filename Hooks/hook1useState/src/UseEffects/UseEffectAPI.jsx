import React, { useEffect, useState } from "react";
import GithubUsers from "./Github/GithubUsers";
import Loading from "./Github/Loading";

function UseEffectAPI() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const getUsers = async () => {
    try {
      const response = await fetch("https://api.github.com/users");
      setLoading(false);
      setUsers(await response.json());
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  };
  useEffect(() => {
    console.log("useEffect API");
    getUsers();
  }, []);
  if(loading){
    return <Loading/>
  }
  return (
    <GithubUsers users={users}/>
  );
}

export default UseEffectAPI;
