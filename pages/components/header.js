function HeaderStan() {
    return ( <div className='flex bg-white flex-row justify-end'>
    <div className="bg-white px-10 py-5 rounded-lg m-2"><p className="whitespace-nowrap font-medium text-3xl ">Marek Valach - Party stany</p></div>
    <button className="relative flex my-5 mr-5 ml-auto text-2xl transition-all rounded-lg bg-white font-medium text-gray-900 group ">
                    <span className='absolute w-0 rounded-lg h-full left-0 bottom-0 ease-out duration-500 bg-black group-hover:w-full group-hover:transition-all'>
                      </span>
                        <span className="px-5 py-3 transition-colors group-hover:text-white z-10">
                            O nás
                        </span>
                    </button>
                    <button className="relative flex my-5 mx-5 text-2xl transition-all rounded-lg bg-white font-medium text-gray-900 group ">
                    <span className='absolute w-0 rounded-lg h-full left-0 bottom-0 ease-out duration-500 bg-black group-hover:w-full group-hover:transition-all'>
                      </span>
                        <span className="px-5 py-3 transition-colors group-hover:text-white z-10">
                            Kontakt
                        </span>
                    </button>
                    <button className="relative flex my-5 mx-5 text-2xl transition-all rounded-lg bg-white font-medium text-gray-900 group ">
                    <span className='absolute w-0 rounded-lg h-full left-0 bottom-0 ease-out duration-500 bg-black group-hover:w-full group-hover:transition-all'>
                      </span>
                        <span className="px-5 py-3 transition-colors group-hover:text-white z-10">
                            Ceník
                        </span>
                    </button>
  </div> );
}

export default HeaderStan;