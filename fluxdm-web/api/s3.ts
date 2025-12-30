import { S3Client } from "@aws-sdk/client-s3";

const requiredEnvVars = [
    'AWS_ACCESS_KEY_ID',
    'AWS_SECRET_ACCESS_KEY',
    'AWS_REGION',
    'AWS_BUCKET_NAME'
];

const missingVars = requiredEnvVars.filter(key => !process.env[key]);

if (missingVars.length > 0) {
    throw new Error(`CRITICAL: Missing S3 Configuration. The following environment variables are not set: ${missingVars.join(', ')}`);
}

export const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
});

export const BUCKET_NAME = process.env.AWS_BUCKET_NAME!;
