import ImageKit from "imagekit";

//console.log("DEBUG:", process.env.IMAGEKIT_PUBLIC_KEY, process.env.IMAGEKIT_PRIVATE_KEY, process.env.IMAGEKIT_URL_ENDPOINT);

var imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
});

export default imagekit;