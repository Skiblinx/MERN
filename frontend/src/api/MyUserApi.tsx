import { User } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

export const useCreateMyUSer = () => {

  const { getAccessTokenSilently } = useAuth0();

  const createUserRequest = async (user: CreateUserRequest) => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    if (!response.ok) {
      throw new Error("Failed to create user");
    }
  }

  const { mutateAsync: createUser, isLoading, isError, isSuccess } = useMutation(createUserRequest);

  return {
    createUser,
    isLoading,
    isError,
    isSuccess,
  }
}

type updateUserRequest = {
  name: string,
  addressLine1: string,
  city: string,
  country: string,
}

export const useUpdateUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateUserRequest = async (formData: updateUserRequest) => {

    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${accessToken}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      throw new Error("Failed to update user");
    }

    return response.json();
  };

  const { mutateAsync: updateUser, isLoading, isSuccess, error, reset } = useMutation(updateUserRequest)

  if (isSuccess) {
    toast.success(`User updated successfully`);
  }
  if (error) {
    toast.error(error.toString());
    reset()
  }

  return {
    updateUser,
    isLoading,
  }
}

export const useGetMyUser = () => {
  const { getAccessTokenSilently } = useAuth0()

  const getMyUserRequest = async (): Promise<User> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${accessToken}`,
        'content-type': 'application/json',
      },
    })

    if (!response) {
      throw new Error("Failed to fetch user")
    }

    return response.json();
  }


  const { data: currentUser, isLoading, error } = useQuery("fetchCurrentUser", getMyUserRequest)

  if (error) {
    toast.error(error.toString())
  }

  return { currentUser, isLoading }

}