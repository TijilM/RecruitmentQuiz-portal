import styles from "./Style/submitted.module.css"
import React from 'react'

function Submitted() {
  return (
    <div className={styles.submitted}><div className={styles.wrapperAlert}>

    <div className={styles.contentAlert}>
  
      <div className={styles.topHalf}>
  
        <p className={styles.tp}><svg className={styles.svgsub} viewBox="0 0 512 512" width="100" title="check-circle">
          <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
          </svg></p>
        <h1 className={styles.th1}>Submitted Successfully</h1>
  
       
      </div>
  
      <div className={styles.bottomHalf}>
  
      
  
      </div>
  
    </div>        
  
  </div></div>
  )
}

export default Submitted