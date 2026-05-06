import { fetchPosts } from "../services/api";
import { useQuery } from "@tanstack/react-query";

const TanstackQuery = () => {
    const { data: posts, isLoading, isError, error } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts
    });

    if (isLoading) {
        return (
            <div className="max-w-[1000px] mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                        Tanstack Query
                    </h1>
                    <p className="text-slate-400 text-lg">Fetching posts with TanStack Query...</p>
                </div>
                <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="h-[200px] bg-white/5 relative overflow-hidden rounded-[20px] border border-white/10">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="max-w-[1000px] mx-auto px-6 py-12">
                <div className="bg-red-500/10 border border-red-500/20 text-red-300 p-6 rounded-xl text-center">
                    <h2 className="text-xl font-bold mb-2">Oops! Something went wrong</h2>
                    <p>{error.message}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-[1000px] mx-auto px-6 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                    Tanstack Query
                </h1>
                <p className="text-slate-400 text-lg">Explore the latest posts fetched efficiently from the API.</p>
            </div>
            
            <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
                {posts.map((post) => (
                    <div key={post.id} className="group bg-slate-800/50 backdrop-blur-xl rounded-[20px] p-7 shadow-lg border border-white/10 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col gap-4 relative overflow-hidden hover:-translate-y-2 hover:scale-[1.02] hover:border-sky-500/40 hover:shadow-2xl">
                        {/* Hover glow effect */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        
                        <div className="bg-sky-500/10 text-sky-400 text-[0.75rem] font-bold px-3 py-1 rounded-full w-fit border border-sky-500/20 relative z-10">
                            Post #{post.id}
                        </div>
                        <h2 className="m-0 text-xl font-bold text-slate-50 leading-tight capitalize relative z-10">
                            {post.title}
                        </h2>
                        <p className="m-0 text-base text-slate-400 leading-relaxed relative z-10">
                            {post.body}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TanstackQuery;