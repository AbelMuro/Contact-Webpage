import aws from 'aws-sdk';
        
const s3 = new aws.S3({
    region: process.env.region,
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    signatureVersion: 'v4'
})

export async function generateUploadURL(objectName) {                      

    const params = {
        Bucket: 'contact-form-data',
        Key: objectName,
        Expires: 60
    };

    const uploadURL = await s3.getSignedUrlPromise('putObject', params);

    return uploadURL;                                               
}
