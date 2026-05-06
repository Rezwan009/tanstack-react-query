import { ArrowRight, Zap, Shield, Rocket } from "lucide-react";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { Link } from "react-router";

const Home = () => {
    return (
        <div className="max-w-[1000px] mx-auto px-16 text-center mt-12">
            <div className="space-y-6">
                <Badge variant="secondary" className="px-4 py-1.5 rounded-full text-primary border-primary/20 bg-primary/5">
                    React Router v7 + Tanstack Query
                </Badge>

                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-primary to-muted-foreground bg-clip-text text-transparent pb-2">
                    Modern Data Fetching <br /> Made Simple
                </h1>

                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    A premium starter kit demonstrating the power of TanStack Query for efficient,
                    cached, and optimistic UI updates in React.
                </p>

                <div className="flex items-center justify-center gap-4 pt-4">
                    <Link to="/posts">
                        <Button size="lg" className="h-12 px-8 rounded-full gap-2 hover:scale-105 active:scale-95 transition-all">
                            View Posts <ArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                    <Button variant="outline" size="lg" className="h-12 px-8 rounded-full hover:bg-muted/50 transition-all">
                        Documentation
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
                {[
                    { icon: Zap, title: "Blazing Fast", desc: "Built with Vite and TanStack Query for ultimate performance." },
                    { icon: Shield, title: "Type Safe", desc: "Fully typed API responses and state management." },
                    { icon: Rocket, title: "Modern Stack", desc: "Uses React 19, Tailwind 4, and shadcn/ui components." }
                ].map((feature, i) => (
                    <div key={i} className="p-8 rounded-[20px] bg-card border border-border/40 text-left hover:border-primary/20 transition-colors">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                            <feature.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {feature.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
