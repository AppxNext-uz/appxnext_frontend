import Wrapper from "../layout/wrapper";
import logo from "../assets/logo.png";
import green from "../assets/green.png";
import gray from "../assets/gray.png";

const About = () => {
	return (
		<div>
			<div className="w-full min-h-[550px]">
				<Wrapper>
					<div className="w-full">
						<div className="mt-[30px] flex justify-center">
							<img
								src={logo}
								alt="logo"
								className="h-[150px] object-cover w-[450px]"
							/>
						</div>
						<div className="mt-[35px]">
							<h1 className="my-3 text-[32px] text-white font-bold max-[400px]:text-[28px]">
								Biz haqimizda
							</h1>
							<p className="text-lg max-w-4xl max-[500px]:text-[16px] max-[500px]:leading-[150%]">
								Biz mijozlarimizga innovatsiyalar va zamonaviy texnologiyalardan
								voz kechmagan holda yuqori sifatli, ishonchli va
								foydalanuvchilarga qulay dasturiy yechimlarni taklif qilamiz.
								“APPXNEXT IT GROUP” kompaniyasi foydalanuvchilarga fotosuratlar, videolar
								va musiqalarni oqilona tahrirlash, tartibga solish, zaxiralash
								yoki almashish imkonini beruvchi dasturiy ilovalar va
								platformalarni ishlab chiqadi. Bizning kompaniya Raqamlashtirish
								sohasida 20 dan ortiq muvafaqqiyatli loyihalarni amalga oshirish
								bilan birga, ularni texnik qo‘llab-quvvatlash va sifatli
								dasturiy ta’minotini amalga oshirish bilan shug’ullanadi.
								Kompaniyamizda 20 ga yaqin yuqori malakali loyiha menedjerlari,
								full stack dasturchilar, testlovchilar, UI/UX hamda grafik
								dizaynerlar faoliyat yuritadi.
							</p>
						</div>
						<div className="mt-[35px]">
							<h1 className="my-3 text-[32px] text-white font-bold max-[400px]:text-[28px]">
								Bizning jamoa
							</h1>
							<div className="mt-[50px] grid grid-cols-3 gap-5 max-[820px]:grid-cols-2 max-[820px]:gap-y-[60px] max-[530px]:grid-cols-1">
								<div className="flex items-center flex-col">
									<img
										className="w-[320px] rounded-full"
										src={green}
										alt="img"
									/>
									<h1 className="mt-8 text-[26px] text-white font-bold max-[900px]:text-[24px]">
										Khatamov Nuriddin
									</h1>
									<p className="text-[20px] max-[900px]:text-[18px]">Frontend Developer</p>
								</div>
								<div className="flex items-center flex-col">
									<img
										className="w-[320px] rounded-full"
										src="https://i.ibb.co/XxLKW4D/Background-Silver.png"
										alt="img"
									/>
									<h1 className="mt-8 text-[26px] text-white font-bold max-[900px]:text-[24px]">
										Kamalov Farrukh
									</h1>
									<p className="text-[20px] max-[900px]:text-[18px]">CEO, Backend Developer</p>
								</div>
								<div className="flex items-center flex-col">
									<img
										className="w-[320px] rounded-full"
										src={gray}
										alt="img"
									/>
									<h1 className="mt-8 text-[26px] text-white font-bold max-[900px]:text-[24px]">
										Asqaraliyev Azizbek
									</h1>
									<p className="text-[20px] max-[900px]:text-[18px]">Mobile Developer</p>
								</div>
							</div>
						</div>
					</div>
				</Wrapper>
			</div>
		</div>
	);
};

export default About;
