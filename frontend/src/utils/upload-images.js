
export const uploadImage = async (file, imageType, wardenId) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("wardenId", wardenId);
  const url = `http://192.168.1.102:5000/api/warden/upload-image?imageType=${imageType}`;
  const response = await fetch(url, {
    body: formData,
    method: "POST",
  });
  return await response.json();
};
