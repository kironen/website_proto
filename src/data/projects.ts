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
    fullDescription: "As part of the ENGR 7B Rover Project, I led a team of five in designing and building an autonomous rover capable of following a track and grabbing a can of a specified color. The project challenged us to create the rover entirely from scratch, requiring a strong integration of mechanical, electrical, and software components. As team lead, I was responsible for delegating tasks, making key decisions on the system architecture, and contributing directly to the design process. Our collaborative effort and strategic approach gave us the fastest time in our class and put us in the finals.\n\nThe rover's navigation system was centered around three infrared (IR) sensors used to detect a black line on the competition track. Data from the sensors was processed by an Arduino microcontroller, which determined corrective motor commands to keep the rover accurately aligned. The drive system was powered by independently controlled rear motors, allowing for precise turns and adjustments. At the end of the track, a thick black line signaled the rover to switch modes, activating a PixyCam vision sensor to detect and locate a can of a designated color. Once within range, a simple actuator mechanism grabbed the can to complete the task autonomously.\n\nBeyond the leadership aspect, I also contributed heavily to the rover's mechanical design. I modeled the main chassis in SolidWorks, focusing on optimizing the weight distribution and mounting points for key components like the IR sensor array and camera system. The design was then laser cut from thin plywood and carefully assembled to ensure structural integrity and easy access for electronics maintenance. Close attention was given to modularity and balance to maximize the rover's stability and performance during high-speed line following and precision grabbing tasks.\n\nThis project utilized team leadership, Arduino programming, sensor integration, mechanical design with SolidWorks, and rapid prototyping techniques such as laser cutting. It also reinforced my ability to manage a complex project from conception to competition while ensuring that all technical components worked seamlessly together. Leading a high-performing team and delivering a competitive and reliable solution was really fun and rewarding.",
    image: "https://i.imgur.com/SYsLEIV.jpeg",
    additionalImages: [
      "https://i.imgur.com/17LwvzV.jpeg",
      "https://i.imgur.com/WYSFZ7U.png",
      "https://i.imgur.com/6d4iKE8.jpeg"
    ],
    tags: ["Arduino", "SolidWorks", "Robotics", "Team Leadership"],
    github: "https://github.com",
    demo: "https://youtube.com/shorts/10yv3xw_rP0?feature=share"
  },
  {
    id: "custom-headphones",
    title: "Custom Designed Headphones",
    description: "A design project for the CCPL Digital Media Lab to design audiophile level headphones with only desktop 3D printer.",
    fullDescription: "This project began as a challenge to design and build a pair of fully functional, custom 3D-printed headphones from scratch — combining audio hardware integration with precise mechanical design and visual aesthetics. Inspired by high-end over-ear headphones, I wanted to prototype a unique pair that offered not just audio performance but striking aesthetic choices. The entire process, from CAD modeling to final assembly, was an exploration in mechanical engineering, iterative prototyping, and product design. \n\nUsing Fusion 360, I based the design off of the Armadillo headphones from deDesigned and heavily modified the model with a focus on adjustability and comfort. Key mechanical components — including the flexible headband, rotating ear cups, and cable strain reliefs — were modeled while keeping in mind key tolerances. I printed all visible parts with PETG for strength and flexibility and then finished the prints with sanding to achieve a matte finish. \n\nInternally, I integrated a pair of 40mm audio drivers, securely mounted inside the housings and sporting a semi-open back design. Wiring was soldered manually, routed cleanly through the headband, and terminated in a custom 3.5mm auxiliary cable. TPU ear pads were engineered with custom gyroid infill gradients to achieve foam-like softness and a flexible headband made the headphones comfortable for even long-term use. Careful attention was paid to wire management, tolerances, and the human-product interface. \n\nThis project really challenged my skills in 3D modeling, 3D printing, finishing techniques, and electronic integration, while also reinforcing my appreciation for user-centered design and physical craftsmanship. The final result was a fully functional set of headphones that not only performs well sonically but also reflects a strong sense of design which I am really proud of and passionate about!",
    image: "https://i.imgur.com/gT4yamk.jpeg",
    additionalImages: [
      "https://i.imgur.com/a90f1A0.png",
    ],
    tags: ["Product Design", "3D Printing", "GD&T", "Creativity"],
    github: "https://github.com",
    demo: "https://www.instagram.com/reel/CvcXRVfxC18/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: "parametric-saxophone-mouthpiece",
    title: "Parametric Saxophone Mouthpiece",
    description: "A responsive web application that helps users track expenses, set budgets, and visualize spending patterns with interactive charts.",
    fullDescription: "As a saxophone player, I was really inspired by the design philosophy of Syos, which is a company specializing in custom mouthpieces for musicians. This project involved developing a fully parametric 3D model of a saxophone mouthpiece which would allow for rapid customization of critical acoustic and airflow properties. The goal was to create a platform for experimenting with how internal geometry could affect tone, projection, and playability, while using 3D printing and parametric modeling as tools for iterative design. \n\nThe mouthpiece was developed in Fusion 360, where I built a fully parametric CAD model enabling real-time adjustments to variables such as tip opening, baffle shape, chamber volume, beak profile, and facing length. These parameters could be fine-tuned with precision, enabling fast generation of many designs tailored for different player preferences or performance sounds. I referenced Selmer and Yamaha drawings and mouthpiece research to create a rudimentary mouthpiece design and then began modifying them and testing pieces. \n\nEach prototype was 3D printed on FDM machines and post-processed with wet sanding and polishing to ensure an airtight seal on the table and rails. Several versions were tested with different reed strengths, and I played each one to evaluate tonal characteristics, ease of articulation, and dynamic response. I also got feedback from other saxophonists to incorporate into later designs. \n\nThis project really challenged and helped me learn so much about parametric modeling, acoustic design, and precision 3D printing in a real-world musical application. It also deepened my understanding of how subtle design choices impact user experience in a performance context. The result is a versatile toolset for prototyping saxophone mouthpieces with moderate performance but customized to the player’s tone and playing style. I was really excited working on this project as it bridged the gap between engineering and musical artistry.",
    image: "https://i.imgur.com/jgnl5g8.png",
    additionalImages: [
      "https://i.imgur.com/yJtkDT5.jpeg",
      "https://i.imgur.com/fqJxj9N.jpeg",
      "https://i.imgur.com/7qp5mpy.jpeg"
    ],
    tags: ["Acoustics", "Parametric Modeling", "Testing", "Surface Finishing"],
    github: "https://github.com",
    demo: "https://example.com"
  },
];
