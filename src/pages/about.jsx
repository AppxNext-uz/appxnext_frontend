import Wrapper from "../layout/wrapper"
import logo from "../assets/logo.png"

const About = () => {

    return (
        <div>
            <div className="w-full min-h-[550px]">
                <Wrapper>
                    <div className="w-full">
                        <div className="mt-[30px] flex justify-center">
                            <img src={logo} alt="logo" className="h-[150px] object-cover w-[450px]" />
                        </div>
                        <div className="mt-[35px]">
                            <h1 className="my-3 text-[32px] text-white font-bold">Biz haqimizda</h1>
                            <p className="text-lg max-w-4xl">
                                Biz mijozlarimizga innovatsiyalar va zamonaviy texnologiyalardan voz kechmagan holda yuqori sifatli, ishonchli va foydalanuvchilarga qulay dasturiy yechimlarni taklif qilamiz. “SOFT IT” kompaniyasi foydalanuvchilarga fotosuratlar, videolar va musiqalarni oqilona tahrirlash, tartibga solish, zaxiralash yoki almashish imkonini beruvchi dasturiy ilovalar va platformalarni ishlab chiqadi. Bizning kompaniya Raqamlashtirish sohasida 20 dan ortiq muvafaqqiyatli loyihalarni amalga oshirish bilan birga, ularni texnik qo‘llab-quvvatlash va sifatli dasturiy ta’minotini amalga oshirish bilan shug’ullanadi. Kompaniyamizda 20 ga yaqin yuqori malakali loyiha menedjerlari, full stack dasturchilar, testlovchilar, UI/UX hamda grafik dizaynerlar faoliyat yuritadi.  
                            </p>
                        </div>
                        <div className="mt-[35px]">
                            <h1 className="my-3 text-[32px] text-white font-bold">Bizning jamoa</h1>
                            <div className="mt-[50px] flex justify-between flex-wrap">
                                <div className="flex items-center flex-col">
                                    <img className="w-[320px] rounded-full" src="https://cdn-edge.kwork.ru/files/avatar/medium/50/15757603-3.jpg" alt="img" />
                                    <h1 className="mt-2 text-[26px] text-white font-bold">Khatamov Nuriddin</h1>
                                    <p className="text-[20px]">Front-end</p>
                                </div>
                                <div className="flex items-center flex-col">
                                    <img className="w-[320px] rounded-full" src="https://i.ibb.co/XxLKW4D/Background-Silver.png" alt="img" />
                                    <h1 className="mt-2 text-[26px] text-white font-bold">Kamalov Farrukh</h1>
                                    <p className="text-[20px]">CEO, Backend developer</p>
                                </div>
                                <div className="flex items-center flex-col">
                                    <img className="w-[320px] rounded-full" src="https://cdn-edge.kwork.ru/files/avatar/medium/50/15757603-3.jpg" alt="img" />
                                    <h1 className="mt-2 text-[26px] text-white font-bold">Khatamov Nuriddin</h1>
                                    <p className="text-[20px]">Front-end</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </div>
    )
}

export default About
