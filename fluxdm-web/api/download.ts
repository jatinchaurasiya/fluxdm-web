import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import type { VercelRequest, VercelResponse } from '@vercel/node';

const s3Client = new S3Client({
    region: process.env.AWS_REGION || "us-east-1",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
    },
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { platform } = req.body;

        if (!platform || !['windows', 'mac'].includes(platform)) {
            return res.status(400).json({ error: 'Invalid platform' });
        }

        const bucketName = process.env.AWS_BUCKET_NAME;
        const key = platform === 'windows' ? 'fluxdm-setup.exe' : 'fluxdm-setup.dmg';

        if (!bucketName) {
            console.error('AWS Configuration Error: AWS_BUCKET_NAME is not defined in environment variables.');
            return res.status(500).json({ error: 'Server configuration error' });
        }

        if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
            console.error('AWS Configuration Error: AWS Credentials are not defined.');
            return res.status(500).json({ error: 'Server configuration error' });
        }

        const command = new GetObjectCommand({
            Bucket: bucketName,
            Key: key,
        });

        const url = await getSignedUrl(s3Client, command, { expiresIn: 900 }); // 15 minutes

        return res.status(200).json({ url });

    } catch (error: any) {
        console.error('Download URL generation failed:', error);
        return res.status(500).json({ error: 'Failed to generate download link' });
    }
}
