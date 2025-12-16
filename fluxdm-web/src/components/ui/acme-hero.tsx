"use client";


import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function AcmeHero() {
    return (
        <section className="relative pt-32 pb-20 px-4">
            <div className="container max-w-6xl mx-auto text-center">

                {/* Main Hero Content */}
                <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/60 mb-6 leading-tight">
                    Turn Specific <br />
                    <span className="text-foreground">Comments into Sales</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                    FluxDM automatically DMs your leads when they comment keywords like "PRICE" or "GUIDE".
                    <br className="hidden md:block" />
                    100% Desktop-Based. Secure.
                </p>

                <div className="flex flex-col items-center justify-center gap-6 mb-2 sm:mb-12">
                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                        <Button className="h-auto rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] w-full sm:w-auto hover:scale-105">
                            Get Lifetime Access Now
                        </Button>
                        <Button variant="outline" className="h-auto rounded-full border border-border/40 bg-zinc-900/50 px-8 py-4 text-lg font-medium text-muted-foreground transition-all hover:bg-accent hover:text-foreground w-full sm:w-auto">
                            Watch Demo
                        </Button>
                    </div>
                    <p className="text-sm text-zinc-500 font-medium">
                        ✨ Pay once, use forever. <span className="text-zinc-300">No monthly subscriptions.</span>
                    </p>
                </div>

                {/* 3D Dashboard/Video Container */}
                <div className="relative mx-auto w-full max-w-5xl perspective-[1000px]">
                    <ContainerScroll
                        titleComponent={
                            <>
                                {/* Clean Title Component */}
                            </>
                        }
                    >
                        <div className="w-full h-full bg-black rounded-2xl overflow-hidden">
                            <iframe
                                src="https://clueso.site/embed/y9fcytkkxgeb5ht3"
                                className="w-full h-full border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                title="FluxDM Demo Video"
                            ></iframe>
                        </div>
                    </ContainerScroll>
                </div>

            </div>
        </section>
    );
}

