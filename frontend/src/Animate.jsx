
  import React from 'react'
  import {motion} from "framer-motion" 
  const Animate = ({app}) => {
    return (
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ease:"easeOut", duration: 1 }}
     
        variants={{
          visible: {x:0, opacity: 1, scale: 1 },
          hidden: {x:-100, opacity: 0, scale: 1 }
        }}
      >
        {app}
      </motion.div>
    )
  }
  
  export default Animate