export function Cards({title,title2}) {
    return <div className="flex  flex-col md:flex-row mt-8 gap-4 mx-4 ">
    <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0 bg-slate-400 col-span-5">
            <div className="flex border border-grey-light rounded overflow-hidden shadow">
              <div className="w-full lg:w-2/3 p-9 bg-orange-100 ">
               
                <h3 className="">
                  <a href="#" className="font-serif font-bold no-underline hover:underline text-3xl text-black">
                                    {title}
                                </a>
                </h3>
                <span className="font-sans text-grey-dark">
                                Nov 12
                            </span>
                <p className="text-grey-darkest leading-normal mt-2 mb-6">
                  This is a wider card with supporting text below as a natural lead-in to additional content.
                </p>
                <a href="#" className="no-underline hover:underline text-blue">
                                Continue reading
                            </a>
              </div>
              <div className="hidden lg:block lg:w-1/3">
                <img className="w-full" data-src="#" alt="Card image cap"/>
              </div>
            </div>
          </div>
    
          <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0 bg-slate-400 col-span-5">
            <div className="flex border border-grey-light rounded overflow-hidden shadow">
              <div className="w-full lg:w-2/3 p-9 bg-orange-100">
                
                <h3 className="">
                  <a href="#" className="font-serif font-bold no-underline hover:underline text-3xl text-black">
                                    {title2}
                                </a>
                </h3>
                <span className="font-sans text-grey-dark">
                                Nov 12
                            </span>
                <p className="text-grey-darkest leading-normal mt-2 mb-6">
                  This is a wider card with supporting text below as a natural lead-in to additional content.
                </p>
                <a href="#" className="no-underline hover:underline text-blue">
                                Continue reading
                            </a>
              </div>
              <div className="hidden lg:block lg:w-1/3">
                <img className="w-full" data-src="#" alt="Card image cap"/>
              </div>
            </div>
          </div>      
        </div>
}
