import TrainingHero from "@/components/teacher-training/TrainingHero";
import CourseLevels from "@/components/teacher-training/CourseLevels";
import CurriculumHighlights from "@/components/teacher-training/CurriculumHighlights";
import FacultyPreview from "@/components/teacher-training/FacultyPreview";
import FAQApplication from "@/components/teacher-training/FAQApplication";

export const metadata = {
    title: "Teacher Training | Arunayoga",
    description: "Join our Yoga Alliance certified teacher training programs. RYT 200, 300, & 500 hour courses available.",
};

export default function TeacherTrainingPage() {
    return (
        <main className="min-h-screen">
            <TrainingHero />
            <CourseLevels />
            <CurriculumHighlights />
            <FacultyPreview />
            <FAQApplication />
        </main>
    );
}
