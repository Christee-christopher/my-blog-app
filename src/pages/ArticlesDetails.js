// import React from 'react'
import { useParams } from "react-router-dom"

const ArticlesDetails = () => {
    const params =useParams();
    const { fullName } =params;

  return (
    <div className="container mx-auto">
        <p>{fullName}</p>
    </div>
  )
}

export default ArticlesDetails