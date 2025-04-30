import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: "cyclist-signaling-device",
    title: "Cyclist Signaling Device",
    description: "A handlebar-mounted turn signal system for cyclists with wireless remote control and enhanced visibility features.",
    fullDescription: "The Cyclist Signaling Device is designed to enhance safety for urban cyclists by providing clear turn signals visible to motorists and pedestrians. The system consists of a handlebar-mounted display unit and a wireless thumb controller that allows cyclists to signal turns without removing hands from the handlebars.",
    image: "/lovable-uploads/Main.png",
    additionalImages: [
      "/lovable-uploads/Sketch.jpeg",
      "/lovable-uploads/Board.png",
      "/lovable-uploads/Laser.jpeg"
    ],
    tags: ["Product Design", "Electronics", "PCB Design", "Safety"],
    demo: "https://youtu.be/example1",
    github: "https://github.com/example/cyclist-signal"
  },
  {
    id: "smart-garden-system",
    title: "Smart Garden System",
    description: "An automated plant care system that monitors soil conditions and adjusts watering schedules to optimize plant health.",
    fullDescription: "The Smart Garden System is an IoT solution designed to automate plant care. It uses sensors to monitor soil moisture, temperature, and light levels, and automatically adjusts watering schedules to ensure optimal plant health. Users can monitor their garden's status and adjust settings remotely via a mobile app.",
    image: "/lovable-uploads/garden-system.jpg",
    additionalImages: [
      "/lovable-uploads/garden-sensor.jpg",
      "/lovable-uploads/garden-controller.jpg"
    ],
    tags: ["IoT", "Automation", "Sensors", "Mobile App"],
    demo: "https://youtu.be/example2",
    github: "https://github.com/example/smart-garden"
  },
  {
    id: "wearable-fitness-tracker",
    title: "Wearable Fitness Tracker",
    description: "A sleek fitness tracker that monitors heart rate, activity levels, and sleep patterns, providing users with insights into their health.",
    fullDescription: "The Wearable Fitness Tracker is designed to help users monitor and improve their health. It tracks heart rate, steps taken, calories burned, and sleep patterns. The device syncs with a mobile app to provide detailed analytics and personalized recommendations.",
    image: "/lovable-uploads/fitness-tracker.jpg",
    additionalImages: [
      "/lovable-uploads/tracker-display.jpg",
      "/lovable-uploads/tracker-app.png"
    ],
    tags: ["Wearable Tech", "Health", "Mobile App", "Data Analysis"],
    demo: "https://youtu.be/example3",
    github: "https://github.com/example/fitness-tracker"
  },
  {
    id: "autonomous-drone-delivery",
    title: "Autonomous Drone Delivery",
    description: "A drone-based delivery system that uses GPS and computer vision to autonomously deliver packages to designated locations.",
    fullDescription: "The Autonomous Drone Delivery system aims to revolutionize package delivery. Drones equipped with GPS and computer vision technology autonomously navigate to delivery locations, drop off packages, and return to base. The system is designed to be efficient, cost-effective, and environmentally friendly.",
    image: "/lovable-uploads/drone-delivery.jpg",
    additionalImages: [
      "/lovable-uploads/drone-navigation.jpg",
      "/lovable-uploads/drone-package.jpg"
    ],
    tags: ["Drones", "Automation", "GPS", "Computer Vision"],
    demo: "https://youtu.be/example4",
    github: "https://github.com/example/drone-delivery"
  },
  {
    id: "ai-powered-language-translator",
    title: "AI-Powered Language Translator",
    description: "A real-time language translation app that uses AI to provide accurate and natural-sounding translations.",
    fullDescription: "The AI-Powered Language Translator app allows users to translate spoken or written text in real-time. The app uses advanced AI algorithms to provide accurate and natural-sounding translations, making it easier to communicate with people from different linguistic backgrounds.",
    image: "/lovable-uploads/language-translator.jpg",
    additionalImages: [
      "/lovable-uploads/translator-interface.jpg",
      "/lovable-uploads/translator-output.png"
    ],
    tags: ["AI", "Machine Learning", "Mobile App", "Translation"],
    demo: "https://youtu.be/example5",
    github: "https://github.com/example/language-translator"
  }
];
