import React from 'react'
import InnerBox from './InnerBox'

const Right = () => {
  let username = localStorage.getItem("username");

  return (
    <>
        
        <div className="welcomeDiv">
          <h3>
            Welcome , <span style={{ color: "crimson" }}>{username}.</span>
          </h3>
        </div>

        <div className="boxes">
          <InnerBox name={"Live Users"} number={"468"} sym={"+"} />
          <InnerBox name={"Total User Base"} number={"100000"} sym={"+"} />
          <InnerBox name={"Storage Capacity"} number={"1"} sym={"TB"} />
          <InnerBox name={"Data Usage"} number={"25"} sym={"GB"} />
        </div>
    </>
  )
}

export default Right