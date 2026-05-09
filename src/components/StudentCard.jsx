import { Link } from "react-router-dom";

import placeholderImage from "../assets/placeholder.png";

function StudentCard(props) {
  return (
    <Link to={`/students/${props._id}`}>
      <div className="flex justify-between items-center p-2 border-b hover:bg-gray-100">
        <div className="flex justify-center" style={{ flexBasis: "20%" }}>
          <img
            src={props.image || placeholderImage}
            alt="student"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>

        <span style={{ flexBasis: "20%" }}>
          {props.firstName} {props.lastName}
        </span>

        <span style={{ flexBasis: "20%" }}>{props.program}</span>

        <span style={{ flexBasis: "20%" }}>{props.email}</span>

        <span style={{ flexBasis: "20%" }}>{props.phone}</span>
      </div>
    </Link>
  );
}

export default StudentCard;