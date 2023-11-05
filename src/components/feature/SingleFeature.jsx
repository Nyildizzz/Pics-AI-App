import React from 'react'
import style from "./singleFeature.module.css"
import FeatureData  from "./FeatureData.jsx"


function SingleFeature({feature}) {
  const { icon, title, paragraph } = feature;  
  return (
    <div className={style.container}>
      <div className={style.iconContainer}>{icon}</div>
      <h3 className={style.title}>{title}</h3>
      <p className={style.description}>{paragraph}</p>
    </div>
  )
}

export default SingleFeature