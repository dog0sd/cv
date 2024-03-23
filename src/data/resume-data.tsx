import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Grigory Konoplich",
  initials: "GK",
  location: "Warsaw, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Warsaw",
  about:
    "DevOps Engineer",
  summary:
    "As a DevOps Engineer I focus on reliability of systems and streamlining of CI/CD processes",
  avatarUrl: "https://avatars.githubusercontent.com/u/44264912?v=4",
  personalWebsiteUrl: "https://dog0sd.net",
  contact: {
    email: "grisha.konoplich0@gmail.com",
    tel: "+48790415714",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Grigoriy0",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/grigoriy0/",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "Belarussian University of Informatics and Radioelectronics",
      degree: "Bachelor's Degree in Computing Machines, Systems and Networks",
      start: "2018",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Godel Technologies Europe",
      link: "https://www.godeltech.com",
      title: "DevOps Engineer",
      badges: [],
      start: "2024",
      end: "now",
      description: "Maintaining MongoDB clusters"
    },
    {
      company: "Syberry",
      link: "https://www.syberry.com",
      title: "DevOps Engineer",
      badges: [],
      start: "2020",
      end: "2024",
      description: "Setting up complex pipelines for many types of applications. Migration pipelines from Jenkins to GitLab CI. Improving CI processes on projects and the efciency of development teams. Deployment of dockerized applications to AWS ECS, Lambda, EC2 instances, Azure App Services, and Azure Functions.  Setting up full production infrastructure in AWS and Azure with Terraform. Designing observability infrastructure components: incidents tracking, metrics dashboards in AWS. Creating custom GitLab runners on Fargate executors to save costs in AWS. Maintaining Terraform and Terraspace projects up to date. Writing Terraform modules for AWS and Azure resources. Linux and Windows servers administration."
    }
  ],
  skills: [
    "AWS",
    "Azure",
    "Terraform",
    "Kubernetes",
    "Docker",
    "Linux",
    "Python",
    "Golang"
  ],
  projects: [
    {
      title: "Peredelano Platform",
      techStack: [
        "Side Project",
        "Terraform",
        "AWS",
        "Java",
        "GitLab CI"
      ],
      description: "A platform for quick start for startups",
      logo: ConsultlyLogo,
      link: {
        label: "platform.peredelano.com",
        href: "https://platform.peredelano.com",
      },
    },
    {
      title: "dog0sd.net",
      techStack: ["Side Project", "quartz"],
      description:
        "My personal website. Built with Quartz.js and based on Obsidian notes",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://dog0sd.net/",
      },
    }
  ],
} as const;
