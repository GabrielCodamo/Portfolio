import * as motion from "motion/react-client"


export default function Animation(
    {children}: {children: React.ReactNode}
)
{    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
        >
        {children}
        </motion.div> 
)
}