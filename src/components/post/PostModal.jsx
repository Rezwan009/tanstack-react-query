import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Label } from "@/components/ui/Label";

const PostModal = ({ isOpen, onClose, onSubmit }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] bg-card border-border/40 backdrop-blur-xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold bg-gradient-to-br from-primary to-muted-foreground bg-clip-text text-transparent">
                        Create New Post
                    </DialogTitle>
                    <DialogDescription className="text-muted-foreground">
                        Share your thoughts with the world. Fill in the details below.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    onSubmit(Object.fromEntries(formData));
                }}>
                    <div className="grid gap-6 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="title" className="text-sm font-medium">
                                Title
                            </Label>
                            <Input
                                id="title"
                                name="title"
                                placeholder="Enter post title..."
                                className="bg-background/50 border-border/40 focus-visible:ring-primary/20"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="body" className="text-sm font-medium">
                                Content
                            </Label>
                            <Textarea
                                id="body"
                                name="body"
                                placeholder="What's on your mind?"
                                className="min-h-[120px] bg-background/50 border-border/40 focus-visible:ring-primary/20"
                                required
                            />
                        </div>
                    </div>
                    
                    <DialogFooter className="gap-2 sm:gap-0">
                        <Button 
                            type="button" 
                            variant="ghost" 
                            onClick={onClose}
                            className="hover:bg-muted/50 cursor-pointer"
                        >
                            Cancel
                        </Button>
                        <Button type="submit" className="bg-primary hover:bg-primary/90 hover:scale-110 active:scale-95 cursor-pointer">
                            Create Post
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default PostModal;