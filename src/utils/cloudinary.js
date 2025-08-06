import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

const uploadCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });
        //file has been ulpoaded successfull
        // console.log("file is uploaded on cloudinary", response.url);
        fs.unlinkSync(localFilePath);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath); //remove the locally saved temporary file as the upload operation got failed
        return null;
    }
};

const getPublicIdFromUrl = (url) => {
    // Example URL: https://res.cloudinary.com/demo/image/upload/v1690984845/folder/image-name.jpg
    const parts = url.split("/");
    const fileName = parts.pop(); // image-name.jpg
    const publicId = fileName.split(".")[0]; // image-name
    //   const folder = parts.slice(parts.indexOf('upload') + 1).join('/'); // optional folders
    //   return folder ? `${folder}/${publicId}` : publicId;
    return publicId;
};

const deleteCloudinary = async (imageurl) => {
    try {
        const publicId = getPublicIdFromUrl(imageurl);
        const result = await cloudinary.uploader.destroy(publicId);
        console.log("Deleted:", result); // Optional log
        return result; // result is stored here
    } catch (error) {
        console.error("Error deleting image:", error);
        return null;
    }

    //  response =  cloudinary.uploader
    //   .destroy('sample') // 'sample' is the public_id
    //   .then(result => console.log('Deleted:', result))
    //   .catch(error => console.error('Error:', error));
};

export { uploadCloudinary, deleteCloudinary };

// Upload an image
//      const uploadResult = await cloudinary.uploader
//        .upload(
//            'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
//                public_id: 'shoes',
//            }
//        )
//        .catch((error) => {
//            console.log(error);
//        });

//     console.log(uploadResult);

//     // Optimize delivery by resizing and applying auto-format and auto-quality
//     const optimizeUrl = cloudinary.url('shoes', {
//         fetch_format: 'auto',
//         quality: 'auto'
//     });

//     console.log(optimizeUrl);

//     // Transform the image: auto-crop to square aspect_ratio
//     const autoCropUrl = cloudinary.url('shoes', {
//         crop: 'auto',
//         gravity: 'auto',
//         width: 500,
//         height: 500,
//     });

//     console.log(autoCropUrl);
// })();
