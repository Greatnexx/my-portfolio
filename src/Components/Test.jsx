import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../utills/motionUtils";


const Test = () => {
  return (
    <div>
        <motion.div
  variants={fadeIn("right", 0.6)}
  initial="hidden"
  animate="visible"
>
  <h1>Fade-in Animation bro...........</h1>
</motion.div>

<motion.div
  variants={staggerContainer()}
  initial="hidden"
  animate="visible"
>
  <motion.div variants={zoomIn(0.5)}>
    <p>Zoom-in Item 1</p>
  </motion.div>
  <motion.div variants={zoomIn(0.5, 0.3)}>
    <p>Zoom-in Item 2</p>
  </motion.div>
  <motion.div variants={zoomIn(0.5, 0.6)}>
    <p>Zoom-in Item 3</p>
  </motion.div>
</motion.div>

{/* the stagering is used for like cards if u want the first to show before the second with little delay to the third and so on.. */}

        
      
    </div>
  )
}

export default Test
