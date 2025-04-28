
import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: "signaling-device",
    title: "Cyclist Signaling Device",
    description: "A proof of concept wearable signaling device for cyclists that improves communication using LED turn signals, a laser line projector, and electronic horn.",
    fullDescription: "For the LIFETank Engineering Competition hosted by ESC at UCI, I wanted to address the need for better communication between cyclists, drivers, and pedestrians, I designed and built a proof-of-concept wearable signaling device featuring LED turn signals, a laser line projector, and an electronic horn. The goal was to enhance cyclist visibility and predictability on the road while maintaining a compact, ergonomic design that could be worn comfortably. The system architecture centered around an Arduino Nano microcontroller controlling all outputs, with three buttons attached to the side of the index knuckle. Early research focused on identifying gaps in existing safety solutions, which guided the device’s focus on adaptability and visibility in low-light and urban environments."
                      "The prototyping process involved a multidisciplinary approach combining electronics, mechanical design, and software development. I began by creating schematics to route power efficiently to the LEDs, laser module, and sound system, writing custom Arduino firmware to handle fast and reliable input responses. After breadboarding, I soldered the final circuits onto an offcut perfboard. I also designed and 3D modeled a custom enclosure using Fusion 360, to encapsulate the electronics. I printed the casing using PLA filament due to material availability. Field testing involved daytime, nighttime, and light rain conditions to assess visibility, durability, and functionality. Based on testing, I upgraded the LEDs for better daylight visibility, moved to a polycarbonate based filament,"
                      "and added a low-battery warning indicator. The final prototype performed smoothly across the board: the LED turn signals provided clear directional intent, the laser line projector provided clear path intention, and the electronic horn offered a crucial safety mechanism for alerting others in dense urban traffic. This project for me tested a wide range of skills, including Arduino programming, PCB prototyping and soldering, 3D modeling and printing, and full-cycle hardware product development. It also helped me in realizing how thoughtful, human-centered design can directly enhance urban mobility and safety. Building this device made me really excited for creating smart, practical solutions for cyclists and other vulnerable road users.",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: "project-management-tool",
    title: "Project Management Tool",
    description: "A collaborative project management application with real-time updates, task tracking, and team communication features.",
    fullDescription: "This project management tool enables teams to collaborate effectively with real-time updates, comprehensive task tracking, and integrated team communication features. Built with TypeScript and React, it leverages Firebase for real-time data synchronization and Material UI for a polished user interface.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["TypeScript", "React", "Firebase", "Material UI"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator",
    description: "An AI-powered application that generates blog posts, social media content, and marketing copy based on user inputs.",
    fullDescription: "This AI-powered content generation tool helps creators and marketers produce high-quality content efficiently. Using OpenAI's API and Next.js, the application can generate blog posts, social media content, and marketing copy tailored to specific requirements and brand voice.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80",
    tags: ["Python", "OpenAI API", "Next.js", "TailwindCSS"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: "personal-finance-tracker",
    title: "Personal Finance Tracker",
    description: "A responsive web application that helps users track expenses, set budgets, and visualize spending patterns with interactive charts.",
    fullDescription: "This personal finance management tool helps users take control of their finances through intuitive expense tracking, budget setting, and visual analytics. Built with React and Redux, it features interactive charts powered by Recharts and secure data storage with Firebase.",
    image: "https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    tags: ["React", "Redux", "Firebase", "Recharts"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: "weather-forecast-app",
    title: "Weather Forecast App",
    description: "A weather application that provides real-time forecasts, location-based services, and customizable alerts for severe weather conditions.",
    fullDescription: "This weather forecast application delivers accurate, real-time weather information with location-based services and customizable severe weather alerts. It's built as a Progressive Web App using JavaScript and the OpenWeather API, featuring interactive maps powered by Leaflet.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["JavaScript", "OpenWeather API", "Leaflet", "PWA"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: "recipe-sharing-platform",
    title: "Recipe Sharing Platform",
    description: "A community-driven platform where users can share, discover, and review recipes with advanced filtering and search capabilities.",
    fullDescription: "This recipe sharing platform brings food enthusiasts together in a community-driven space where they can share and discover recipes. Built with Vue.js and GraphQL, it features advanced search and filtering capabilities, user reviews, and a responsive design for optimal mobile experience.",
    image: "https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
    tags: ["Vue.js", "Node.js", "PostgreSQL", "GraphQL"],
    github: "https://github.com",
    demo: "https://example.com"
  }
];
