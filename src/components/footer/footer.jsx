import logo from "../../assets/logo.png"
import Wrapper from "../../layout/wrapper"

const Footer = () => {
    return (
        <div className="mt-[50px] lg:mt-[150px] py-[35px]">
            <Wrapper>
                <div className="flex items-start justify-between flex-col lg:flex-row gap-[15px] lg:gap-0">
                    <img src={logo} alt="logo" className="h-[115px] w-[380px] object-cover" />
                    <div>
                        <p className="text-lg text-white">Aloqaga chiqing</p>
                        <div className="mt-[8px] flex flex-col gap-1">
                            <p>4517 Washington Ave. <br /> Manchester, Kentucky 39495</p>
                            <p>michael.mitc@example.com</p>
                            <p>(603) 555-0123</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-lg text-white">Linklar</p>
                        <div className="mt-[8px] flex flex-col gap-1">
                            <a href="/" className="hover:underline">Baholar</a>
                            <a href="/" className="hover:underline">Narxlar</a>
                            <a href="/" className="hover:underline">Nega biz?</a>
                        </div>
                    </div>
                    <div>
                        <p className="text-lg text-white">Bizga qo'shiling</p>
                        <div className="mt-[8px] flex items-center gap-2">
                            <a href="/">
                                <img className="w-[28px]" src="https://www.edigitalagency.com.au/wp-content/uploads/facebook-icon-white-png.png" alt="f" />
                            </a>
                            <a href="/">
                                <img className="w-[28px]" src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-white-twitter-icon-png-png-image_3562062.png" alt="t" />
                            </a>
                            <a href="/">
                                <img className="w-[28px]" src="https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-a7sf08js.png" alt="l" />
                            </a>
                            <a href="/">
                                <img className="w-[28px]" src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph.png" alt="i" />
                            </a>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Footer
