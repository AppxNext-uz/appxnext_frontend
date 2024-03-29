import Wrapper from "../layout/wrapper";
import logo from "../assets/logo.png";
import mobileDevelopment from "../assets/mobile-development.png";
import webSite from "../assets/world-wide-web.png";
import bot from "../assets/bot.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";

import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Main = () => {
	return (
		<Wrapper>
			<div>
				<div className="mt-[100px] max-[400px]:mt-[60px]">
					<h1 className="font-[700] text-6xl lg:text-7xl text-white max-[700px]:text-[40px] max-[400px]:text-[32px]">
						Biz siz uchun{" "}
						<i className="fa-solid rotate-45 ml-5 fa-star text-transparent font-extrabold bg-clip-text bg-gradient-to-r text-[50px] from-[#A599FC] to-[#5E46FF] max-[700px]:text-[35px] max-[700px]:ml-[3px] max-[400px]:text-[25px]"></i>
					</h1>
					<h1 className="font-[700] text-6xl lg:text-7xl text-white mt-[20px] max-[700px]:text-[40px] max-[700px]:mt-[5px] max-[400px]:text-[32px]">
						<span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-[#A599FC] to-[#5E46FF]">
							zamonaviy{" "}
						</span>
						web saytlar
					</h1>
					<h1 className="font-[700] text-6xl lg:text-7xl text-white mt-[20px] max-[700px]:text-[40px] max-[700px]:mt-[5px] max-[400px]:text-[32px]">
						ishlab chiqamiz
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A599FC] to-[#5E46FF]">
							.
						</span>
					</h1>
				</div>
				<p className="text-[#BBBBC5] text-[18px] lg:text-[22px] max-w-[760px] mt-[40px] max-[400px]:text-[16px]">
					Zamonaviy, ajoyib, chiroyli web saytlarni va mobil qurilmalarning
					kuchini o'zingizning loyihangizda kashf eting!
				</p>
				<div className="mt-[50px] flex justify-start flex-col lg:flex-row items-start gap-[45px]">
					<div>
						<Link
							to={"/portfolio"}
							className="btn btn-ghost border-[#5D45FD] hover:bg-[#4d42c5] btn-primary max-[360px]:text-[12px]"
						>
							Loyihalarimizni ko'ring{" "}
							<i className="fa-solid fa-chevron-right"></i>
						</Link>
					</div>
					<div className="flex items-center">
						<div className="avatar-group -space-x-4">
							<div className="avatar">
								<div className="w-12 max-[360px]:w-9">
									<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg/640px-TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg" />
								</div>
							</div>
							<div className="avatar">
								<div className="w-12 max-[360px]:w-9">
									<img src="https://proprofi.online/upload/003/u315/f/1/f1bc3c3d.jpg" />
								</div>
							</div>
							<div className="avatar">
								<div className="w-12 max-[360px]:w-9">
									<img src="https://i.ytimg.com/vi/Zy0gxAqm46M/maxresdefault.jpg" />
								</div>
							</div>
						</div>
						<div className="ml-4 max-[360px]:ml-2">
							<p className="-mb-1 text-gray text-xl max-[360px]:text-[14px]">
								10+
							</p>
							<p className="text-gray text-lg uppercase max-[360px]:text-[14px]">
								Buyurtmachilar
							</p>
						</div>
					</div>
				</div>
				<div className="mt-[100px]">
					<p className="text-center font-[700] text-xl text-white uppercase mb-4 max-md:text-[18px]">
						10+ Biznes loyihalar bizga ishongan
					</p>
					<div className="grid grid-cols-5 gap-[15px] max-[1000px]:grid-cols-4 max-[800px]:grid-cols-3 max-[600px]:grid-cols-2 max-[376px]:grid-cols-1">
						<a href="/" className="shadow-2xl">
							<div className="hover:scale-105 transition-all cursor-pointer border-2 rounded-xl border-[#282631] py-[8px] px-[20px] w-fit">
								<img
									src={"https://res.cloudinary.com/file-upload/image/upload/v1704764858/image_g4dv8l.png"}
									alt="logo"
									className="h-[105px] w-[200px] py-[25] object-cover"
								/>
							</div>
						</a>
						<a href="/" className="shadow-2xl">
							<div className="hover:scale-105 transition-all cursor-pointer border-2 rounded-xl border-[#282631] py-[8px] px-[20px] w-fit max-[600px]:w-full">
								<img
									src={logo}
									alt="logo"
									className="h-[105px] w-[200px] object-cover max-[600px]:w-full"
								/>
							</div>
						</a>
						<a href="/" className="shadow-2xl">
							<div className="hover:scale-105 transition-all cursor-pointer border-2 rounded-xl border-[#282631] py-[8px] px-[20px] w-fit max-[600px]:w-full">
								<img
									src={logo}
									alt="logo"
									className="h-[105px] w-[200px] object-cover max-[600px]:w-full"
								/>
							</div>
						</a>
						<a href="/" className="shadow-2xl">
							<div className="hover:scale-105 transition-all cursor-pointer border-2 rounded-xl border-[#282631] py-[8px] px-[20px] w-fit max-[600px]:w-full">
								<img
									src={logo}
									alt="logo"
									className="h-[105px] w-[200px] object-cover max-[600px]:w-full"
								/>
							</div>
						</a>
						<a href="/" className="shadow-2xl">
							<div className="hover:scale-105 transition-all cursor-pointer border-2 rounded-xl border-[#282631] py-[8px] px-[20px] w-fit max-[600px]:w-full">
								<img
									src={logo}
									alt="logo"
									className="h-[105px] w-[200px] object-cover max-[600px]:w-full"
								/>
							</div>
						</a>
					</div>
				</div>
			</div>
			<div className="mt-[100px]">
				<div>
					<p className="tracking-widest text-[#998DE2]">XIZMATLAR</p>
					<h2 className="text-4xl text-white font-[700] mt-[10px] max-[450px]:text-[30px] max-[360px]:text-[24px]">
						BIZDAN SIZGA{" "}
						<i className="fa-solid rotate-45 ml-5 fa-star text-transparent font-extrabold bg-clip-text bg-gradient-to-r text-[28px] from-[#A599FC] to-[#5E46FF] max-[450px]:ml-1 max-[450px]:text-[22px]"></i>
					</h2>
					<p className="text-[18px] mt-[8px] max-w-2xl max-[450px]:text-[16px] max-[450px]:mt-[2px]">
						Biz sizga nimalarni taklif qilishimiz mumkin.
					</p>
				</div>
				<div className="mt-[50px] grid grid-cols-3 gap-[15px] max-[800px]:grid-cols-2 max-[520px]:grid-cols-1">
					<div className="border-2 shadow-2xl border-[#4A494E] hover:-translate-y-1 transition-all rounded-2xl py-[35px] px-[20px] w-full max-[1000px]:py-[20px]">
						<img
							src={mobileDevelopment}
							alt="logo"
							className="h-[100px] w-[100px] rounded-xl object-cover py-[10px] px-[10px] bg-[#34333B] max-[376px]:w-[80px] max-[376px]:h-[80px]"
						/>
						<h1 className="text-xl text-white font-[700] mt-[20px]">
							Mobil ilovalar
						</h1>
						<p className="max-w-[370px] text-[18px] mt-[10px] max-[900px]:text-[16px]">
							Zamonaviy, qulay, chiroyli qisqa qilib aytganda siz xohlagandek
							mobil ilovalar va juda tez fursatlarda.
						</p>
						<div className="mt-[20px] border-2 border-[#4A494E] hover:text-black cursor-pointer rounded-lg hover:bg-white hover:border-0 transition-all flex justify-center items-center h-[60px] w-[60px] max-[1000px]:w-[45px] max-[1000px]:h-[45px]">
							<i className="fa-solid text-lg fa-chevron-right"></i>
						</div>
					</div>
					<div className="border-2 shadow-2xl border-[#4A494E] hover:-translate-y-1 transition-all rounded-2xl py-[35px] px-[20px] w-full max-[1000px]:py-[20px]">
						<img
							src={webSite}
							alt="logo"
							className="h-[100px] w-[100px] rounded-xl object-cover py-[10px] px-[10px] bg-[#34333B] max-[376px]:w-[80px] max-[376px]:h-[80px]"
						/>
						<h1 className="text-xl text-white font-[700] mt-[20px]">
							Web saytlar
						</h1>
						<p className="max-w-[370px] text-[18px] mt-[10px] max-[900px]:text-[16px]">
							So'nggi texnologiyalardan foydalangan holda, xohlagan
							qiyinchilikdagi sizga kerakli web saytlarni siz xohlagandek qilib beramiz.
						</p>
						<div className="mt-[20px] border-2 border-[#4A494E] hover:text-black cursor-pointer rounded-lg hover:bg-white hover:border-0 transition-all flex justify-center items-center h-[60px] w-[60px] max-[1000px]:w-[45px] max-[1000px]:h-[45px]">
							<i className="fa-solid text-lg fa-chevron-right"></i>
						</div>
					</div>
					<div className="border-2 shadow-2xl border-[#4A494E] hover:-translate-y-1 transition-all rounded-2xl py-[35px] px-[20px] w-full max-[1000px]:py-[20px]">
						<img
							src={bot}
							alt="logo"
							className="h-[100px] w-[100px] rounded-xl object-cover py-[10px] px-[10px] bg-[#34333B] max-[376px]:w-[80px] max-[376px]:h-[80px]"
						/>
						<h1 className="text-xl text-white font-[700] mt-[20px]">
							Telegram botlar
						</h1>
						<p className="max-w-[370px] text-[18px] mt-[10px] max-[900px]:text-[16px]">
							Sizning biznesingizni targ'ib qilish uchun biz qidiruv tizimlari
							bilan ishlaymiz, shunda saytingiz yuqori o'rinlarda bo'ladi.
						</p>
						<div className="mt-[20px] border-2 border-[#4A494E] hover:text-black cursor-pointer rounded-lg hover:bg-white hover:border-0 transition-all flex justify-center items-center h-[60px] w-[60px] max-[1000px]:w-[45px] max-[1000px]:h-[45px]">
							<i className="fa-solid text-lg fa-chevron-right"></i>
						</div>
					</div>
				</div>

				<div className="mt-[100px]">
					<div>
						<p className="tracking-widest text-[#998DE2]">PORTFOLIO</p>
						<h2 className="text-4xl text-white font-[700] mt-[10px] max-[650px]:text-[32px] max-[560px]:text-[26px] max-[465px]:text-[24px]">
							BIZNING SO'NGGI ISHLARIMIZ{" "}
							<i className="fa-solid rotate-45 ml-5 fa-star text-transparent font-extrabold bg-clip-text bg-gradient-to-r text-[28px] from-[#A599FC] to-[#5E46FF] max-[650px]:ml-2 max-[560px]:ml-0 max-[465px]:text-[22px]"></i>
						</h2>
						<p className="text-[18px] mt-[8px] max-w-2xl max-[450px]:text-[16px] max-[450px]:mt-[2px]">
							Biz qilgan so'nggi ishlarni ko'rishingiz mumkin.
						</p>
					</div>
					<div className="mt-[50px] grid grid-cols-3 gap-3 w-full max-sm:grid-cols-2 max-[390px]:grid-cols-1">
						<a className="shadow-2xl" href="/">
							<div
								data-tip="TechYes"
								className="tooltip hover:-translate-y-1 transition-all rounded-2xl cursor-pointer w-full"
							>
								<img
									src={"https://kncoder.vercel.app/assets/techyes-9c695dc2.png"}
									alt="logo"
									className="h-[400px] w-full rounded-2xl object-cover max-lg:h-[300px] max-md:h-[220px]"
								/>
							</div>
						</a>
						<a className="shadow-2xl" href="/">
							<div
								data-tip="Movigo"
								className="tooltip hover:-translate-y-1 transition-all rounded-2xl cursor-pointer w-full"
							>
								<img
									src={"https://kncoder.vercel.app/assets/movigo-52fc2fd2.png"}
									alt="logo"
									className="h-[400px] w-full rounded-2xl object-cover max-lg:h-[300px] max-md:h-[220px]"
								/>
							</div>
						</a>
						<a
							className="shadow-2xl"
							href="https://play.google.com/store/apps/details?id=uz.dasturchimobile.arashov_trading"
						>
							<div
								data-tip="Arashov App"
								className="tooltip hover:-translate-y-1 transition-all rounded-2xl cursor-pointer w-full"
							>
								<img
									src={"https://i.ibb.co/NtPtLtN/Untitled-design.png"}
									alt="logo"
									className="h-[400px] w-full rounded-2xl object-cover max-lg:h-[300px] max-md:h-[220px]"
								/>
							</div>
						</a>
						<a className="shadow-2xl" href="/">
							<div
								data-tip="ForceExchange"
								className="tooltip hover:-translate-y-1 transition-all rounded-2xl cursor-pointer w-full"
							>
								<img
									src={
										"https://kncoder.vercel.app/assets/forceexchange-35ed1d68.png"
									}
									alt="logo"
									className="h-[400px] w-full rounded-2xl object-cover max-lg:h-[300px] max-md:h-[220px]"
								/>
							</div>
						</a>
						<a className="shadow-2xl" href="/">
							<div
								data-tip="Promgarelka"
								className="tooltip hover:-translate-y-1 transition-all rounded-2xl cursor-pointer w-full"
							>
								<img
									src={
										"https://kncoder.vercel.app/assets/promgarelka-a09a4cd0.png"
									}
									alt="logo"
									className="h-[400px] w-full rounded-2xl object-cover max-lg:h-[300px] max-md:h-[220px]"
								/>
							</div>
						</a>
						<a className="shadow-2xl" href="/">
							<div
								data-tip="Avalon"
								className="tooltip hover:-translate-y-1 transition-all rounded-2xl cursor-pointer w-full"
							>
								<img
									src={"https://kncoder.vercel.app/assets/avolon-e69f0f8b.png"}
									alt="logo"
									className="h-[400px] w-full rounded-2xl object-cover max-lg:h-[300px] max-md:h-[220px]"
								/>
							</div>
						</a>
					</div>
					<div className="mt-[35px]">
						<Link
							to="/portfolio"
							className="btn btn-ghost border-[#5D45FD] hover:bg-[#4d42c5] btn-primary"
						>
							Barchasi <i className="fa-solid fa-chevron-right"></i>
						</Link>
					</div>
				</div>

				{/* Pricing */}

				<div className="mt-[100px]">
                            <div>
                                <p className="tracking-widest text-[#998DE2]">NARXLAR</p>
                                <h2 className="text-4xl text-white font-[700] mt-[10px]">One fixed price to get <br /> your project done <i className="fa-solid rotate-45 ml-5 fa-star text-transparent font-extrabold bg-clip-text bg-gradient-to-r text-[28px] from-[#A599FC] to-[#5E46FF]"></i></h2>
                                <p className="text-[18px] mt-[8px] max-w-2xl">Your custom on-demand team for only a single payment</p>
                            </div>
                            <div className="mt-[50px] flex justify-between items-center flex-wrap">
                                <div className="border-2 shadow-2xl border-[#4A494E] hover:-translate-y-1 transition-all rounded-2xl py-[35px] px-[20px] w-full max-[1000px]:py-[20px]">
                                    <p className="text-2xl">Basic</p>
                                    <h1 className="text-4xl text-white font-[700] mt-[12px]">$200</h1>
                                    <p className="max-w-[370px] text-[18px] mt-[10px] max-[900px]:text-[16px]">Fully responsive 1 page website developed in Webflow. Unlimited Sections.</p>
                                    
                                    <div className="mt-[25px] ml-1 flex flex-col items-start gap-2">
                                        <p className="text-[#B7B5C0] flex items-center gap-1"><i className="fa-solid fa-circle-check bg-clip-text text-transparent text-[20px] bg-gradient-to-r from-[#A599FC] to-[#5E46FF] mr-1"></i> Functional website</p>
                                        <p className="text-[#B7B5C0] flex items-center gap-1"><i className="fa-solid fa-circle-check bg-clip-text text-transparent text-[20px] bg-gradient-to-r from-[#A599FC] to-[#5E46FF] mr-1"></i> Functional website</p>
                                        <p className="text-[#B7B5C0] flex items-center gap-1"><i className="fa-solid fa-circle-check bg-clip-text text-transparent text-[20px] bg-gradient-to-r from-[#A599FC] to-[#5E46FF] mr-1"></i> Functional website</p>
                                        <p className="text-[#B7B5C0] flex items-center gap-1"><i className="fa-solid fa-xmark ml-[4px] bg-clip-text text-transparent text-[20px] bg-gradient-to-r from-[#A599FC] to-[#5E46FF] mr-[7px]"></i> Functional website</p>
                                    </div>

                                    <button className="btn w-full mt-[35px] btn-ghost border-[#5D45FD] hover:bg-[#4d42c5] btn-primary">View work <i className="fa-solid fa-chevron-right"></i></button>
                                </div>
                                <div className="border-2 shadow-2xl border-[#4A494E] hover:-translate-y-1 transition-all rounded-2xl py-[35px] px-[20px] w-full max-[1000px]:py-[20px]">
                                    <p className="text-2xl">Standart</p>
                                    <h1 className="text-4xl text-white font-[700] mt-[12px]">$400</h1>
                                    <p className="max-w-[370px] text-[18px] mt-[10px] max-[900px]:text-[16px]">Fully responsive 3 page website developed in Webflow. Unlimited Sections.</p>
                                    
                                    <div className="mt-[25px] ml-1 flex flex-col items-start gap-2">
                                        <p className="text-[#B7B5C0] flex items-center gap-1"><i className="fa-solid fa-circle-check bg-clip-text text-transparent text-[20px] bg-gradient-to-r from-[#A599FC] to-[#5E46FF] mr-1"></i> Functional website</p>
                                        <p className="text-[#B7B5C0] flex items-center gap-1"><i className="fa-solid fa-circle-check bg-clip-text text-transparent text-[20px] bg-gradient-to-r from-[#A599FC] to-[#5E46FF] mr-1"></i> Functional website</p>
                                        <p className="text-[#B7B5C0] flex items-center gap-1"><i className="fa-solid fa-circle-check bg-clip-text text-transparent text-[20px] bg-gradient-to-r from-[#A599FC] to-[#5E46FF] mr-1"></i> Functional website</p>
                                        <p className="text-[#B7B5C0] flex items-center gap-1"><i className="fa-solid fa-circle-check bg-clip-text text-transparent text-[20px] bg-gradient-to-r from-[#A599FC] to-[#5E46FF] mr-1"></i> Functional website</p>
                                    </div>

                                    <button className="btn w-full mt-[35px] btn-ghost border-[#5D45FD] hover:bg-[#4d42c5] btn-primary">View work <i className="fa-solid fa-chevron-right"></i></button>
                                </div>
                                <div className="border-2 shadow-2xl border-[#4A494E] hover:-translate-y-1 transition-all rounded-2xl py-[35px] px-[20px] w-full max-[1000px]:py-[20px]">
                                    <p className="text-2xl">Premium</p>
                                    <h1 className="text-4xl text-white font-[700] mt-[12px]">$800</h1>
                                    <p className="max-w-[370px] text-[18px] mt-[10px] max-[900px]:text-[16px]">Fully responsive 10 page website developed in Webflow. Unlimited Sections.</p>
                                    
                                    <div className="mt-[25px] ml-1 flex flex-col items-start gap-2">
                                        <p className="text-[#B7B5C0] flex items-center gap-1"><i className="fa-solid fa-circle-check bg-clip-text text-transparent text-[20px] bg-gradient-to-r from-[#A599FC] to-[#5E46FF] mr-1"></i> Functional website</p>
                                        <p className="text-[#B7B5C0] flex items-center gap-1"><i className="fa-solid fa-circle-check bg-clip-text text-transparent text-[20px] bg-gradient-to-r from-[#A599FC] to-[#5E46FF] mr-1"></i> Functional website</p>
                                        <p className="text-[#B7B5C0] flex items-center gap-1"><i className="fa-solid fa-circle-check bg-clip-text text-transparent text-[20px] bg-gradient-to-r from-[#A599FC] to-[#5E46FF] mr-1"></i> Functional website</p>
                                        <p className="text-[#B7B5C0] flex items-center gap-1"><i className="fa-solid fa-circle-check bg-clip-text text-transparent text-[20px] bg-gradient-to-r from-[#A599FC] to-[#5E46FF] mr-1"></i> Functional website</p>
                                    </div>

                                    <button className="btn w-full mt-[35px] btn-ghost border-[#5D45FD] hover:bg-[#4d42c5] btn-primary">View work <i className="fa-solid fa-chevron-right"></i></button>
                                </div>
                            </div>
                        </div>
			</div>
		</Wrapper>
	);
};

export default Main;
