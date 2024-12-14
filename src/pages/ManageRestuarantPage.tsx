import { useCreateMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/user-profile-form/manage-retaurant-form/ManageRestaurantForm";

const ManageRestuarantPage = () => {
  const { createRestaurant, isLoading } = useCreateMyRestaurant()
  return (
    <ManageRestaurantForm onSave={createRestaurant} isLoading={isLoading} />
  )
}

export default ManageRestuarantPage;