import { useEffect } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import { getPostBySlug } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Legal";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowLeft, Clock, Calendar, Share2, MoveRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = getPostBySlug(slug || '');

    useEffect(() => {
        if (!post) {
            // navigate('/blog'); // Optional: redirect if not found
        }
    }, [post, navigate]);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Post not found</h1>
                    <Link to="/blog">
                        <Button>Back to Blog</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            {/* SEO */}
            <Helmet>
                <title>{post.title} | FluxDM Blog</title>
                <meta name="description" content={post.description} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.description} />
                {post.image && <meta property="og:image" content={window.location.origin + post.image} />}
                <meta property="article:published_time" content={post.date} />
                <meta property="article:author" content={post.author} />

                {/* JSON-LD Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": post.title,
                        "image": post.image ? [window.location.origin + post.image] : [],
                        "datePublished": post.date,
                        "author": [{
                            "@type": "Person",
                            "name": post.author,
                        }]
                    })}
                </script>
            </Helmet>

            <Navbar />

            <article className="pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <FadeIn>
                        {/* Header */}
                        <div className="mb-10">
                            <Link to="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-blue-600 transition-colors mb-8 group">
                                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                                Back to Blog
                            </Link>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                                </span>
                                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted">
                                    <Clock className="w-3.5 h-3.5" />
                                    {post.readingTime}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-foreground leading-tight">
                                {post.title}
                            </h1>

                            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed border-l-4 border-blue-600 pl-6 my-8 italic">
                                {post.description}
                            </p>

                            {/* Author */}
                            <div className="flex items-center justify-between border-y border-border py-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                                        {post.author.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-semibold">{post.author}</div>
                                        <div className="text-xs text-muted-foreground">Editor @ FluxDM</div>
                                    </div>
                                </div>
                                <Button variant="ghost" size="sm" className="gap-2" onClick={() => {
                                    navigator.share?.({
                                        title: post.title,
                                        url: window.location.href
                                    }).catch(() => { });
                                }}>
                                    <Share2 className="w-4 h-4" />
                                    <span className="hidden sm:inline">Share</span>
                                </Button>
                            </div>
                        </div>

                        {/* Featured Image */}
                        {post.image && (
                            <div className="aspect-video w-full rounded-2xl overflow-hidden mb-12 shadow-2xl">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        {/* Content */}
                        <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 prose-img:rounded-xl prose-img:shadow-lg max-w-none">
                            <ReactMarkdown
                                components={{
                                    code({ inline, className, children, ...props }: any) {
                                        const match = /language-(\w+)/.exec(className || '')
                                        return !inline && match ? (
                                            <SyntaxHighlighter
                                                style={vscDarkPlus}
                                                language={match[1]}
                                                PreTag="div"
                                                {...props}
                                            >
                                                {String(children).replace(/\n$/, '')}
                                            </SyntaxHighlighter>
                                        ) : (
                                            <code className={className} {...props}>
                                                {children}
                                            </code>
                                        )
                                    }
                                }}
                            >
                                {post.content}
                            </ReactMarkdown>
                        </div>
                    </FadeIn>

                    {/* CTA Section */}
                    <div className="mt-20">
                        <FadeIn delay={0.2}>
                            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-center text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                                <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">Ready to automate your growth?</h2>
                                <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto relative z-10">
                                    Join thousands of creators using FluxDM to turn comments into revenue.
                                </p>
                                <Button size="lg" variant="secondary" className="font-semibold h-12 px-8 rounded-full relative z-10 shadow-xl hover:scale-105 transition-transform">
                                    Get FluxDM Free <MoveRight className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </article>

            <Footer />
        </div>
    );
};

export default BlogPost;
