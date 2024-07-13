import React, { useEffect, useState } from "react";

function UseEffectAPI() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    //console.log(response)
    // const data =await response.json()
    // console.log(data)
    setUsers(await response.json());
  };
  useEffect(() => {
    console.log("useEffect API");
    getUsers();
  }, []);
  return (
    <>
      <h2 className="text-center text-4xl">List of Github Users</h2>
      <div className="grid items-center justify-center place-items-center grid-cols-3 mx-auto gap-5">
      {users.map((currEle) => {
        return (
          <div className="" key={currEle.id}>
            <div className="flex bg-blue-400 w-fit p-4 rounded-md">
              <div className="right bg-red-400 p-2 rounded-sm">
                <img src={currEle.avatar_url} alt="image" className="w-40" />
              </div>
              <div className="left bg-lime-400 grid gap-1 p-2">
                <div className="title text-3xl">{currEle.login}</div>
                <div className="heading text-xl">Sub-Heading</div>
                <div className="count flex gap-1">
                  <div className="c1 bg-blue-600 border-2 p-2">
                    <div className="articles">Articles</div>
                    <div className="num1">num1</div>
                  </div>
                  <div className="c2 bg-blue-600 border-2 p-2">
                    <div className="followers">Followers</div>
                    <div className="num2">num2</div>
                  </div>
                  <div className="c3 bg-blue-600 border-2 p-2">
                    <div className="ratings">Ratings</div>
                    <div className="num3">num3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      </div>      
    </>
  );
}

export default UseEffectAPI;
