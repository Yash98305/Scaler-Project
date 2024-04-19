
import React from 'react'
import {motion} from "framer-motion" 
const AnimateBody = ({app}) => {
  return (
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ease:"easeOut", duration: 1 }}
   
      variants={{
        visible: {y:0, opacity: 1, scale: 1 },
        hidden: {y:20, opacity: 0, scale: 1 }
      }}
    >
      {app}
    </motion.div>
  )
}

export default AnimateBody