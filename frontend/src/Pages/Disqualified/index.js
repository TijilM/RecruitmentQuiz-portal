import styles from "./Style/disqualified.module.css"
import React from 'react'

function Disqualified() {
  return (
    <div className={styles.disqualified}><div className={styles.wrapperAlert}>

    <div className={styles.contentAlert}>
  
      <div className={styles.topHalf}>
  
        <p className={styles.tp}></p>
        <h1 className={styles.th1}>Disqualified</h1>
  
       
      </div>
  
      <div className={styles.bottomHalf}>
  
      
  
      </div>
  
    </div>        
  
  </div></div>
  )
}

export default Disqualified
