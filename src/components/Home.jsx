import banner from '../assets/logo.png'
import Banner from '../shared/Banner'

const Home = () => {

  const data={
    banner,
    para:"Discover a world of free courses and coding challenges at CODEAREA. Break down educational barriers with our diverse curriculum covering coding and more. We believe in accessible learning for all. Sharpen your skills with hands-on coding problems. Empower your mind at CODEAREA —where education is limitless and cost-free.",
    heading:"Develop your Skills without dilligence",
    btn1:"Get Started",
    btn2:"Problems"
  }

  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20" id='home'>
      <Banner banner={data.banner} heading={data.heading} para={data.para} btn1={data.btn1} btn2={data.btn2} />
    </div>
  )
}

export default Home
