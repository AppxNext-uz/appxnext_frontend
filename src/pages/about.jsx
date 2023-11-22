import Wrapper from "../layout/wrapper"
import logo from "../assets/logo.png"

const About = () => {

    return (
        <div>
            <div className="w-full min-h-[550px]">
                <Wrapper>
                    <div className="w-full">
                        <div className="mt-[50px]">
                            <h1 className="text-white font-[800] text-[32px]">AppxNext HAQIDA</h1>
                        </div>
                        <div className="mt-[30px] flex justify-center">
                            <img src={logo} alt="logo" className="w-[360px]" />
                        </div>
                        <div className="mt-[35px]">
                            <h1 className="my-3 text-[32px] text-white font-bold">Biz haqimizda</h1>
                            <p className="text-lg max-w-4xl">
                                Biz mijozlarimizga innovatsiyalar va zamonaviy texnologiyalardan voz kechmagan holda yuqori sifatli, ishonchli va foydalanuvchilarga qulay dasturiy yechimlarni taklif qilamiz. “SOFT IT” kompaniyasi foydalanuvchilarga fotosuratlar, videolar va musiqalarni oqilona tahrirlash, tartibga solish, zaxiralash yoki almashish imkonini beruvchi dasturiy ilovalar va platformalarni ishlab chiqadi. Bizning kompaniya Raqamlashtirish sohasida 20 dan ortiq muvafaqqiyatli loyihalarni amalga oshirish bilan birga, ularni texnik qo‘llab-quvvatlash va sifatli dasturiy ta’minotini amalga oshirish bilan shug’ullanadi. Kompaniyamizda 20 ga yaqin yuqori malakali loyiha menedjerlari, full stack dasturchilar, testlovchilar, UI/UX hamda grafik dizaynerlar faoliyat yuritadi.  
                            </p>
                        </div>
                        <div className="mt-[75px]">
                            <h1 className="my-3 text-[32px] text-white font-bold">Biz foydalanamiz</h1>
                            <div className="mt-[35px]">
                                <div className="flex items-center gap-[50px]">
                                    <div className="flex flex-col items-center">
                                        <img className="h-[75px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" alt="react" />
                                        <h1 className="mt-2 text-[28px] text-white font-bold">React</h1>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <img className="h-[75px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="nodejs" />
                                        <h1 className="mt-2 text-[28px] text-white font-bold">NodeJS</h1>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <img className="h-[75px]" src="https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png" alt="flutter" />
                                        <h1 className="mt-2 text-[28px] text-white font-bold">Flutter</h1>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <img className="h-[75px]" src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="js" />
                                        <h1 className="mt-2 text-[28px] text-white font-bold">JavaScript</h1>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <img className="h-[75px]" src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt="mongoDB" />
                                        <h1 className="mt-2 text-[28px] text-white font-bold">MongoDB</h1>
                                    </div>
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