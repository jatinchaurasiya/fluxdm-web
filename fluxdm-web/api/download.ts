import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getDownloadUrl } from './s3.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { platform } = req.query;

        if (!platform || (platform !== 'windows' && platform !== 'mac')) {
            return res.status(400).json({ error: 'Invalid platform. Must be "windows" or "mac".' });
        }

        const fileName = platform === 'windows'
            ? 'FluxDM-Setup-0.0.8.exe'
            : 'FluxDM-0.0.8-arm64.dmg';

        const url = await getDownloadUrl(fileName);

        return res.status(200).json({ url });

    } catch (error: any) {
        console.error('Download URL generation failed:', error);
        return res.status(500).json({ error: 'Failed to generate download link' });
    }
}
