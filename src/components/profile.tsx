import profile from "../assets/profile.jpg"

const Profile = () => {
  return (
    <div className="flex flex-col items-center w-[100px] text-">
        <img src={profile} alt="profile-pic" className="w-[30px] h-[30px] rounded-xl"/>
        <span>John Doe</span>
    </div>
  )
}

export default Profile