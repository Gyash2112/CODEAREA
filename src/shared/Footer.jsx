import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className="bg-[#010851] md:px-14 px-4 max-w-screen-2xl mx-auto">
        <div className='my-12 flex flex-col md:flex-row gap-10'>
            <div className='md:w-1/2 space-y-8 p-1'>
                <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-primary">
                            <img src={logo} className='w-10 inline-block items-center' />
                            <span className='text-white'> CODEAREA</span>
                </a>
                <p className='md:w-1/2 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo veritatis eum laboriosam itaque.</p>
            </div>

            {/* footer navigations */}
            <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
                <div className='space-y-4 mt-5'>
                    <h4 className='text-white text-xl font-bold'>Platform</h4>
                    <ul className='space-y-3 text-white'>
                        <a href="/" className='block hover:text-gray-300'>Overview</a>
                        <a href="/features" className='block hover:text-gray-300'>Features</a>
                        <a href="/about" className='block hover:text-gray-300'>About</a>
                        <a href="/problems" className='block hover:text-gray-300'>Problems</a>
                    </ul>
                </div>

                <div className='space-y-4 mt-5'>
                    <h4 className='text-white text-xl font-bold'>Help</h4>
                    <ul className='space-y-3 text-white'>
                        <a href="/" className='block hover:text-gray-300'>Overview</a>
                        <a href="/features" className='block hover:text-gray-300'>Features</a>
                        <a href="/about" className='block hover:text-gray-300'>About</a>
                        <a href="/problems" className='block hover:text-gray-300'>Problems</a>
                    </ul>
                </div>

                <div className='space-y-4 mt-5'>
                    <h4 className='text-white text-xl font-bold'>Contacts</h4>
                    <ul className='space-y-3 text-white'>
                        <a href="/" className='block hover:text-gray-300'>Overview</a>
                        <a href="/features" className='block hover:text-gray-300'>Features</a>
                        <a href="/about" className='block hover:text-gray-300'>About</a>
                        <a href="/problems" className='block hover:text-gray-300'>Problems</a>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer
