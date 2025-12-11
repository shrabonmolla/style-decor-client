import axios from "axios";
import React from "react";

export function ImageUpload(imageData) {
  const formData = new FormData();
  formData.append("image", imageData);

  //  store the image in imgbb
  return axios
    .post(
      `https://api.imgbb.com/1/upload?key=21056502350557c7e773fb27b0740e40`,
      formData
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
}
