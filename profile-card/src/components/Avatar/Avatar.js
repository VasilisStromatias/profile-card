import React from "react";

import avatarImage from "../../assets/avatar-image.jpg";

function Avatar() {
  return (
    <div className="avatar-image">
      <img src={avatarImage} alt="Vasilis Stromatias " />
    </div>
  );
}

export default Avatar;
