import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const About = () => {
  return (
    <div className={styles.container}>
       <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill={true} alt="" className={styles.img}/>
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>We create websites, stores and applications for both computers and mobile versions, from preparing the interface to the finished product.
          <br/>  
          <br/>  
          We work with clients with different needs and budgets. We serve small companies, micro-entrepreneurs and craftsmen. Our portfolio also includes huge companies operating in international markets, including highly regulated industries such as finance, medicine, investment and higher education.</p>
        </div>
        <div className={styles.item}>
         <h1 className={styles.title}>What We Do?</h1>
         <p className={styles.desc}>Details that we pay special attention to:
         <br/>  
         <br/>  
          - Creative illustrations
          <br/>  
         <br/>  
          - Friendly, intuitive and simple interface
          <br/>  
         <br/>  
          - High product quality
         </p>
         <Button url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  )
}

export default About