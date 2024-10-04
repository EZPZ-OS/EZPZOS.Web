import React, { useRef, useState } from "react";
import { ReactImageCropperDropzone } from "./ReactImageCropperDropzone";
import { base64StringToBlob } from "blob-util";
import { UserService } from "../../../Services/Private/UserService";
import { showAlert } from "../../../Store/AlertSlice";
import { useDispatch } from "react-redux";
import { setAvatar } from "../../../Store/AuthSlice";

interface AvatarUploadModalProps {
	isOpen: boolean;
	onClose: () => void;
	userId: string;
}

const AvatarUploadModal: React.FC<AvatarUploadModalProps> = ({ isOpen, onClose, userId }) => {
	const dispatch = useDispatch();
	const [base64, setBase64] = useState<string>(""); // Store cropped image in base64
	const fileInputRef = useRef<HTMLInputElement | null>(null); // Reference for file input
	const [uploading, setUploading] = useState<boolean>(false); // Control upload state
	const [isCropping, setIsCropping] = useState<boolean>(false); // Control whether cropping tool is open

	if (!isOpen) return null; // Don't render if the modal isn't open

	// Callback after cropping the image
	const afterCrop = (croppedBase64: string) => {
		setBase64(croppedBase64); // Store the cropped image
	};

	// Helper to convert base64 to File
	const base64ToFile = (base64: string, filename: string): File => {
		const mimeType = base64.match(/data:(.*?);base64/)?.[1] || "image/jpeg";
		const blob = base64StringToBlob(base64.split(",")[1], mimeType);
		return new File([blob], filename, { type: mimeType });
	};

	// Handle choosing from gallery (trigger file input)
	const handleChooseFromGallery = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click(); // Open file picker
		}
	};

	// Handle take photo functionality
	const handleTakePhoto = () => {
		if (fileInputRef.current) {
			fileInputRef.current.setAttribute("capture", "user"); // Set capture to user camera
			fileInputRef.current.click(); // Open camera
		}
	};

	// **Trigger cropping when a file is selected, either dropped or via file input**
	const handleFileSelected = (acceptedFiles: File[]) => {
		const file = acceptedFiles[0]; // Get the first selected file
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				const fileBase64 = reader.result as string;
				setBase64(fileBase64); // Store the base64 version of the image
				setIsCropping(true); // Open the cropping tool
			};
			reader.readAsDataURL(file); // Convert file to base64
		}
	};

	// Handle file change (when user selects or captures a file)
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]; // Get the first selected file
		if (file) {
			handleFileSelected([file]);
		}
	};

	// Handle avatar update
	const handleUpdateAvatar = async () => {
		if (!base64) {
			dispatch(showAlert({ message: "Please select and crop an image.", isError: true }));
			return;
		}
		setUploading(true);
		try {
			const file = base64ToFile(base64, "avatar.jpeg"); // Convert base64 to File
			const response = await UserService.updateAvatarRequest(userId, file); // Call API to upload avatar
			if (response.result === true) {
				dispatch(showAlert({ message: "Avatar updated successfully", isError: false }));
				// Fetch the updated avatar after successful upload
				const avatarResponse = await UserService.getAvatarRequest(userId);

				if (avatarResponse.result && avatarResponse.avatarUrl) {
					// Dispatch action to update Redux with the fetched avatar
					dispatch(setAvatar(avatarResponse.avatarUrl));
				} else {
					dispatch(showAlert({ message: "Failed to fetch the updated avatar.", isError: true }));
				}
			} else {
				dispatch(showAlert({ message: response.message || "Failed to update avatar.", isError: true }));
			}
		} catch (error) {
			dispatch(showAlert({ message: "An error occurred while uploading the avatar.", isError: true }));
		} finally {
			setUploading(false);
			setIsCropping(false);
			onClose(); // Close modal after uploading
		}
	};

	// style that display cropped image
	const imageStyle = {
		backgroundImage: `url(${base64})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		borderRadius: 1,
		height: 380,
		width: 374
	};

	return (
		<div className="fixed inset-0 z-50 flex flex-col items-center justify-end bg-gray-800 bg-opacity-50 text-xl text-[#1e51ab] font-lato">
			{/* Input for selecting file or capturing photo */}
			<input
				type="file"
				accept="image/*"
				className="hidden" // Hide the input field
				ref={fileInputRef}
				onChange={handleFileChange} // Handle the file change
			/>

			{!isCropping ? (
				<div className="bg-[#dfdfdf] w-[374px] rounded-2xl px-6 py-6 space-y-4">
					<button
						className="w-full pb-4 border-b-2 border-[#a39c9c]"
						onClick={handleTakePhoto} // Handle Take Photo functionality
					>
						Take Photo
					</button>

					<button
						className="w-full"
						onClick={handleChooseFromGallery} // Handle Choose from Gallery functionality
					>
						Choose from gallery
					</button>
				</div>
			) : (
				<div className="w-full bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
					<div className="Paper">
						{base64 ? (
							<div className="w-full" style={imageStyle}></div>
						) : (
							<div className="Box Border">
								<h6 className="h6">Select a cover image</h6>
								<h6 className="subtitle">Image used for the post cover</h6>
							</div>
						)}
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
						>
							<div className="Box Border Button" role="button" tabIndex={0}>
								<div className="Box flex justify-center">
									<h6 className="h6 bg-[#dfdfdf] rounded-xl w-[300px] py-3 m-4 text-center">
										Select image
									</h6>
								</div>
							</div>
						</ReactImageCropperDropzone>
					</div>

					{/* Cropped Image Preview */}
					{base64 && (
						<img
							src={base64}
							alt="Cropped Avatar Preview"
							style={{
								width: "100px",
								height: "100px",
								borderRadius: "50%",
								objectFit: "cover",
								objectPosition: "center"
							}}
						/>
					)}

					{/* Upload button */}
					<button
						className="bg-[#dfdfdf] rounded-xl w-[300px] py-3 m-4"
						onClick={handleUpdateAvatar}
						disabled={uploading}
					>
						{uploading ? "Uploading..." : "Upload Avatar"}
					</button>
				</div>
			)}

			<button className="bg-[#dfdfdf] rounded-xl my-2 w-[374px] py-3 mb-10 text-red-500" onClick={onClose}>
				Cancel
			</button>
		</div>
	);
};

export default AvatarUploadModal;
