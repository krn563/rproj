import React from 'react'
import { FcApproval } from "react-icons/fc";
function GithubUsers({users}) {
  return (
    <>
      <h2 className="text-center text-4xl">List of Github Users</h2>
      <div className="grid items-center justify-center mt-2 place-items-center grid-cols-3 mx-auto gap-5">
      {users.map((currEle) => {
        return (
          <div className="" key={currEle.id}>
            <div className="flex bg-blue-100 w-fit p-4 rounded-md">
              <div className="right p-2 rounded-sm">
                <img src={currEle.avatar_url} alt="image" className="w-40 rounded-md" />
              </div>
              <div className="left  grid gap-1 p-2">
                <div className="title text-3xl flex place-content-center">{currEle.login}<FcApproval /></div>
                <div className="heading text-xl">{currEle.type}</div>
                <div className="count bg-blue-300 rounded-lg flex gap-1">
                  <div className="c1 p-2">
                    <div className="articles text-lg">Articles</div>
                    <div className="num1 font-bold text-center">n1</div>
                  </div>
                  <div className="c2 p-2">
                    <div className="followers text-lg">Followers</div>
                    <div className="num2 font-bold text-center">n2</div>
                  </div>
                  <div className="c3 p-2">
                    <div className="ratings text-lg">Ratings</div>
                    <div className="num3 font-bold text-center">n3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    </>
  )
}

export default GithubUsers