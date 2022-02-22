

class AuthController {
  response = {
    message: "",
    data: null,
    status: null
  }

  // --> /api/auth/registerUser?user
  registerUser = async (req, res) => {

    //Step 01: get User Data and validate the data as well as check if the user doesn't exist in the database
    //Step 02: Add the new user in the database with respect to the user parameter, when adding the user to the database set the verified status to false
    // Step 03 (You can perform this in the middleware as well)
    // get the 3 images and 
    // Upload the 3 images coming into this parameter in supabase
    // supabase go and create a bucket named user_verification
    // when uploading 3 images create a folder in the bucket with the help of code 
    // The naming convention of the bucket will be like id
    // add those 3 user images in the folder

  }
  

}