import { getAllPosts } from "@/lib/blog";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Legal";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FadeIn } from "@/components/ui/fade-in"; // Assuming this exists
import { Clock, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const BlogIndex = () => {
    const posts = getAllPosts();

    return (
        <AuroraBackground className="min-h-screen">
            {/* SEO */}
            <Helmet>
                <title>Blog | FluxDM - Instagram Automation Tips</title>
                <meta name="description" content="Read the latest insights on Instagram automation, growth hacking, and revenue generation with FluxDM." />
            </Helmet>

            <Navbar />

            <div className="container mx-auto px-4 pt-32 pb-20">
                <FadeIn>
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                            Latest from <span className="text-blue-600">FluxDM</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Strategies, guides, and updates to help you automate your growth and revenue.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                to={`/blog/${post.slug}`}
                                className="group relative bg-background/50 backdrop-blur-sm border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
                            >
                                {post.image && (
                                    <div className="aspect-video w-full overflow-hidden bg-muted">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                )}
                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-xs text-blue-600 font-medium mb-3">
                                        <span className="bg-blue-500/10 px-2 py-1 rounded-full">
                                            {post.tags?.[0] || 'Article'}
                                        </span>
                                        <span className="text-muted-foreground">•</span>
                                        <span className="text-muted-foreground">{new Date(post.date).toLocaleDateString()}</span>
                                    </div>

                                    <h2 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>

                                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                                        {post.description}
                                    </p>

                                    <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto">
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5" />
                                            <span>{post.readingTime}</span>
                                        </div>
                                        <div className="flex items-center text-blue-600 font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                            Read More <ArrowRight className="w-3.5 h-3.5 ml-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </FadeIn>
            </div>

            <Footer />
        </AuroraBackground>
    );
};

export default BlogIndex;
