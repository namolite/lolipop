import React, { useState } from "react";


const Download = () => {
  const downloadResume = () => {
    const [filedata, setFiledata] = useState()
    const blob = new Blob([])
  }
  return(
    <div onClick={downloadResume}></div>
  )
}

export default Download

