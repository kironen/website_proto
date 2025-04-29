
import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: "cyclist-signaling-device",
    title: "Cyclist Signaling Device",
    description: "A proof of concept wearable signaling device for cyclists that improves communication using LED turn signals, a laser line projector, and electronic horn.",
    fullDescription: "For the LIFETank Engineering Competition hosted by ESC at UCI, I wanted to address the need for better communication between cyclists, drivers, and pedestrians, I designed and built a proof-of-concept wearable signaling device featuring LED turn signals, a laser line projector, and an electronic horn. The goal was to enhance cyclist visibility and predictability on the road while maintaining a compact, ergonomic design that could be worn comfortably. The system architecture centered around an Arduino Nano microcontroller controlling all outputs, with three buttons attached to the side of the index knuckle. Early research focused on identifying gaps in existing safety solutions, which guided the device's focus on adaptability and visibility in low-light and urban environments.\n\nThe prototyping process involved a multidisciplinary approach combining electronics, mechanical design, and software development. I began by creating schematics to route power efficiently to the LEDs, laser module, and sound system, writing custom Arduino firmware to handle fast and reliable input responses. After breadboarding, I soldered the final circuits onto an offcut perfboard. I also designed and 3D modeled a custom enclosure using Fusion 360, to encapsulate the electronics. I printed the casing using PLA filament due to material availability.\n\nField testing involved daytime, nighttime, and light rain conditions to assess visibility, durability, and functionality. Based on testing, I upgraded the LEDs for better daylight visibility, moved to a polycarbonate based filament, and added a low-battery warning indicator. The final prototype performed smoothly across the board: the LED turn signals provided clear directional intent, the laser line projector provided clear path intention, and the electronic horn offered a crucial safety mechanism for alerting others in dense urban traffic.\n\nThis project for me tested a wide range of skills, including Arduino programming, PCB prototyping and soldering, 3D modeling and printing, and full-cycle hardware product development. It also helped me in realizing how thoughtful, human-centered design can directly enhance urban mobility and safety. Building this device made me really excited for creating smart, practical solutions for cyclists and other vulnerable road users.",
    image: "https://i.imgur.com/ay51Xl5.png",
    additionalImages: [
      "https://i.imgur.com/Ijtyx0k.jpeg",
      "https://i.imgur.com/6ZMLbM5.png",
      "https://i.imgur.com/nVUrLb4.jpeg"
    ],
    tags: ["Arduino", "3D Printing", "Electronics", "Hardware"],
    github: "https://github.com",
    demo: "https://www.youtube.com/shorts/IBV8C0PIMO8?feature=share"
  },
  {
    id: "engr-7b-autonomous-rover",
    title: "ENGR 7B Autonomous Rover",
    description: "UCI Engineering class assignment designing a autonomous rover to follow a path and a claw to grab a can.",
    fullDescription: "As part of the ENGR 7B Rover Project, I led a team of five in designing and building an autonomous rover capable of following a track and grabbing a can of a specified color. The project challenged us to create the rover entirely from scratch, requiring a strong integration of mechanical, electrical, and software components. As team lead, I was responsible for delegating tasks, making key decisions on the system architecture, and contributing directly to the design process. Our collaborative effort and strategic approach gave us the fastest time in our class and put us in the finals.\n\nThe rover's navigation system was centered around three infrared (IR) sensors used to detect a black line on the competition track. Data from the sensors was processed by an Arduino microcontroller, which determined corrective motor commands to keep the rover accurately aligned. The drive system was powered by independently controlled rear motors, allowing for precise turns and adjustments. At the end of the track, a thick black line signaled the rover to switch modes, activating a PixyCam vision sensor to detect and locate a can of a designated color. Once within range, a simple actuator mechanism grabbed the can to complete the task autonomously.\n\nBeyond my leadership role, I also contributed heavily to the rover's mechanical design. I modeled the main chassis in SolidWorks, focusing on optimizing the weight distribution and mounting points for key components like the IR sensor array and camera system. The design was then laser cut from thin plywood and carefully assembled to ensure structural integrity and easy access for electronics maintenance. Close attention was given to modularity and balance to maximize the rover's stability and performance during high-speed line following and precision grabbing tasks.\n\nThis project utilized team leadership, Arduino programming, sensor integration, mechanical design with SolidWorks, and rapid prototyping techniques such as laser cutting. It also reinforced my ability to manage a complex project from conception to competition while ensuring that all technical components worked seamlessly together. Leading a high-performing team and delivering a competitive and reliable solution was really fun and rewarding.",
    image: "https://i.imgur.com/SYsLEIV.jpeg",
    additionalImages: [
      "https://i.imgur.com/17LwvzV.jpeg",
      "https://i.imgur.com/WYSFZ7U.png",
      "https://i.imgur.com/6d4iKE8.jpeg"
    ],
    tags: ["Arduino", "SolidWorks", "Robotics", "Team Leadership"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: "custom-headphones",
    title: "Custom Heaphones",
    description: "A design project for the CCPL Digital Media Lab to design audiophile level headphones with only desktop 3D printer.",
    fullDescription: "This AI-powered content generation tool helps creators and marketers produce high-quality content efficiently. Using OpenAI's API and Next.js, the application can generate blog posts, social media content, and marketing copy tailored to specific requirements and brand voice.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80",
    tags: ["Python", "OpenAI API", "Next.js", "TailwindCSS"],
    github: "https://github.com",
    demo: "https://www.instagram.com/reel/CvcXRVfxC18/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
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
