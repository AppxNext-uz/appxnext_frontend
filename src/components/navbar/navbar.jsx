import { Link } from "react-router-dom";
import Wrapper from "../../layout/wrapper";

const NavbarLink = ({ link, children }) => {
	return (
		<div>
			<Link
				className="hover:text-[#ffffff] text-[18px] font-[700] text-[#AFAEB8]"
				to={`${link}`}
			>
				{children}
			</Link>
		</div>
	);
};

const Navbar = () => {
	return (
		<Wrapper>
			<div className="flex justify-between items-center pt-[15px] flex-col lg:flex-row gap-[10px] lg:gap-0">
				<Link to={"/"}>
					<img
						src="https://i.ibb.co/0GH7ms0/pixelcut-export-1.png"
						alt="logo"
						className="w-[280px] h-[70px] lg:h-[100px] lg:w-[280px] object-cover"
					/>
				</Link>
				<div className="hidden items-center gap-[45px] lg:flex">
					<NavbarLink link={"/"}>Bosh sahifa</NavbarLink>
					<NavbarLink link={"/portfolio"}>Portfolio</NavbarLink>
					<NavbarLink link={"/xizmatlar"}>Xizmatlar</NavbarLink>
					<NavbarLink link={"/about"}>Biz haqimizda</NavbarLink>
				</div>
				<div className="drawer lg:hidden z-50 absolute w-full top-[10px] drawer-end">
					<input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
					<div className="drawer-content absolute left-[10px] top-[10px]">
						<label
							htmlFor="my-drawer-4"
							className="drawer-button btn btn-primary bg-[#5D45FD] hover:bg-[#4d42c5]"
						>
							<i className="fa-solid fa-bars"></i>
						</label>
					</div>
					<div className="drawer-side">
						<label
							htmlFor="my-drawer-4"
							aria-label="close sidebar"
							className="drawer-overlay"
						></label>
						<ul className="menu w-full fixed min-h-full bg-base-200 text-base-content flex flex-col gap-[10px]">
							<div className="w-full flex justify-start">
								<p
									onClick={() => document.getElementById("my-drawer-4").click()}
									className="drawer-button btn btn-ghost"
								>
									<i className="fa-solid fa-xmark text-xl"></i>
								</p>
							</div>
							<div className="flex flex-col items-center gap-[20px] mt-[25px]">
								<NavbarLink link={"/"}>Bosh sahifa</NavbarLink>
								<NavbarLink link={"/portfolio"}>Portfolio</NavbarLink>
								<NavbarLink link={"/xizmatlar"}>Xizmatlar</NavbarLink>
								<NavbarLink link={"/about"}>Biz haqimizda</NavbarLink>
							</div>
						</ul>
					</div>
				</div>
				{/* <div className="w-full lg:w-fit flex justify-end">
                        <button className="btn bg-[#5D45FD] hover:bg-[#4d42c5] btn-primary">Let's talk <i className="fa-solid fa-chevron-right"></i></button>
                    </div> */}
			</div>
		</Wrapper>
	);
};

export default Navbar;
