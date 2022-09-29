import React from 'react'
import Styles from "./Loader.module.css"

const Loader = () => {
  return (
 <div className={Styles.loader}>
  <span className={Styles.loader__element}></span>
  <span className={Styles.loader__element}></span>
  <span className={Styles.loader__element}></span>
</div> 
  )
}

export default Loader