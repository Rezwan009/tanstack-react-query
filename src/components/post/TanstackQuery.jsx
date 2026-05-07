import { fetchPosts } from "../../services/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useState } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/Pagination";

const TanstackQuery = () => {
    const [page, setPage] = useState(1);
    const { data: posts, isLoading, isError, error } = useQuery({
        queryKey: ["posts", page],
        queryFn: () => fetchPosts({ page }),
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
        refetchOnWindowFocus: true,
        refetchOnMount: true,
        // refetchInterval: 5000,
        placeholderData: keepPreviousData,
        refetchOnReconnect: true
    });

    const totalPages = Math.ceil(100 / 10);

    if (isLoading) {
        return (
            <div className="max-w-[1000px] mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-br from-primary to-muted-foreground bg-clip-text text-transparent">
                        Tanstack Query
                    </h1>
                    <p className="text-muted-foreground text-lg">Fetching posts with TanStack Query...</p>
                </div>
                <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <Card key={i} className="h-[200px] relative overflow-hidden border-border/40">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent animate-shimmer"></div>
                        </Card>
                    ))}
                </div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="max-w-[1000px] mx-auto px-6">
                <div className="bg-destructive/10 border border-destructive/20 text-destructive p-6 rounded-xl text-center">
                    <h2 className="text-xl font-bold mb-2">Oops! Something went wrong</h2>
                    <p>{error.message}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-[1000px] mx-auto px-16 py-12">
            <div className="text-center mb-12 mt-12">
                <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-br from-primary to-muted-foreground bg-clip-text text-transparent">
                    Explore the latest posts fetched efficiently from the API.
                </h1>
            </div>

            <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
                {posts.map((post) => (
                    <Card key={post.id} className="group relative overflow-hidden border-border/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20">
                        {/* Subtle background glow on hover */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(var(--primary),0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                        <CardHeader>
                            <div className="flex items-center justify-between gap-4">
                                <Badge variant="secondary" className="font-mono text-xs">
                                    Post #{post.id}
                                </Badge>
                            </div>
                            <CardTitle className="line-clamp-2 capitalize group-hover:text-primary transition-colors">
                                {post.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="line-clamp-4 leading-relaxed">
                                {post.body}
                            </CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="mt-12 flex justify-center">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                onClick={() => setPage((p) => Math.max(1, p - 1))}
                                disabled={page === 1}
                                className={page === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                            />
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationLink isActive>{page}</PaginationLink>
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationNext
                                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                                disabled={page === totalPages}
                                className={page === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"} />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
};

export default TanstackQuery;