import aboutimg from '../assets/about_img.png'
import {motion} from 'framer-motion';
import { fadeIn } from '../../variants';
const About = () => {
  return (
    <div>
        <div className="md:px-14 p-4 max-w-5 mx-auto space-y-10" id='about'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <motion.div 
                variants={fadeIn("right",0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.7}}

                className='md:w-1/2'>
                    <img src={aboutimg} alt="" />
                </motion.div>

                <motion.div 
                variants={fadeIn("left",0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.7}}

                className='md:w-2/5'>
                    <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>We have been imporoving our product <span className='text-secondary'>for many years...</span></h2>
                    <p className='text-tartiary text-lg mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deserunt voluptatibus id eveniet quasi optio harum dignissimos reprehenderit incidunt ducimus.</p>

                    <button className='btnPrimary'>Get Started</button>
                </motion.div>
            </div>

            

            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
                <motion.div
                variants={fadeIn("up",0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.7}}
                className='md:w-1/2'>
                    <img src={aboutimg} alt="" />
                </motion.div>

                <motion.div 
                variants={fadeIn("right",0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.7}}

                className='md:w-2/5'>
                    <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>We have been imporoving our product <span className='text-secondary'>for many years...</span></h2>
                    <p className='text-tartiary text-lg mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deserunt voluptatibus id eveniet quasi optio harum dignissimos reprehenderit incidunt ducimus.</p>

                    <button className='btnPrimary'>Get Started</button>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default About
