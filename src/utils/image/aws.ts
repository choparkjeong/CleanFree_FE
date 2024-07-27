import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: `${process.env.NEXT_PUBLIC_REACT_APP_AWS_ACCESS_KEY_ID}`,
  secretAccessKey: `${process.env.NEXT_PUBLIC_REACT_APP_AWS_SECRET_ACCESS_KEY}`,
  region: `${process.env.NEXT_PUBLIC_REACT_APP_AWS_REGION}`,
});

const s3 = new AWS.S3();

export const uploadImageToS3 = async (file: File): Promise<string> => {
  try {
    const fileName = `images/${Date.now()}-${file.name}`;
    const params: AWS.S3.PutObjectRequest = {
      Bucket: "cleanfree",
      Key: fileName,
      Body: file,
      ContentType: file.type,
    };

    await s3.upload(params).promise();

    // CloudFront URL 생성
    const url = `https://${process.env.NEXT_PUBLIC_REACT_APP_CLOUDFRONT_DOMAIN}/${fileName}`;
    return url;
  } catch (error) {
    console.error("Error uploading image to S3:", error);
    throw error;
  }
};
