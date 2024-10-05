import { useGetMyUser, useUpdateUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {

  const { updateUser, isLoading: isUpdateLoading } = useUpdateUser();

  const { currentUser, isLoading: isGetLoading } = useGetMyUser();

  if (isGetLoading && !currentUser) {
    return <span>Loading...</span>
  }

  if (!currentUser) {
    return <span>Unable to load user profile</span>
  }

  return (

    <UserProfileForm onSave={updateUser} currentUser={currentUser} isLoading={isUpdateLoading} />

  )
}

export default UserProfilePage;