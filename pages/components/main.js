import Stan3t6 from './stan3t6';
import StanCard from './stan_card'


function Main() {
    return (
        <div className='flex bg-blue-500 relative'>
            <div className='rounded-lg shadow-lg my-10 bg-slate-200 p-10 absolute w-11/12'>



                <div className='w-8/12 h-screen'>
                    <p className='text-5xl font-medium'>
                        Kvalitní party stany <br/> za nejlepší ceny
                    </p>

                    <button className="relative flex mt-10 text-2xl transition-all rounded-lg bg-slate-300 font-medium text-gray-900 group ">
                    <span className='absolute w-0 rounded-lg h-full left-0 bottom-0 ease-out duration-500 bg-black group-hover:w-full group-hover:transition-all'></span>
                        <span className="px-5 py-2.5 transition-colors group-hover:text-white z-10">
                            Objednat
                        </span> 
                    </button>
                    
                </div>
            </div>
            <div className='absolute right-0 top-12'>
                {/* <div className='ml-10 my-6'>
                    <StanCard />
                </div>
                <div className='my-6 mr-10'>
                    <Stan3t6 />
                </div> */}
            </div>

        </div>
    );
}

export default Main;