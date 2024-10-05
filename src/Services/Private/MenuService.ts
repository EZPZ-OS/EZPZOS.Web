import apiClient from "../../Utils/axiosConfig";

export const GetAllCuisines = async () => {
    return await apiClient.get(
        `/private/menu`
    );
};

export const GetCuisineById = async (id: string|undefined) => {
    return await apiClient.get(
        `/private/menu/${id}`,
    );
};

