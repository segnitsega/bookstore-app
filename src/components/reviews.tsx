import profile from "../assets/profile.jpg";
import { FaComment, FaStar } from "react-icons/fa";

// type props {
  // pic: url --> for recieving profile pictures
  // name: string
  // book: string(book name)
  // comment: string
// }

const Reviews = () => {
  return (
    <div className="flex w-[400px] border-b-2 border-gray-200 gap-2 p-3">
      <img
        src={profile}
        alt="profile_picture"
        className="w-[40px] h-[40px] rounded-2xl"
      />
      <div>
        <h1>Emily Johnson</h1>
        <p>on Book - The Great</p>
        <div className="m-2">This book is quite amazing, and inspiring</div>
        <div className="flex justify-around mb-4">
          <FaComment />
          <FaStar />
        </div>
      </div>
      <span>2h</span>
    </div>
  );
};

export default Reviews;
