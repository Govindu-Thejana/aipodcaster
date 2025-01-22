import { IconCloud } from "./ui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "react",
    "flutter",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "jest",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "androidstudio",
    "sonarqube",
    "kubernetes",
    "jenkins",
    "mysql",
    "mongodb",
    "tailwindcss",
    "python",
    "arduino",
    "cplusplus",
    "figma",
];

export function IconCloudDemo() {
    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
    );

    return (
        <div className="relative flex size-full w-full max-w-3xl items-center justify-center overflow-hidden rounded-lg bg-background">
            <IconCloud images={images} />
        </div>
    );
}
export default IconCloudDemo;