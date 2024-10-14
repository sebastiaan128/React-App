import React from 'react';

const Header = () => {
    return (
        <div className="relative">
            <img src="./IMG/hero.png" className="w-screen h-[600px] object-fill" alt="Hero" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-[20px] ">
                <h1 className="text-4xl font-bold">Michel</h1>
                <p className="mt-4 max-w-lg">
                    Michel is een fantastische ICT-coach die altijd klaarstaat om te helpen en te inspireren. Zijn geduld en
                    deskundigheid maken complexe onderwerpen toegankelijk en begrijpelijk voor iedereen.
                </p>
            </div>
            <div className="flex justify-center gap-6 -mt-20 relative flex-wrap md:flex mx-[20px]">
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow text-center w-full">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Lorem Ipsum</h5>
                    <p className="mb-3 font-normal text-gray-700">Dolor sit amet</p>
                    <a href="#"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#3842FB] rounded-lg hover:bg-[#3842FB] focus:ring-4 focus:outline-none focus:ring-[3842FB] w-full justify-center">
                        View more
                    </a>
                </div>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow text-center w-full">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Lorem Ipsum</h5>
                    <p className="mb-3 font-normal text-gray-700">Dolor sit amet</p>
                    <a href="#"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#2090FF] rounded-lg hover:bg-[#2090FF] focus:ring-4 focus:outline-none focus:ring-[2090FF] w-full justify-center">
                        Get started
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
