import { Icons } from "@/components/common/icons";
import { MainNavItem, NavItem } from "@/types";

export const siteConfig = {
    name: "Kalin Chakma",
    description: "A personal portfolio website",
    mainNav: [
        {
            title: "Blogs",
            href: "/blogs"
        },
        {
            title: "Explore Contributions",
            href: "/contributions"
        }
    ] satisfies MainNavItem[]
}

export const personalInfo = {
    name: "Kalin Chakma",
    description: "Software Engineer | Passionate about making electronic circuits into intelligence being",
    bio: "I am just a human species with complex molecules and other energy or particle simulations stuck on a binary system in augmented reality",
    email: "none.kalin.chakma@gmail.com",
    social: [
        {
            title: "Github",
            href: "https://github.com/kalinchkma",
            external: true,
            icon: Icons.gitHub
        },
        {
            title: "X",
            href: "https://x.com/mrnanashi10211",
            external: true,
            icon: Icons.x
        }
    ] satisfies NavItem[]
}

export const creationsConfig = {
    title: "Contributions"
}

export const blogsConfig = {
    title: "Blogs"
}