import React from 'react';

function Body() {
    return (
        <div className='body p-4 md:p-36 p-0 flex flex-col font-[Inter]'>
            <div className='head md:mb-28 mb-56 h-[700px] flex gap-[25px] items-center justify-center flex-col md:flex-row'>
                <div className='flex flex-col items-center justify-between h-[inherit]'>
                    <img className="w-full" src="assets/images/image-web-3-desktop.jpg" alt="imageWeb3" />
                    <div className='flex mt-4 gap-[40px] justify-between ml-2 mr-2 flex-col md:flex-row'>
                        <div className='w-[80%] md:w-[20%]'><h1 className='text-5xl font-bold text-[#00001a]'>The Bright Future of Web 3.0?</h1></div>
                        <div className='w-full md:w-[50%] leading-loose'>
                            <p className='text-[#5d5f79]'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                            <button className='bg-[#f15e50] text-white p-3 font-bold w-[150px] mt-5 hover:bg-[#00001a]'>READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className='bg-[#00001a] p-[30px] h-[inherit]'>
                    <h1 className='text-4xl text-[#e9ab53] font-bold mb-8'>New</h1>
                    <div className=''>
                        <h3 className='font-bold text-[#fffdfa] text-xl hover:text-[#e9ab53] cursor-pointer'>Hydrogen VS Electric Cars</h3>
                        <p className='text-[#c5c6ce]'>Will hydrogen-fueled cars ever catch up to EVs?</p>
                    </div>
                    <hr className='h-px my-8 bg-gray-200 border-0'/>
                    <div>
                        <h3 className='font-bold text-[#fffdfa] text-xl hover:text-[#e9ab53] cursor-pointer'>The Downsides of AI Artistry</h3>
                        <p className='text-[#c5c6ce]'>What are the possible adberse effects of on-demand AI image generation?</p>
                    </div>
                    <hr className='h-px my-8 bg-gray-200 border-0'/>
                    <div>
                        <h3 className='font-bold text-[#fffdfa] text-xl hover:text-[#e9ab53] cursor-pointer'>Is VC Funding Drying Up?</h3>
                        <p className='text-[#c5c6ce]'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                    </div>

                </div>
            </div>
            <div className='news_list flex gap-[30px] md:gap-[10px] flex-col md:flex-row'>
                <article className='flex gap-10'>
                    <img className="w-[130px] h-[150px]" src="assets/images/image-retro-pcs.jpg" alt="imageRetroPCs" />
                    <div>
                        <h1 className='font-bold text-4xl text-[#c5c6ce] mb-3'>01</h1>
                        <h3 className='font-bold text-2xl text-[#00001a] mb-3 hover:text-[#f15e50] cursor-pointer'>Reviving Retro PCs</h3>
                        <p className='text-[#5d5f79]'>What happens when old PCs are given modern upgrades?</p>
                    </div>
                </article>
                <article className='flex gap-10'>
                    <img className="w-[130px] h-[150px]" src="assets/images/image-top-laptops.jpg" alt="imageTopLaptops" />
                    <div>
                        <h1 className='font-bold text-4xl text-[#c5c6ce] mb-3'>02</h1>
                        <h3 className='font-bold text-2xl text-[#00001a] mb-3 hover:text-[#f15e50] cursor-pointer'>Top 10 Laptops of 2022</h3>
                        <p className='text-[#5d5f79]'>Our best picks for various needs and bugets.</p>
                    </div>
                </article>
                <article className='flex gap-10'>
                    <img className="w-[130px] h-[150px]" src="assets/images/image-gaming-growth.jpg" alt="imageGamingGrowth" />
                    <div>
                        <h1 className='font-bold text-4xl text-[#c5c6ce] mb-3'>03</h1>
                        <h3 className='font-bold text-2xl text-[#00001a] mb-3 hover:text-[#f15e50] cursor-pointer'>The Growth of Gaming</h3>
                        <p className='text-[#5d5f79]'>How the pandemic has sparked fresh opportunities</p>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default Body;