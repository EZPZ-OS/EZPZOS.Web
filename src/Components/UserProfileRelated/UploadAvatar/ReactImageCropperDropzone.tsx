import React, { useEffect, useCallback, useState } from "react";
import { useDropzone, Accept } from "react-dropzone";
import { ReactImageCropperPopup } from "./ReactImageCropperPopup";

export interface ReactImageCropperDropzoneProps {
	children: React.ReactNode;
	accept: Accept;
	afterCrop: (dataUrl: string) => void;
	title: string;
	lockAspectRatio?: boolean;
	aspectRatio: number;
	base64Image?: string;
}

export const ReactImageCropperDropzone: React.FC<ReactImageCropperDropzoneProps> = ({
	children,
	accept,
	afterCrop,
	title,
	lockAspectRatio = true,
	aspectRatio,
	base64Image
}) => {
	const [open, setOpen] = useState<boolean>(true);
	const [image, setImage] = useState<string>("");

	// Trigger the cropper when base64Image from parent changes
	useEffect(() => {
		if (base64Image) {
			setImage(base64Image);
		}
	}, [base64Image]); // This effect runs whenever base64Image changes

	const onDrop = useCallback((acceptedFiles: File[]) => {
		if (acceptedFiles.length === 0) return;

		const reader = new FileReader();

		reader.onabort = () => console.log("[ReactImageCropperDropzone]: File reading was aborted");
		reader.onerror = () => console.log("[ReactImageCropperDropzone]: File reading has failed");
		reader.onload = () => {
			if (reader.result) {
				setImage(reader.result as string);
				setOpen(true);
			}
		};

		reader.readAsDataURL(acceptedFiles[0]);
	}, []);

	const { getRootProps, getInputProps } = useDropzone({
		accept,
		maxFiles: 1,
		maxSize: 4000000,
		minSize: 0,
		onDrop
	});

	return (
		<>
			<div {...getRootProps()}>
				<input {...getInputProps()} />
				{children}
			</div>
			<ReactImageCropperPopup
				open={open}
				onClose={() => {
					setOpen(false);
				}}
				img={image}
				afterCrop={afterCrop}
				title={title}
				lockAspectRatio={lockAspectRatio}
				aspectRatio={aspectRatio}
			/>
		</>
	);
};
