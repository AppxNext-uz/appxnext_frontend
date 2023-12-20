import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Wrapper from "../../layout/wrapper";

const Footer = () => {
	return (
		<div className="mt-[50px] lg:mt-[150px] py-[50px]">
			<Wrapper>
				<div className="grid grid-cols-4 gap-[15px] w-full max-md:grid-cols-3 max-md:gap-y-[50px] max-[560px]:grid-cols-2 max-[400px]:grid-cols-1">
					<img
						src={logo}
						alt="logo"
						className="h-[60px] w-[280px] object-cover"
					/>
					<div>
						<p className="text-lg text-white">Aloqaga chiqing</p>
						<div className="mt-[8px] flex flex-col gap-1">
							{/* <p>4517 Washington Ave. <br /> Manchester, Kentucky 39495</p>
                            <p>michael.mitc@example.com</p>
                            <p>(603) 555-0123</p> */}
							<a
								className="hover:underline"
								target="_blank"
								href="https://t.me/AppxNextbot"
								rel="noreferrer"
							>
								t.me/AppxNextbot
							</a>
						</div>
					</div>
					<div>
						<p className="text-lg text-white">Linklar</p>
						<div className="mt-[8px] flex items-start flex-col gap-1">
							<Link to="/" className="hover:underline">
								Bosh sahifa
							</Link>
							<Link to="/portfolio" className="hover:underline">
								Portfolio
							</Link>
							<Link to="/xizmatlar" className="hover:underline">
								Xizmatlar
							</Link>
							<Link to="/about" className="hover:underline">
								Biz haqimizda
							</Link>
						</div>
					</div>
					<div>
						<p className="text-lg text-white">Bizga qo'shiling</p>
						<div className="mt-[8px] flex items-center gap-2">
							<a target="_blank" href="https://t.me/appxnext" rel="noreferrer">
								<img
									className="w-[28px]"
									src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/telegram-white-icon.png"
									alt="telegram"
								/>
							</a>
						</div>
					</div>
				</div>
			</Wrapper>
		</div>
	);
};

export default Footer;
