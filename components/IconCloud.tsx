import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];

const IconCloudDemo = () => {
    return (
        <div className="relative flex w-full max-w-3xl items-center justify-center overflow-hidden rounded-lg border-gray-300 px-0 sm:px-10 md:px-20 mt-0 mb-0 pt-0">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}
export default IconCloudDemo;

