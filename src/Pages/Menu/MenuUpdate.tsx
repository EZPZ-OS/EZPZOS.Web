import React, { useState } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { PiUploadSimpleLight } from "react-icons/pi";
import { DefaultMenuUpdateValues } from "ezpzos.core";
import { useNavigate } from 'react-router-dom';

const MenuUpdate: React.FC = () => {
  const [dishName, setDishName] = useState(''); 
  const [dishDescription, setDishDescription] = useState(''); 
  const [dishPrice, setDishPrice] = useState(''); 
  const [category, setCategory] = useState(''); 
  const [tags, setTags] = useState<string[]>(['']); 
  const [newTag, setNewTag] = useState('');
  const [isAvailable, setIsAvailable] = useState(false); 
  const [dishImageUrl, setDishImageUrl] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [showError, setShowError] = useState(false); 

  const navigate = useNavigate();

  // Navigate back to Menu Read Page
  const goBack = () => {
    navigate(''); 
  };

  // Delete the item and navigate to Business Menu Item List UI
  const handleDelete = () => {
    // Delete logic here (e.g., API call to delete the dish)
    console.log("Item deleted");
    navigate(''); // Navigate to Menu Delete Page
  };

  // Validate and format price input
  const handleDishPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9.]/g, ''); // Only allow numbers and dots
    if (!isNaN(Number(value))) {
      value = parseFloat(value).toFixed(2); // Format to two decimal places
      if (parseFloat(value) > 10000) value = '10000.00'; // Max price
      setDishPrice(`$${value}`);
    }
  };

  // Image Upload and URL Insert Handlers
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setDishImageUrl(''); // Clear URL when an image is uploaded
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInsertImageUrl = () => {
    if (dishImageUrl) {
      setImagePreview(dishImageUrl);
    }
  };

  // Validate and submit form
  const handleSubmit = () => {
    // Validation: Ensure either an image is uploaded or an image URL is provided
    if (!dishName || dishName.length > 40 || !dishDescription || dishDescription.length > 100 || !dishPrice || !category || category.length > 100 || (!dishImageUrl && !imagePreview)) {
      setShowError(true);
      return;
    }

    // Data to be submitted
    const menuDetails = {
      dishName,
      dishDescription,
      dishPrice,
      category,
      tags,
      isAvailable,
      dishImageUrl: imagePreview ? dishImageUrl : '', // Only submit URL if no image is uploaded
      imagePreview,
    };

    console.log("Updated Menu Details JSON:", JSON.stringify(menuDetails));
    // Save changes (e.g., API call to update the dish)
    navigate(''); // Navigate to Menu Read Page
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      <div className="w-full max-w-lg mx-auto bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
        <button className="text-black mb-4 flex items-center" onClick={goBack}>
          <FaArrowLeftLong className="inline w-4 h-4 mr-2" />
          Back
        </button>
        {showError && (
          <div className="text-red-500 mb-4">
            {DefaultMenuUpdateValues.Messages.ValidationError}
          </div>
        )}
        <div className="flex justify-end">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={handleDelete}
          >
            Delete Item
          </button>
        </div>
        <div className="space-y-4 mt-4">
          <div>
            <label className="block text-gray-700">{DefaultMenuUpdateValues.Labels.DishName}</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100"
              value={dishName}
              onChange={(e) => setDishName(e.target.value)}
              maxLength={40} // max 40 characters
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">{DefaultMenuUpdateValues.Labels.DishDescription}</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100"
              value={dishDescription}
              onChange={(e) => setDishDescription(e.target.value)}
              maxLength={100} // max 100 characters
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">{DefaultMenuUpdateValues.Labels.DishPrice}</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100"
              value={dishPrice}
              onChange={handleDishPriceChange}
              placeholder="$0.00" // Format example
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">{DefaultMenuUpdateValues.Labels.Category}</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              maxLength={100} // max 100 characters
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">{DefaultMenuUpdateValues.Labels.Tags}</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  onClick={() => setTags(tags.filter(t => t !== tag))} // Remove tag
                  className="inline-block bg-orange-500 text-white px-2 py-1 rounded text-sm border border-orange-500 cursor-pointer"
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
                onChange={(e) => setNewTag(e.target.value)}
                maxLength={100}
              />
              <button
                className="w-[123px] h-[39px] bg-orange-500 text-white rounded"
                onClick={() => newTag && setTags([...tags, newTag])} // Add tag
              >
                {DefaultMenuUpdateValues.Labels.AddTagButton}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="block text-gray-700">{DefaultMenuUpdateValues.Labels.IsDishAvailable}</label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isAvailable}
                onChange={(e) => setIsAvailable(e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-orange-500 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
            </label>
          </div>
          <div className="relative w-full">
            <label className="block text-gray-700">{DefaultMenuUpdateValues.Labels.UploadImage}</label>
            <div className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 flex items-center justify-center">
              <label className="w-full flex items-center justify-center cursor-pointer">
                <PiUploadSimpleLight className="mr-2" />
                {DefaultMenuUpdateValues.Labels.UploadImage}
                <input
                  type="file"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
            <div className="flex justify-center mt-2 text-gray-500">{DefaultMenuUpdateValues.Labels.OrText}</div>
            <input
              type="text"
              className="w-full px-3 py-2 mt-2 border border-gray-300 rounded bg-gray-100"
              value={dishImageUrl}
              onChange={(e) => setDishImageUrl(e.target.value)}
              placeholder="Image URL"
            />
            <div className="flex justify-end mt-2">
              <button
                className="w-[123px] h-[39px] bg-orange-500 text-white rounded"
                onClick={handleInsertImageUrl}
              >
                {DefaultMenuUpdateValues.Labels.InsertButton}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">{DefaultMenuUpdateValues.Labels.ImagePreview}</label>
            <div className="w-full h-[230px] mt-2 rounded border border-gray-300 flex items-center justify-center bg-gray-100">
              {imagePreview ? (
                <img src={imagePreview} alt="Image-Preview" className="h-full object-cover rounded" />
              ) : (
                <span className="text-gray-500">{DefaultMenuUpdateValues.Labels.NoImageSelected}</span>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <button className="w-[168px] h-[45px] bg-gray-300 text-gray-700 rounded" onClick={goBack}>
            {DefaultMenuUpdateValues.Labels.CancelButton}
          </button>
          <button
            className="w-[168px] h-[45px] bg-orange-500 text-white rounded"
            onClick={handleSubmit}
          >
            {DefaultMenuUpdateValues.Labels.SaveChangesButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuUpdate;

