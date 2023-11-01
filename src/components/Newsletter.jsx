import Banner from "../shared/Banner"
import javaimg from '../assets/java-banner.png'

const Newsletter = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">

        <Banner banner={javaimg} heading="Show Some LOVE..." para="Share this website if you liked" />
        
    </div>
  )
}

export default Newsletter
