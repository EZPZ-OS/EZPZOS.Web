import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineDelete, AiOutlineGift } from "react-icons/ai";
import { IoAddOutline } from "react-icons/io5";
import { GrNext } from "react-icons/gr";
import { ClientCartDemoData, Cuisine, DemoVoucher } from "ezpzos.core";
import Dish from '../../Assets/Images/dish.png'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClientCartForm: React.FC = () => {
	const [cuisines, setCuisines] = useState<Cuisine[]>(ClientCartDemoData);
	const [voucherSelected, setVoucherSelected] = useState(false);
	const [deliveryType, setDeliveryType] = useState('dinein');
	const [cuisineList, setCuisineList] = useState<any[]>([]);
	const [checkOutAmount, setCheckOutAmount] = useState(0);

	const navigate = useNavigate();

	const reCountTotal = () => {
		let sum = 0;
		cuisineList.forEach(item => {
			sum += item.dish_price;
		});
		setCheckOutAmount(sum);
	}
	//Increase Cuisine Amount
	const handleIncrease = (id: string) => {
		setCuisineList(prevCuisines => {
			return prevCuisines.map(cuisine => cuisine.dish_id === id ? { ...cuisine, dish_number: cuisine.dish_number + 1} : cuisine);
		});
		setCuisineList(prevCuisines => {
			return prevCuisines.map(cuisine => cuisine.dish_id === id ? { ...cuisine, dish_price: cuisine.dish_number * cuisine.dish_per_price} : cuisine);
		});
	};

	//Decrease Cuisine Amount, will remove cuisine if amount is zero
	const handleDecrease = (id: string) => {
		setCuisineList(prevCuisines => {
			return prevCuisines.map(cuisine => cuisine.dish_id === id && cuisine.dish_number > 0 ? { ...cuisine, dish_number: cuisine.dish_number - 1 } : cuisine).filter(cuisine => cuisine.dish_number > 0);
		});
		setCuisineList(prevCuisines => {
			return prevCuisines.map(cuisine => cuisine.dish_id === id && cuisine.dish_number > 0 ? { ...cuisine, dish_price: cuisine.dish_number * cuisine.dish_per_price } : cuisine);
		});
	};

	//Change Cuisine From Dine In to Takeaway
	const handleMoveToTakeAway = (id: number) => {
		setCuisines(prevCuisines => {
			const index = prevCuisines.findIndex(cuisine => cuisine.Id === id);
			//const newCuisines = [...cuisines];
			const newCuisines = [...prevCuisines];
			newCuisines[index] = { ...newCuisines[index], DineType: "Takeaway" };
			return newCuisines;
		});
	};

	// Change Cuisine From Takeaway to Dine In
	const handleMoveToDineIn = (id: number) => {
		setCuisines(prevCuisines => {
			const index = prevCuisines.findIndex(cuisine => cuisine.Id === id);
			// const newCuisines = [...cuisines];
			const newCuisines = [...prevCuisines];
			newCuisines[index] = { ...newCuisines[index], DineType: "Dine In" };
			return newCuisines;
		});
	};

	// Select Voucher, will receive data from voucher selection page
	const handleSelectVoucher = () => {
		setVoucherSelected(prevState => !prevState);
	};

	// Check Out Button, will export data to payment page
	const handleCheckOut = () => {
		console.log([cuisines, subtotalAmount]);
		// dine in -> booking
		// take away -> order/status
		if(deliveryType === 'dinein'){
			navigate('/booking')
		}else{
			navigate('/order/status')
		}
	};

	const CustomToast = () => {
        return (
            <div>
                <h2>Warning</h2>
                <p>Shopping cart is empty!</p>
            </div>
        )
    }
    const handleToast = () => {
        toast.success(<CustomToast />, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: true,
            progress: undefined
        })
    }

	useEffect(()=>{
		// get cart data from localhost
		let userStorage: string|null = localStorage.getItem('user');
        let user: any = JSON.parse(userStorage!);

		let cartStorage: string|null = localStorage.getItem('cartObj');
		if(cartStorage === null){
			handleToast();
		}else{
			let cartArr: any = JSON.parse(cartStorage);
			let sum = 0;
			cartArr.forEach((item: any) => {
				if(item.user_id === user.Id){
					sum += item.dish_price;
					setCuisineList((prevArray:any[]) => {
						return [...prevArray, item];
					})
				}
			});
			setCheckOutAmount(sum);
		}
	}, [])

	useEffect(()=>{
		reCountTotal();
	}, [cuisineList])

	// const dineInCuisines = cuisines.filter(cuisine => cuisine.DineType === "Dine In");
	// const takeAwayCuisines = cuisines.filter(cuisine => cuisine.DineType === "Takeaway");

	// const dineInCuisines = useMemo(() => cuisines.filter(cuisine => cuisine.DineType === "Dine In"), [cuisines]);
	// const takeAwayCuisines = useMemo(() => cuisines.filter(cuisine => cuisine.DineType === "Takeaway"), [cuisines]);

	// Calculate Subtotal Amount
	const subtotalAmount = cuisines.reduce((acc, cuisine) => acc + cuisine.Amount * cuisine.Price, 0);
	// const checkOutAmount = subtotalAmount - (voucherSelected ? DemoVoucher.Value : 0);

	return (
		<div className="flex flex-col font-lato w-full max-w-md h-full bg-[#F5F5F5] mx-auto">
			<Link to="/">
				<button className="font-bold text-left w-full text-xl pl-4 py-4" type="button">
					X
				</button>
			</Link>
			<div className="font-bold text-left w-full text-2xl py-2 pl-4">DemoData Sichuan Cuisine</div>
			<hr className="w-full h-[7px] bg-[#E2DEDE] mt-4" />
			{/* <div className="font-semibold text-left w-full text-xl mt-4 pl-4">Dine In</div> */}

			{/*Dine IN Section Start*/}
			<div className="w-full h-[384px] bg-scroll mt-4 overflow-y-scroll">
				<ul>
					{cuisineList.map((cuisine, index) => {
						return (
							<li key={cuisine.dish_id} className="relative h-[128px] bg-scroll mt-4 ml-[11px] mr-[11px] font-semibold border-b-[1px] border-b-[#D9D6D6]">
								<div className="flex flex-row">
									<img src={Dish} className="w-[70px] h-[70px] rounded-lg" />
									<div className="flex-1 ml-3">
										<div className="w-[306px] h-[33px] text-[16px] mt-[5px]">{cuisine.dish_name}</div>
										<div className="w-[306px] text-[15px] mt-[5px] text-[#4D4D4D]">${cuisine.dish_price}</div>
									</div>
								</div>
								<div className="absolute right-0 bottom-2 flex items-center justify-evenly w-[124px] h-[38px] rounded-full bg-[#FF9900]">
									<button onClick={() => handleDecrease(cuisine.dish_id)}>
										<AiOutlineDelete />
									</button>
									<div className="text-[15px]">{cuisine.dish_number}</div>
									<button onClick={() => handleIncrease(cuisine.dish_id)}>
										<IoAddOutline />
									</button>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
			{/* <div className="flex justify-end w-11/12 h-[38px] ml-[22px] mt-4">
				<Link
					to={{ pathname: "/menu-dinein" }}
					className="flex justify-evenly items-center w-[124px] rounded-full bg-[#D9D6D6] text-[15px] font-semibold "
				>
					<IoAddOutline />
					Add Items
				</Link>
			</div> */}
			{/*Dine IN Section End*/}

			{/* <hr className="w-full h-[35px] bg-[#E2DEDE] mt-4" /> */}

			{/* <div className="font-semibold text-left w-full h-9 text-[24px] mt-4 pl-[23px]">Take Away</div> */}

			{/*Take Away Section Start*/}
			{/* <div className="w-full h-[384px] bg-scroll mt-4 overflow-y-scroll">
				<ul>
					{takeAwayCuisines.map((cuisine, index) => {
						return (
							<li
								key={cuisine.Id}
								className="flex flex-wrap w-[384px] h-[128px] bg-scroll mt-4 ml-[22px] font-semibold border-b-[1px] border-b-[#D9D6D6]"
							>
								<img
									src={cuisine.ImageUrl}
									alt={cuisine.Name}
									className="w-[70px] h-[70px] rounded-lg"
								/>
								<div className="ml-2 w-[306px] h-[70px]">
									<div className="w-[306px] h-[33px] text-[16px] mt-[5px]">{cuisine.Name}</div>
									<div className="w-[306px] text-[15px] mt-[5px] text-[#4D4D4D]">
										${cuisine.Price}
									</div>
								</div>
								<div className="flex justify-between w-[430px]">
									<button
										className="w-[162px] h-[34px] rounded-full bg-orange-gradient text-[#FFFFFF]"
										onClick={() => handleMoveToDineIn(cuisine.Id)}
									>
										Move to Dine In
									</button>
									<div className="flex items-center justify-evenly w-[124px] h-[38px] rounded-full bg-[#FF9900]">
										<button onClick={() => handleDecrease(cuisine.Id)}>
											<AiOutlineDelete />
										</button>
										<div className="text-[15px]">{cuisine.Amount}</div>
										<button onClick={() => handleIncrease(cuisine.Id)}>
											<IoAddOutline />
										</button>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="flex justify-between w-11/12 h-[38px] ml-[22px] mt-4 text-[15px] font-semibold">
				<div className="flex justify-center items-center w-[134px] h-[34px] bg-[#D9D6D6]">Cook in 1 hour</div>
				<Link to="/menu" className="flex justify-evenly items-center w-[124px] rounded-full bg-[#D9D6D6]">
					<IoAddOutline />
					Add Items
				</Link>
			</div> */}
			{/*Take Away Section End*/}

			{/* <hr className="w-full h-[1px] bg-[#D9D6D6] mt-4" /> */}

			{/*Voucher Section Start*/}
			{/* {voucherSelected ? (
				<div
					className="flex w-full h-[90px] items-center justify-center bg-orange-gradient font-semibold text-[20px] text-[#FFFFFF]"
					onClick={handleSelectVoucher}
				>
					YAY! You saved ${DemoVoucher.Value}
				</div>
			) : (
				<div
					className="flex w-11/12 ml-[22px] h-[90px] justify-between items-center"
					onClick={handleSelectVoucher}
				>
					<div className="flex items-center w-[340px] h-[42px] text-[16px] font-semibold">
						<AiOutlineGift style={{ width: "20px", height: "20px", color: "EF7221" }} />
						<p className="pl-[15px]">
							Vouchers <br />
							<span className="text[14px] text-[#4D4D4D]">Choose one and apply</span>
						</p>
					</div>
					<GrNext style={{ width: "19px", height: "19px", color: "D9D6D6" }} />
				</div>
			)} */}
			{/*Voucher Section End*/}

			{/* <hr className="w-full h-[1px] bg-[#D9D6D6] m-0" /> */}

			{/*Payment Selection Section Start*/}
			{/* <div className="flex w-11/12 justify-center items-center h-[90px] ml-[22px] font-semibold text-[16px] ">
				<p>Choose Your Payment Method</p>
			</div> */}
			{/*Payment Selection Section End*/}

			<hr className="w-full h-[1px] bg-[#D9D6D6]" />

			{/*Subtotal Section Start*/}
			<div className="flex w-11/12 justify-between items-center h-[120px] ml-[22px] font-semibold text-[20px]">
				<p>Subtotal</p>
				<p>${checkOutAmount}</p>
			</div>
			{/*Subtotal Selection Section End*/}

			<div className="flex flex-row justify-center">
				<label className="flex items-center mr-1">
					<input type="radio" name="delivery" value="dinein" checked={deliveryType === 'dinein'} onChange={(e) => setDeliveryType(e.target.value)} />
					<span className="ml-2">Dine in</span>
				</label>
				<label className="flex items-center ml-1">
					<input type="radio" name="delivery" value="takeaway" checked={deliveryType === 'takeaway'} onChange={(e) => setDeliveryType(e.target.value)}/>
					<span className="ml-2">Take away</span>
				</label>
			</div>

			<div className="flex items-center justify-center w-full bg-[#F5EDED] text-[20px] text-[#FFFFFF]">
				<button
					className="flex justify-center items-center w-[356px] h-[52.11px] bg-gradient-to-r from-[#EF7221] via-[#FF6514] to-[#DC4200] rounded-lg my-5"
					onClick={handleCheckOut}
				>
					Go To Check Out
				</button>
			</div>
			<ToastContainer />
		</div>
	);
};

export default ClientCartForm;
