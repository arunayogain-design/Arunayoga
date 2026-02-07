import BlogList from "@/components/blog/BlogList";

export const metadata = {
    title: "Blog | Arunayoga",
    description: "Read the latest insights on yoga, ayurveda, and holistic wellness from our experts.",
};

export default function BlogPage() {
    return (
        <main className="min-h-screen pt-20">
            <div className="bg-brand-light-blue/10 py-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl lg:text-5xl font-bold font-primary text-primary mb-4">Arunayoga Journal</h1>
                    <p className="text-lg text-gray-600">Thoughts, stories, and ideas from our community.</p>
                </div>
            </div>
            <BlogList />
        </main>
    );
}
