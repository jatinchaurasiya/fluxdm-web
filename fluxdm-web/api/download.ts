import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { s3Client, BUCKET_NAME } from './s3';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { platform } = req.body;

        if (!platform || !['windows', 'mac'].includes(platform)) {
            return res.status(400).json({ error: 'Invalid platform' });
        }

        const key = platform === 'windows' ? 'fluxdm-setup.exe' : 'fluxdm-setup.dmg';
        const filename = platform === 'windows' ? 'FluxDM-Setup.exe' : 'FluxDM-Setup.dmg';

        const command = new GetObjectCommand({
            Bucket: BUCKET_NAME,
            Key: key,
            ResponseContentDisposition: `attachment; filename="${filename}"`
        });

        const url = await getSignedUrl(s3Client, command, { expiresIn: 900 }); // 15 minutes

        return res.status(200).json({ url });

    } catch (error: any) {
        console.error('Download URL generation failed:', error);
        // If the error comes from s3.ts initialization (unlikely to catch here as it's top level, but for runtime errors)
        return res.status(500).json({ error: 'Failed to generate download link', details: error.message });
    }
}
