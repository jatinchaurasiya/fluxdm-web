"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroVideo() {
    return (
        <section className="relative -mt-20 pb-0 md:pb-20 px-4">
            <div className="container max-w-6xl mx-auto text-center">
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
