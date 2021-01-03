import AWS = require('aws-sdk');
import {config} from './config/config';


// The SDK automatically detects AWS credentials set as variables in your environment
// and uses them for SDK requests. This eliminates the need to manage credentials in your application.
// https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/loading-node-credentials-environment.html

// This was the main problem and I struggled with it for quite some time! Solution was the remove the two lines below.
// Configure AWS
// const credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
// AWS.config.credentials = credentials;

export const s3 = new AWS.S3({
  signatureVersion: 'v4',
  region: config.aws_region,
  params: {Bucket: config.aws_media_bucket},
});

// Generates an AWS signed URL for retrieving objects
export function getGetSignedUrl( key: string ): string {
  const signedUrlExpireSeconds = 60 * 5;

  return s3.getSignedUrl('getObject', {
    Bucket: config.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
}

// Generates an AWS signed URL for uploading objects
export function getPutSignedUrl( key: string ): string {
  const signedUrlExpireSeconds = 60 * 5;

  return s3.getSignedUrl('putObject', {
    Bucket: config.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
}
