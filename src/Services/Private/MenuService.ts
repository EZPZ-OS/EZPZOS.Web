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

export const createCusine = async (cusine: object) => {
    return await apiClient.post('/private/menu//create', cusine)
}

export const deleteCusine = async (id: string|undefined) => {
    return await apiClient.delete(
        `/private/menu/${id}`,
    );
}

export const editCusine = async (id: string|undefined, cusine: object) => {
    return await apiClient.put(
        `/private/menu/${id}`,
        cusine
    );
}