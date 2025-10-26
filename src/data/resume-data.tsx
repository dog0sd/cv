import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Grigory Konoplich",
  initials: "GK",
  location: "Warsaw, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Warsaw",
  about: "DevOps Engineer with a passion for automation and observability.",
  summary: (
    <>
      DevOps Engineer with a passion for automation and observability.
      Experienced in 
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/44264912?v=4",
  personalWebsiteUrl: "https://dog0sd.net",
  contact: {
    email: "ryhorkanoplich@gmail.com",
    tel: "+48*********",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/dog0sd",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/grigoriy0/",
        icon: "linkedin",
      }
    ],
  },
  education: [
    {
      school: "Belarussian University of Informatics and Radioelectronics",
      degree: "Bachelor's Degree in Computing Machines, Systems and Networks",
      start: "2018",
      end: "2022",
    }
  ],
  work: [
    {
      company: "Godel Technologies Europe",
      link: "https://www.godeltech.com",
      title: "DevOps Engineer",
      badges: ["FullTime", "Azure", "GitHub Actions"],
      start: "2024",
      end: null,
      description: (
        <>
        Responsible for project infrastructure and monitoring.
        <ul className="list-inside list-disc">
            <li>
              Adopting IaC best practices using Terraform resulting in faster and more reliable deployments. 
            </li>
            <li>
              Optimizing monitoring and alerting systems in Prometheus and Grafana.
            </li>
            <li>
              Responding to production live incidents and collaborating with the team to resolve them.
            </li>
            <li>
              Enforcing cloud infrastructure security compliance and DevSecOps best practices.
            </li>
            <li>
              Migrating from Jenkins to GitHub Actions, from ELK to ALPG.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Syberry",
      link: "https://www.syberry.com",
      title: "DevOps Engineer",
      badges: ["FullTime", "AWS", "Azure", "GitLab CI"],
      start: "2020",
      end: "2024",
      description: (
        <>
          Responsible for maintaining different projects infrastructure.
          <ul className="list-inside list-disc">
            <li>
              Setting up complex pipelines for many types of applications. 
            </li> 
            <li>
              Migration pipelines from Jenkins to GitLab CI. 
            </li>
            <li>
              Improving CI processes on projects and the efficiency of development teams. 
            </li>
            <li>
              Deployment of dockerized applications to AWS ECS, Lambda, EC2 instances, Azure App Services, and Azure Functions.
            </li>
            <li>
              Made most efficient serverless runners for GitLab CI.
            </li>
            <li>
              Setting up full production infrastructure in AWS and Azure with Terraform.
            </li>
            <li>
              Designing observability infrastructure components: incidents tracking, metrics dashboards in AWS.
            </li>
            <li>
              Maintaining Terraform and Terraspace projects up to date.
            </li>
            <li>
              Writing Terraform modules for AWS and Azure resources.
            </li>
            <li>
              Linux and Windows servers administration. 
            </li>
          </ul>
        </>
      ),
    }
  ],
  skills: [
    "AWS",
    "Azure",
    "Terraform",
    "Kubernetes",
    "Docker",
    "Linux",
    "Ansible",
    "Bash",
    "Python",
    "Golang",
    "Istio",
    "GitLab CI",
    "GitHub Actions",
    "Jenkins",
    "Prometheus",
    "Grafana",
    "Grafana Stack",
    "ELK",
    "Power BI"
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
      link: {
        label: "platform.peredelano.com",
        href: "https://platform.peredelano.com",
      },
    },
    {
      title: "Shakell",
      techStack: [
        "Side Project",
        "Java",
        "Docker",
        "GitLab CI"
      ],
      description: "A platform for quick start for startups",
      link: {
        label: "shakell.ru",
        href: "https://shakell.ru",
      },
    },
    {
      title: "dog0sd.net",
      techStack: ["Side Project", "quartz"],
      description:
        "My personal website. Built with Quartz.js and based on Obsidian notes",
      link: {
        label: "github.com",
        href: "https://dog0sd.net/",
      },
    }
  ],
} as const;
