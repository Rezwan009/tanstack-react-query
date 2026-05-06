import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import PostModal from "./post/PostModal";
import { Link } from "react-router";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { createPost } from "../services/api";

const NavBar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const queryClient = useQueryClient();

    // const mutation = useMutation({
    //     mutationFn: (data) => createPost(data),
    //     onSuccess: () => {
    //         queryClient.invalidateQueries({ queryKey: ['posts'] });
    //         setIsModalOpen(false);
    //     },
    //     onError: (error) => {
    //         console.error("Error creating post:", error);
    //     }
    // });

    const handleCreatePost = (data) => {
        console.log("Creating post:", data);
        // mutation.mutate(data);
        setIsModalOpen(false)
    };

    return (
        <>
            <nav className="bg-card border-b border-border/40 sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="max-w-[1000px] mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <h1 className="text-xl font-bold bg-gradient-to-br from-primary to-muted-foreground bg-clip-text text-transparent">
                            Tanstack Query
                        </h1>
                        <ul className="flex gap-4">
                            <li>
                                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/posts" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Posts
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-primary text-primary-foreground rounded-lg flex items-center gap-2 hover:scale-110 active:scale-95 cursor-pointer"
                        >
                            <Plus className="w-4 h-4" /> Add Post
                        </Button>
                    </div>
                </div>
            </nav>

            <PostModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleCreatePost}
            />
        </>
    )
}

export default NavBar;