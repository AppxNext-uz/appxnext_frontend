import Wrapper from "../layout/wrapper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";

import { Pagination } from "swiper/modules";
import { useState } from "react";

const Portfolio = () => {
	const [isActive, setActive] = useState(true);

	return (
		<div>
			<div className="w-full">
				<Wrapper>
					<div className="w-full">
						<div className="mt-[50px]">
							<h1 className="text-white font-[800] text-[32px] max-[410px]:text-[28px]">
								PORTFOLIO
							</h1>
						</div>
						<div className="mt-[30px]">
							<div role="tablist" className="tabs tabs-boxed bg-transparent">
								<a
									role="tab"
									onClick={() => setActive(true)}
									className={`${isActive && "tab-active"} tab`}
								>
									Mobil ilovalar
								</a>
								<a
									role="tab"
									onClick={() => setActive(false)}
									className={`${!isActive && "tab-active"} tab`}
								>
									Web saytlar
								</a>
							</div>
						</div>
						<div className="mt-[25px]">
							{isActive && (
								<div className="flex gap-[20px] max-[815px]:flex-col">
									<a
										href="https://play.google.com/store/apps/details?id=uz.dasturchimobile.arashov_trading"
										className="max-[815px]:w-full"
									>
										<div className="relative">
											<img
												className="w-[600px] h-[620px] opacity-60 hover:opacity-100 rounded-2xl hover:scale-[1.05] transition-all duration-500 object-cover max-[815px]:w-full max-[815px]:h-[400px] max-[430px]:h-[300px]"
												src="https://i.ibb.co/NtPtLtN/Untitled-design.png"
												alt="arashov"
											/>
											<div className="absolute left-[35px] top-[26px] max-[430px]:top=[20px] max-[430px]:left-[15px]">
												<h1 className="text-white text-[32px] font-[900] max-[430px]:text-[24px]">
													Arashov Trading
												</h1>
												<h1 className="text-[18px] font-[400] mt-[2px] max-[430px]:text-[16px]">
													O'rganish platformasi
												</h1>
											</div>
										</div>
									</a>
									<div className="flex flex-col items-start gap-[20px] max-[815px]:flex-row max-[815px]:w-full max-[430px]:flex-col">
										<a
											href="https://play.google.com/store/apps/details?id=uz.dasturchimobile.arashov_trading"
											className="max-[815px]:w-full"
										>
											<div className="relative">
												<img
													className="w-[300px] h-[300px] opacity-60 hover:opacity-100 rounded-2xl hover:scale-[1.05] transition-all duration-500 object-cover max-[815px]:w-full"
													src="https://i.ibb.co/NtPtLtN/Untitled-design.png"
													alt="arashov"
												/>
												<div className="absolute left-[15px] top-[20px]">
													<h1 className="text-white text-[24px] font-[900]">
														Arashov Trading
													</h1>
													<h1 className="font-[400] mt-[2px]">
														O'rganish platformasi
													</h1>
												</div>
											</div>
										</a>
										<a
											href="https://play.google.com/store/apps/details?id=uz.dasturchimobile.arashov_trading"
											className="max-[815px]:w-full"
										>
											<div className="relative">
												<img
													className="w-[300px] h-[300px] opacity-60 hover:opacity-100 rounded-2xl hover:scale-[1.05] transition-all duration-500 object-cover max-[815px]:w-full"
													src="https://i.ibb.co/NtPtLtN/Untitled-design.png"
													alt="arashov"
												/>
												<div className="absolute left-[15px] top-[20px]">
													<h1 className="text-white text-[24px] font-[900]">
														Arashov Trading
													</h1>
													<h1 className="font-[400] mt-[2px]">
														O'rganish platformasi
													</h1>
												</div>
											</div>
										</a>
									</div>
									<div className="flex flex-col items-start gap-[20px] max-[815px]:flex-row max-[815px]:w-full max-[430px]:flex-col">
										<a
											href="https://play.google.com/store/apps/details?id=uz.dasturchimobile.arashov_trading"
											className="max-[815px]:w-full"
										>
											<div className="relative">
												<img
													className="w-[300px] h-[300px] opacity-60 hover:opacity-100 rounded-2xl hover:scale-[1.05] transition-all duration-500 object-cover max-[815px]:w-full"
													src="https://i.ibb.co/NtPtLtN/Untitled-design.png"
													alt="arashov"
												/>
												<div className="absolute left-[15px] top-[20px]">
													<h1 className="text-white text-[24px] font-[900]">
														Arashov Trading
													</h1>
													<h1 className="font-[400] mt-[2px]">
														O'rganish platformasi
													</h1>
												</div>
											</div>
										</a>
										<a
											href="https://play.google.com/store/apps/details?id=uz.dasturchimobile.arashov_trading"
											className="max-[815px]:w-full"
										>
											<div className="relative">
												<img
													className="w-[300px] h-[300px] opacity-60 hover:opacity-100 rounded-2xl hover:scale-[1.05] transition-all duration-500 object-cover max-[815px]:w-full"
													src="https://i.ibb.co/NtPtLtN/Untitled-design.png"
													alt="arashov"
												/>
												<div className="absolute left-[15px] top-[20px]">
													<h1 className="text-white text-[24px] font-[900]">
														Arashov Trading
													</h1>
													<h1 className="font-[400] mt-[2px]">
														O'rganish platformasi
													</h1>
												</div>
											</div>
										</a>
									</div>
								</div>
							)}
							{!isActive && (
								<div className="flex gap-[20px] max-[815px]:flex-col">
									<a
										href="https://movigo.netlify.app"
										className="max-[815px]:w-full"
									>
										<div className="relative">
											<img
												className="w-[600px] h-[620px] opacity-60 hover:opacity-100 rounded-2xl hover:scale-[1.05] transition-all duration-500 object-cover max-[815px]:w-full max-[815px]:h-[400px] max-[430px]:h-[300px]"
												src="https://kncoder.vercel.app/assets/movigo-52fc2fd2.png"
												alt="arashov"
											/>
											<div className="absolute left-[35px] top-[26px] max-[430px]:top=[20px] max-[430px]:left-[15px]">
												<h1 className="text-white text-[32px] font-[900] max-[430px]:text-[24px]">
													Movigo
												</h1>
												<h1 className="text-[18px] font-[400] mt-[2px] max-[430px]:text-[16px]">
													Kino sayt
												</h1>
											</div>
										</div>
									</a>
									<div className="flex flex-col items-start gap-[20px] max-[815px]:flex-row max-[815px]:w-full max-[430px]:flex-col">
										<a
											href="https://movigo.netlify.app"
											className="max-[815px]:w-full"
										>
											<div className="relative">
												<img
													className="w-[300px] h-[300px] opacity-60 hover:opacity-100 rounded-2xl hover:scale-[1.05] transition-all duration-500 object-cover max-[815px]:w-full"
													src="https://i.ibb.co/NtPtLtN/Untitled-design.png"
													alt="arashov"
												/>
												<div className="absolute left-[15px] top-[20px]">
													<h1 className="text-white text-[24px] font-[900]">
														Arashov Trading
													</h1>
													<h1 className="font-[400] mt-[2px]">
														O'rganish platformasi
													</h1>
												</div>
											</div>
										</a>
										<a
											href="https://movigo.netlify.app"
											className="max-[815px]:w-full"
										>
											<div className="relative">
												<img
													className="w-[300px] h-[300px] opacity-60 hover:opacity-100 rounded-2xl hover:scale-[1.05] transition-all duration-500 object-cover max-[815px]:w-full"
													src="https://kncoder.vercel.app/assets/movigo-52fc2fd2.png"
													alt="arashov"
												/>
												<div className="absolute left-[15px] top-[20px]">
													<h1 className="text-white text-[24px] font-[900]">
														Movigo
													</h1>
													<h1 className="font-[400] mt-[2px]">Kino sayt</h1>
												</div>
											</div>
										</a>
									</div>
									<div className="flex flex-col items-start gap-[20px] max-[815px]:flex-row max-[815px]:w-full max-[430px]:flex-col">
										<a
											href="https://movigo.netlify.app"
											className="max-[815px]:w-full"
										>
											<div className="relative">
												<img
													className="w-[300px] h-[300px] opacity-60 hover:opacity-100 rounded-2xl hover:scale-[1.05] transition-all duration-500 object-cover max-[815px]:w-full"
													src="https://kncoder.vercel.app/assets/movigo-52fc2fd2.png"
													alt="arashov"
												/>
												<div className="absolute left-[15px] top-[20px]">
													<h1 className="text-white text-[24px] font-[900]">
														Movigo
													</h1>
													<h1 className="font-[400] mt-[2px]">Kino sayt</h1>
												</div>
											</div>
										</a>
										<a
											href="https://movigo.netlify.app"
											className="max-[815px]:w-full"
										>
											<div className="relative">
												<img
													className="w-[300px] h-[300px] opacity-60 hover:opacity-100 rounded-2xl hover:scale-[1.05] transition-all duration-500 object-cover max-[815px]:w-full"
													src="https://kncoder.vercel.app/assets/movigo-52fc2fd2.png"
													alt="arashov"
												/>
												<div className="absolute left-[15px] top-[20px]">
													<h1 className="text-white text-[24px] font-[900]">
														Movigo
													</h1>
													<h1 className="font-[400] mt-[2px]">Kino sayt</h1>
												</div>
											</div>
										</a>
									</div>
								</div>
							)}
						</div>
						<div id="fikr" className="mt-[150px]">
							<div className="mt-[20px]">
								<div>
									<p className="pt-2 tracking-widest text-[#998DE2] max-[400px]:text-[14px]">
										FIKRLAR
									</p>
									<h2 className="text-4xl text-white font-[700] mt-[10px] max-md:text-[32px] max-md:leading-[150%] max-[620px]:text-[28px] max-[400px]:text-[24px] max-[330px]:text-[22px]">
										BUYURTMACHILARIMIZ FIKRLARI{" "}
										<i className="fa-solid rotate-45 ml-5 fa-star text-transparent font-extrabold bg-clip-text bg-gradient-to-r text-[28px] from-[#A599FC] to-[#5E46FF] max-md:ml-3 max-md:text-[25px] max-[620px]:ml-0 max-[330px]:text-[22px]"></i>
									</h2>
									<p className="text-[18px] mt-[8px] max-w-2xl">
										Jamoamizga berilgan shaffof fikrlar.
									</p>
								</div>
								<div className="mt-[60px] max-[400px]:mt-[40px]">
									<Swiper
										pagination={true}
										modules={[Pagination]}
										style={{
											"--swiper-pagination-color": "#fff",
											"--swiper-pagination-bullet-inactive-color": "#858585",
											"--swiper-pagination-bullet-inactive-opacity": "1",
											"--swiper-pagination-bullet-size": "16px",
											"--swiper-pagination-bullet-horizontal-gap": "6px",
										}}
									>
										<SwiperSlide>
											<div className="w-full flex justify-center">
												<div className="border-2 shadow-2xl border-[#4A494E] transition-all duration-500 rounded-2xl py-[50px] px-[10px] lg:px-[50px] w-fit max-[500px]:py-[30px] max-[376px]:py-[15px]">
													<p className="lg:max-w-2xl lg:text-lg text-center max-[376px]:text-[15px] max-[376px]:leading-[150%]">
														Lorem ipsum dolor sit amet consectetur adipisicing
														elit. Earum voluptatem perferendis tenetur culpa rem
														labore? Explicabo nam iste soluta quos magnam,
														accusantium a incidunt quo, nesciunt officiis
														suscipit sunt! Quaerat rem dolor mollitia voluptas
														eaque soluta amet, ad, saepe reiciendis enim
														accusamus nostrum ex numquam officia est! Sequi
														laborum facere omnis quaerat autem dolore officia
														perspiciatis quasi quos eos, repudiandae
														consequuntur explicabo assumenda commodi provident
														fugit
													</p>
													<div className="mt-[35px] flex justify-center flex-col items-center">
														<div className="avatar">
															<div className="w-16 rounded-full">
																<img src="https://cdn.forbes.ru/files/c/232x232/profile/39-pavel-durov-182-05_2019.jpg__1555317023__31719.webp" />
															</div>
														</div>
														<p className="text-white font-[700] text-lg mt-[10px]">
															Pavel Durov
														</p>
														<p className="text-lg">Founder of Telegram</p>
													</div>
												</div>
											</div>
										</SwiperSlide>
									</Swiper>
								</div>
							</div>
						</div>
					</div>
				</Wrapper>
			</div>
		</div>
	);
};

export default Portfolio;
