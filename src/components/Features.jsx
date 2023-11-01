import java from '../assets/java-banner.png'
import mern from '../assets/mern-banner.png'
import mysql from '../assets/mysql-banner.png'
import {motion} from 'framer-motion';
import { fadeIn } from '../../variants';
const Features = () => {
  return (
    <div className="py-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id='feature'>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <motion.div className="lg:w-1/4"
          variants={fadeIn("right",0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.7}}
          >
            <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">COURSES</h3>
            <p className="text-base text-tartiary">Immerse yourself in the world of free learning with our standout feature—free courses complemented by interactive videos. At <span>CODEAREA</span>, education is at your fingertips without any cost. Dive into engaging content, master concepts with hands-on exercises, and elevate your skills effortlessly. Join us today at <span>CODEAREA</span> for a dynamic learning experience that&apos;s both enriching and cost-free.</p>
          </motion.div>

          <motion.div
          variants={fadeIn("up",0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.7}}
          className='w-full lg:w-3/4'>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8 '>
              <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                <div>
                  <img src={java} alt="" className='w-auto h-auto'/>
                  <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Fundamentals of JAVA</h5>
                </div>
              </div>
              <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                <div>
                  <img src={mern} alt="" className='w-auto h-auto'/>
                  <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>MERN stack Development</h5>
                </div>
              </div>
              <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                <div>
                  <img src={mysql} alt="" className='w-auto h-auto'/>
                  <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Basics of MySQL</h5>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      
    </div>
  )
}

export default Features
