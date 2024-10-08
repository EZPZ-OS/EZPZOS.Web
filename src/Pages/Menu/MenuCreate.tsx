import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaArrowLeftLong } from "react-icons/fa6";
import { PiUploadSimpleLight } from "react-icons/pi";
import { DefaultMenuCreateValues } from "ezpzos.core";
import { ReactImageCropperDropzone } from "../../Components/UserProfileRelated/UploadAvatar/ReactImageCropperDropzone";
import { createCusine, GetCuisineById, editCusine } from "../../Services/Private/MenuService";

const MenuCreate: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();

	// State variables to store form inputs and their corresponding setters
	const [dishName, setDishName] = useState("");
	const [dishDescription, setDishDescription] = useState("");
	const [dishPrice, setDishPrice] = useState("");
	const [category, setCategory] = useState("");
	const [tags, setTags] = useState<string[]>(["No.1 ordered"]);
	const [newTag, setNewTag] = useState("");
	const [isAvailable, setIsAvailable] = useState(false);
	const [dishImageUrl, setDishImageUrl] = useState("");
	const [imagePreview, setImagePreview] = useState("");
	const [showError, setShowError] = useState(false); // Error handling state
	const [base64, setBase64] = useState<string>(""); // Store cropped image in base64
  
	useEffect(() => {
		if (typeof params.id === "string" && params.id !== "") {
			// edit page
			GetCuisineById(params.id).then(res => {
				if (res.status === 200) {
					setDishName(res.data.Name);
					setDishDescription(res.data.Description);
					setDishPrice(res.data.Price);
					setCategory(res.data.Category);
					setIsAvailable(res.data.IsAvailable);
					setBase64(res.data.Image);
				}
			});
		}
	}, []);

	/**
	 * Adds a new tag to the tags list if it does not already exist
	 */
	const handleAddTag = () => {
		if (newTag && !tags.includes(newTag)) {
			setTags([...tags, newTag]);
			setNewTag("");
		}
	};

	/**
	 * Removes a specific tag from the tags list
	 * @param tagToRemove The tag to be removed from the list
	 */
	const handleRemoveTag = (tagToRemove: string) => {
		setTags(tags.filter(tag => tag !== tagToRemove));
	};

	/**
	 * Inserts the provided image URL into the image preview area
	 */
	const handleInsertImageUrl = () => {
		setImagePreview(dishImageUrl);
	};

	// Callback after cropping the image
	const afterCrop = (croppedBase64: string) => {
		setBase64(croppedBase64); // Store the cropped image
	};
	/**
	 * Validates required fields and submits the form data
	 */
	const handleSubmit = () => {
		if (!dishName || !dishDescription || !dishPrice || !category) {
			setShowError(true); // Show error if any required field is missing
			return;
		}

		const menuDetails = {
			Name: dishName,
			Description: dishDescription,
			Price: parseFloat(dishPrice),
			Category: category,
			IsAvailable: isAvailable,
			EstimatedTime: 60,
			Image: base64
		};
    
    if(typeof params.id === 'string' && params.id !== ""){
      editCusine(params.id, menuDetails).then(res => {
        if(res.status === 200){
          navigate('/menu-list')
        }
      })
    }else{
      createCusine(menuDetails).then(res => {
        if(res.status === 200 || res.status === 201){
          handleToast()
          navigate('/menu-list')
        }
      })
    }
	};

	const CustomToast = () => {
		return (
			<div>
				<h2>Success</h2>
				<p>Cuisine is created successfully!</p>
			</div>
		);
	};
	const handleToast = () => {
		toast.success(<CustomToast />, {
			position: "top-center",
			autoClose: 3000,
			hideProgressBar: true,
			progress: undefined
		});
	};

	/**
	 * Navigates back to the previous page
	 */
	const goBack = () => {
		// Implement the logic to go back to the previous page
		navigate("/menu-list");
	};

	return (
		<div className="min-h-screen bg-white flex justify-center items-center">
			<div className="w-full max-w-lg mx-auto bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
				<button className="text-black mb-4 flex items-center" onClick={goBack}>
					<FaArrowLeftLong className="inline w-4 h-4 mr-2" />
					Back
				</button>
				{showError && (
					<div className="text-red-500 mb-4">{DefaultMenuCreateValues.Messages.ValidationError}</div>
				)}
				<div className="space-y-4">
					<div>
						<label className="block text-gray-700">{DefaultMenuCreateValues.Labels.DishName}</label>
						<input
							type="text"
							className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100"
							value={dishName}
							onChange={e => setDishName(e.target.value)}
						/>
					</div>
					<div>
						<label className="block text-gray-700">{DefaultMenuCreateValues.Labels.DishDescription}</label>
						<input
							type="text"
							className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100"
							value={dishDescription}
							onChange={e => setDishDescription(e.target.value)}
						/>
					</div>
					<div>
						<label className="block text-gray-700">{DefaultMenuCreateValues.Labels.DishPrice}</label>
						<input
							type="number"
							className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100"
							value={dishPrice}
							onChange={e => setDishPrice(e.target.value)}
						/>
					</div>
					<div>
						<label className="block text-gray-700">{DefaultMenuCreateValues.Labels.Category}</label>
						<input
							type="text"
							className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100"
							value={category}
							onChange={e => setCategory(e.target.value)}
						/>
					</div>
					<div>
						<label className="block text-gray-700">{DefaultMenuCreateValues.Labels.Tags}</label>
						<div className="mt-2 flex flex-wrap gap-2">
							{tags.map((tag, index) => (
								<span
									key={index}
									onClick={() => handleRemoveTag(tag)}
									className="inline-block bg-orange-500 text-white px-2 py-1 rounded text-sm border border-orange-500"
								>
									{tag}
								</span>
							))}
						</div>
						<div className="flex items-center space-x-2 mt-2">
							<input
								type="text"
								className="flex-grow px-3 py-2 border border-gray-300 rounded bg-gray-100"
								value={newTag}
								onChange={e => setNewTag(e.target.value)}
							/>
							<button
								className="w-[123px] h-[39px] bg-orange-500 text-white rounded"
								onClick={handleAddTag}
							>
								{DefaultMenuCreateValues.Labels.AddTagButton}
							</button>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<label className="block text-gray-700">{DefaultMenuCreateValues.Labels.IsDishAvailable}</label>
						<label className="relative inline-flex items-center cursor-pointer">
							<input
								type="checkbox"
								className="sr-only peer"
								checked={isAvailable}
								onChange={e => setIsAvailable(e.target.checked)}
							/>
							<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-orange-500 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
						</label>
					</div>
					<div className="relative w-full">
						<label className="block text-gray-700">{DefaultMenuCreateValues.Labels.UploadImage}</label>
						<div className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 flex items-center justify-center">
							<label className="w-full flex items-center justify-center cursor-pointer">
								<PiUploadSimpleLight className="mr-2" />

								<ReactImageCropperDropzone
									accept={{
										"image/jpeg": [".jpeg", ".jpg"],
										"image/png": [".png"]
									}}
									title="Crop your picture"
									lockAspectRatio={false}
									aspectRatio={952 / 380}
									afterCrop={afterCrop}
									base64Image={base64}
									defaultOpenState={false}
								>
									{" "}
									{DefaultMenuCreateValues.Labels.UploadImage}
								</ReactImageCropperDropzone>
							</label>
						</div>
					</div>
					<div>
						<label className="block text-gray-700">{DefaultMenuCreateValues.Labels.ImagePreview}</label>
						<div className="w-full h-[230px] mt-2 rounded border border-gray-300 flex items-center justify-center bg-gray-100">
							{base64 ? (
								<img
									src={base64}
									alt="Cropped Avatar Preview"
									style={{
										width: "300px",
										height: "200px",
										borderRadius: "5%",
										objectFit: "cover",
										objectPosition: "center"
									}}
								/>
							) : (
								<span className="text-gray-500">{DefaultMenuCreateValues.Labels.NoImageSelected}</span>
							)}
						</div>
					</div>
				</div>
				<div className="mt-4 flex justify-between">
					<button className="w-[168px] h-[45px] bg-gray-300 text-gray-700 rounded" onClick={goBack}>
						{DefaultMenuCreateValues.Labels.CancelButton}
					</button>
					<button className="w-[168px] h-[45px] bg-orange-500 text-white rounded" onClick={handleSubmit}>
						{DefaultMenuCreateValues.Labels.AddNewButton}
					</button>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default MenuCreate;
