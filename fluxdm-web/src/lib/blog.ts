export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    readingTime: string;
    content: string;
    tags?: string[];
    image?: string;
}

const glob = import.meta.glob('../content/posts/*.md', { query: '?raw', import: 'default', eager: true });

export const getAllPosts = (): BlogPost[] => {
    return Object.entries(glob).map(([filepath, content]) => {
        const slug = filepath.split('/').pop()?.replace('.md', '') || '';

        // Basic Frontmatter Regex Parser
        const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
        const match = (content as string).match(frontmatterRegex);

        const metadata: Record<string, unknown> = {};
        let body = content as string;

        if (match) {
            const frontmatterBlock = match[1];
            body = (content as string).replace(frontmatterRegex, '').trim();

            frontmatterBlock.split('\n').forEach(line => {
                const [key, ...valueParts] = line.split(':');
                if (key && valueParts.length > 0) {
                    const value = valueParts.join(':').trim().replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
                    // Handle arrays like [a, b]
                    if (value.startsWith('[') && value.endsWith(']')) {
                        metadata[key.trim()] = value.slice(1, -1).split(',').map(s => s.trim().replace(/^['"](.*)['"]$/, '$1'));
                    } else {
                        metadata[key.trim()] = value;
                    }
                }
            });
        }

        // Calculate reading time
        const words = body.split(/\s+/).length;
        const minutes = Math.ceil(words / 200);
        const readingTime = `${minutes} min read`;

        return {
            slug,
            title: String(metadata.title || 'Untitled'),
            description: String(metadata.description || ''),
            date: String(metadata.date || new Date().toISOString()),
            author: String(metadata.author || 'FluxDM Team'),
            readingTime,
            content: body,
            tags: Array.isArray(metadata.tags) ? metadata.tags as string[] : [],
            image: metadata.image ? String(metadata.image) : undefined
        };
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
    const posts = getAllPosts();
    return posts.find(post => post.slug === slug);
};
