import Image from 'next/image';
import Link from "next/link";

const Banner = () => {
    return (
        <div id="home-section" className='bg-lightkblue'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                    <div className='col-span-6 flex flex-col justify-evenly'>
                        <div className='flex gap-2 mx-auto lg:mx-0'>
                            <Image src="/assets/banner/check.svg" alt="check-image" width={20} height={20}/>
                            <h3 className='text-kellygreen text-sm font-semibold text-center lg:text-start'>2+ years of
                                experience</h3>
                        </div>
                        <h1 className='text-[#184a79] text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0'>
                            Hello,
                            I'm Hassan <br/>
                            Full Stack <span className={"text-[#ffb900] decoration-[#184a79] underline"}>Developer</span></h1>
                        <h3 className='text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0'>Build
                            Experienced  software engineer with <span className={"text-kellygreen font-bold text-xl underline"}>2+</span> years of experience, specializing in
                            full stack Software Development.</h3>
                        <div className={"flex justify-center sm:justify-center w-full md:justify-center lg:justify-start"}>
                            <div className={"flex justify-center flex-col gap-5 mt-6 lg:mt-4 sm:flex-col md:flex-row items-center lg:flex-row"}>
                                <a
                                    href="https://drive.google.com/file/d/1SIRjFtrxWwAt4gV8hZ21Tv5yT2Rd5i-S/view?usp=sharing" // Replace with the path to your PDF file in the public directory
                                    download="Moon.pdf" // Specify the filename for the downloaded file
                                    className="text-blue text-lg font-medium lg:me-9 py-5 px-12 transition duration-150 ease-in-out leafbutton bg-[#b3d7fb] hover:text-white hover:bg-[#184a79]"
                                >
                                    Download CV
                                </a>

                                <Link target={"_blank"} href={"mailto:hassohail01@gmail.com"}>                                    <button
                                        className="text-blue text-lg font-medium lg:me-9 py-5 px-16 transition duration-150 ease-in-out leafbutton bg-[#ffb900] hover:text-white hover:bg-[#184a79]">
                                        Hire Me
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className='flex items-center justify-between pt-10 lg:pt-4'>
                            <Link target={"_blank"} href={"https://www.fiverr.com/s/Q7bXwq6"}>
                                <div className='flex gap-2 justify-center items-center'>
                                    <Image src="/assets/banner/fiverr.svg" alt="check-image" width={30} height={30}
                                           className='smallImage'/>
                                    <p className='text-sm sm:text-lg font-normal text-black'>Fiverr</p>
                                </div>
                            </Link>
                            <Link target={"_blank"} href={"https://github.com/hassohail"}>
                                <div className='flex gap-2 justify-center items-center'>
                                    <Image src="/assets/banner/github.svg" alt="check-image" width={30} height={30}
                                           className='smallImage'/>
                                    <p className='text-sm sm:text-lg font-normal text-black'>Github</p>
                                </div>
                            </Link>
                            <Link target={"_blank"} href={"https://www.linkedin.com/in/muhammad-hassan-603a35226/"}>
                            <div className='flex gap-2 justify-center items-center cursor-pointer'>
                                <Image src="/assets/banner/linkind.svg" alt="check-image" width={30} height={30}
                                       className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Linkedin</p>
                            </div>  
                            </Link>
                            {/* <Link target={"_blank"} href={"https://www.facebook.com/profile.php?id=100081518093414"}>
                                <div className='flex gap-2 justify-center items-center'>
                                    <Image src="/assets/banner/facebook.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                    <p className='text-sm sm:text-lg font-normal text-black'>Facebook</p>
                                </div>
                            </Link> */}

                        </div>
                    </div>

                    <div className='col-span-6 flex justify-center'>
                    <Image src="https://res.cloudinary.com/ddxbqolus/image/upload/v1727102738/hassan_j3giau.png" alt="nothing" loading="lazy" width="500" height="805"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
