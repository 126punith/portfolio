export const resume = {
  name: "Punith Manthri",
  title: "Senior React Native Engineer | Mobile Systems, JSI & Native Module Development",
  shortTitle: "Senior React Native Engineer",
  headline:
    "I build the mobile-systems layer of enterprise React Native apps: JSI and native modules, offline-first sync and background GPS, shipped to fleets of 800+ drivers.",
  proof: [
    { value: "5+", label: "Years shipping RN" },
    { value: "390K+", label: "npm downloads" },
    { value: "800+", label: "Drivers & agents" },
    { value: "99.5%", label: "Production uptime" },
  ],
  location: "Bangalore, India",
  email: "punithm865@gmail.com",
  phone: "+91 79753 07336",
  availability: "Open to remote opportunities; available for immediate or short-notice joining",

  social: {
    linkedin: "https://www.linkedin.com/in/punithmanthri",
    github: "https://github.com/126punith",
    x: "https://x.com/punith_manthri",
    npm: "https://www.npmjs.com/~punith_manthri",
  },

  summary:
    "Senior React Native engineer with 5+ years designing the mobile-systems layer of enterprise Android and iOS apps in TypeScript and JavaScript. I specialize in bridging JavaScript and native code through Native Modules, JSI, TurboModules, Fabric and Hermes, and in the hard problems underneath the UI: offline-first data sync, background GPS and upload services, route optimization, API batching and caching, and memory and bundle performance. Maintainer of open-source React Native infrastructure led by react-native-pdf-jsi (390K+ npm downloads, 4.8/5), a JSI-based PDF renderer used in production. Shipped fleet and healthcare systems for 800+ drivers and agents at 99.5% uptime, 5,000+ daily deliveries and users across 5+ countries, owning architecture, native integration, CI/CD, code review and mentoring end to end.",

  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Kotlin", "Java", "Objective-C"],
    },
    {
      category: "Mobile",
      items: [
        "React Native",
        "Expo",
        "React Native CLI",
        "Hermes",
        "React Hooks",
        "React Navigation",
        "Deep Linking",
        "Push Notifications (FCM/APNs)",
        "Bluetooth Low Energy (BLE)",
        "Wearable SDK Integration",
      ],
    },
    {
      category: "Native",
      items: [
        "Native Modules",
        "JSI",
        "JNI",
        "TurboModules",
        "Fabric",
        "Android (Java/Kotlin)",
        "iOS (Objective-C)",
        "Gradle",
        "CocoaPods",
        "Android Studio",
        "Xcode",
      ],
    },
    {
      category: "Architecture",
      items: [
        "Mobile System Design",
        "Offline-First",
        "Background Services",
        "Clean Architecture",
        "Redux Toolkit",
        "Context API",
        "MobX",
        "RBAC/Auth (OAuth, JWT)",
      ],
    },
    {
      category: "Backend & Data",
      items: [
        "Node.js",
        "REST APIs",
        "GraphQL",
        "WebSocket",
        "MongoDB",
        "SQLite",
        "MMKV",
        "AsyncStorage",
        "Firebase",
        "API Batching & Caching",
      ],
    },
    {
      category: "DevOps & Quality",
      items: [
        "Git",
        "GitHub Actions",
        "CI/CD",
        "Fastlane",
        "App Store",
        "Google Play",
        "Performance Profiling",
        "Memory & Bundle Optimization",
        "Unit/Integration Testing",
      ],
    },
  ],

  experience: [
    {
      company: "Utilitarian Labs",
      role: "React Native Developer (Senior)",
      location: "Bangalore, India",
      period: "May 2025 – Sept 2026",
      bullets: [
        "Led architecture of enterprise logistics and field-force apps on Android and iOS serving 800+ drivers and agents at 99.5% uptime, owning the mobile system design, native integration and release strategy",
        "Designed a background GPS tracking engine on a native Android foreground service with JSI-backed batching, delivering sub-30-second location updates and cutting driver idle time 35% by feeding a live route optimization layer (Google Maps)",
        "Architected an offline-first trip and delivery flow backed by local persistence and RBAC-secured REST APIs, sustaining 5,000+ daily deliveries with reliable sync on unstable field networks",
        "Delivered a digital proof-of-delivery (POD) pipeline with on-device capture and deferred upload that cut paper workflows 90% across the fleet",
        "Shipped the Rockland field-agent app with geofencing, KPI dashboards and SAP/Salesforce integration, lifting agent productivity 40%",
        "Owned GitHub Actions–backed release automation to the App Store and Google Play, and drove Agile/Scrum delivery through code reviews and cross-functional work with backend and product",
      ],
    },
    {
      company: "MyCLNQ Health",
      role: "Software Development Engineer I",
      location: "Bangalore, India",
      period: "July 2024 – May 2025",
      bullets: [
        "Owned the MYCLNQ Requester healthcare appointment app end to end, shipping Android and iOS store releases to users across 5+ countries",
        "Architected a multi-region payments layer (Stripe, Xendit, Credimax) behind a unified interface with OAuth/JWT-secured transaction flows, isolating per-country provider differences from product code",
        "Optimized cold start and navigation by 35% through bundle splitting and Hermes tuning, reducing time-to-interactive for first-time users",
        "Built a real-time Firebase chat with Crashlytics/Analytics observability at 99.9% uptime, and implemented deep linking that improved retention 40%",
        "Integrated the NerveFit smartwatch SDK over Bluetooth Low Energy (BLE) by wrapping the native Android/iOS SDK in a React Native native module, handling scanning, pairing, auto-reconnection and background sync of health vitals",
      ],
    },
    {
      company: "AMCI Edtech Pvt. Ltd",
      role: "Frontend Developer",
      location: "Bangalore, India",
      period: "Dec 2023 – May 2024",
      bullets: [
        "Built the zlipp medical-education app with interactive 3D modules that lifted learner engagement 60%",
        "Designed a reusable component library that standardized UI across screens and cut feature delivery time 30%",
      ],
    },
    {
      company: "CognitiveClouds",
      role: "Associate Software Engineer",
      location: "Bangalore, India",
      period: "Sept 2022 – Oct 2023",
      bullets: [
        "Delivered Sewamo (Razorpay payments, auth, store releases), WindEverest EV weather tracking, and cleanZ24 laundry with Google Maps route optimization",
        "Partnered with a Rails backend on REST APIs serving 10,000+ monthly active users, and reduced API latency 50% via request caching and improved data modeling",
        "Contributed to code reviews and shared reusable patterns across the mobile team",
      ],
    },
    {
      company: "thesquareware",
      role: "Junior Software Engineer",
      location: "Bangalore, India",
      period: "Dec 2021 – Sept 2022",
      bullets: [
        "Shipped the Pola and Simply-Cooked apps with Expo, offline storage (AsyncStorage), real-time chat and role-based auth",
        "Built a shared component library and patterns that increased team delivery velocity 25%",
      ],
    },
    {
      company: "thesquareware",
      role: "React Native Developer (Apprenticeship)",
      location: "Bangalore, India",
      period: "July 2021 – Dec 2021",
      bullets: [
        "Completed a React Native apprenticeship building foundational mobile features with Redux state management and Git-based collaboration",
      ],
    },
  ],

  projects: [
    {
      name: "react-native-pdf-jsi",
      description:
        "High-performance PDF rendering for Android and iOS built directly on JSI native modules. Binding native rendering through JSI eliminates the bridge bottleneck, with full TypeScript support and Hermes-friendly native integration.",
      url: "https://www.npmjs.com/package/react-native-pdf-jsi",
      github: "https://github.com/126punith/react-native-pdf-jsi",
      npmPackage: "react-native-pdf-jsi",
      downloads: "390,000+",
      period: "Jan 2023 – Present",
      highlights: [
        "390K+ npm downloads with a 4.8/5 community rating",
        "~3x faster rendering vs bridge-based alternatives",
        "Adopted in production document and reporting apps",
      ],
    },
    {
      name: "react-native-nitro-cloud-uploader",
      description:
        "Background, resume-aware cloud upload engine with multi-provider plugins for large files on Android and iOS.",
      url: "https://www.npmjs.com/package/react-native-nitro-cloud-uploader",
      npmPackage: "react-native-nitro-cloud-uploader",
      downloads: "80,000+",
      period: "June 2023 – Present",
      highlights: [
        "Battery-efficient background uploads with progress reporting",
        "Automatic retries and resume-on-failure",
        "Pluggable providers: new storage backends drop in without touching core logic",
      ],
    },
    {
      name: "react-native-sync-vault",
      description:
        "Offline-first synchronization engine with SQLite persistence and network request interception.",
      url: "https://www.npmjs.com/package/react-native-sync-vault",
      npmPackage: "react-native-sync-vault",
      downloads: "362+",
      period: "Jan 2024 – Present",
      highlights: [
        "Bi-directional sync with conflict resolution",
        "Network- and battery-aware scheduling keeps apps usable offline",
        "Plugin-friendly API for custom backends",
      ],
    },
  ],

  achievements: [
    {
      label: "Open Source Impact",
      value: "390K+",
      detail: "npm downloads for react-native-pdf-jsi, a production-grade JSI PDF renderer",
    },
    {
      label: "Enterprise Scale",
      value: "800+",
      detail: "Drivers and agents on fleet apps running at 99.5% uptime",
    },
    {
      label: "Digital POD",
      value: "90%",
      detail: "Less paperwork across 5,000+ daily deliveries",
    },
    {
      label: "Native Performance",
      value: "3x",
      detail: "Faster PDF rendering via JSI vs bridge-based alternatives",
    },
    {
      label: "Global Reach",
      value: "5+",
      detail: "Countries served through a multi-region healthcare payments layer",
    },
    {
      label: "Load Time Wins",
      value: "35–50%",
      detail: "Faster app load times through Hermes tuning and bundle optimization",
    },
  ],

  recentUpdates: [
    {
      kind: "Community",
      title: "Background location that survives process death",
      source: "r/reactnative",
      metric: "21K views",
      summary:
        "What I learned building a native-only background location SDK for the New Architecture, and why JS-driven tracking breaks under real OS lifecycle events.",
      points: [
        "Keep capture, persistence and retries native; JS acts as an observer, not a single point of failure",
        "Motion gates must fail open: if sensors misclassify or permissions are denied, fall back to always-on GPS",
        "Native SQLite queue with idempotency keys, exponential backoff and a dead-letter queue to avoid lost or duplicate uploads",
        "Store-approval blueprint for Apple's prominent disclosure and Android foreground service declarations",
      ],
      links: [
        {
          label: "Read the discussion",
          url: "https://www.reddit.com/r/reactnative/comments/1xq4m83/i_built_a_background_location_sdk_for_react/",
        },
      ],
    },
    {
      kind: "Article",
      title: "Technical deep dive on React Native process death",
      source: "DEV Community",
      summary:
        "How Android and iOS kill React Native apps in the background, what actually survives, and how to design pipelines that recover. It picked up fast traction within its first day.",
      points: [
        "How jetsam and low-memory kills affect both JS and native code",
        "Why durable on-device state plus an OS relaunch path is what real survival means",
      ],
      links: [
        {
          label: "Read on DEV",
          url: "https://dev.to/punith_sunny_4232b5437c2c/-how-my-technical-deep-dive-on-react-native-process-death-reached-18k-views-in-18-hours-4lg",
        },
      ],
    },
    {
      kind: "Release",
      title: "React Native Background Location Pro",
      source: "npm · react-native-background-location-pro-eval",
      summary:
        "Production-grade background location tracking that survives app kills, reboots and offline periods. TurboModules + JSI, with a Kotlin foreground service on Android and Swift CLLocationManager on iOS.",
      points: [
        "Free evaluation build runs the full native pipeline in development builds; release builds report buildTier 'release' until licensed",
        "SQLite buffering with idempotent batch sync, classified retries, Retry-After, jitter and a dead-letter queue",
        "Three live-switchable tracking profiles with a CoreMotion low-power gate and a significant-change and BGAppRefreshTask watchdog",
        "One-time license with full native source: Android $39, iOS $59, or both for $89, with lifetime updates",
      ],
      links: [
        {
          label: "View on npm",
          url: "https://www.npmjs.com/package/react-native-background-location-pro-eval",
        },
        {
          label: "Docs",
          url: "https://background-location-pro.vercel.app/",
        },
        {
          label: "GitHub",
          url: "https://github.com/126punith/react-native-background-location-pro-eval",
        },
      ],
    },
    {
      kind: "Milestone",
      title: "react-native-pdf-jsi crosses 390K+ downloads",
      source: "npm",
      summary:
        "The JSI-accelerated PDF viewer for React Native passed 390K+ total npm downloads and continues to power document workflows in production apps around the world.",
      points: [],
      links: [
        {
          label: "View on npm",
          url: "https://www.npmjs.com/package/react-native-pdf-jsi",
        },
        {
          label: "GitHub",
          url: "https://github.com/126punith/react-native-pdf-jsi",
        },
      ],
    },
  ],

  education: {
    degree: "BE, Mechanical Engineering",
    school: "K S School of Engineering and Management (KSSEM)",
    location: "Bangalore, India",
    period: "Sept 2014 – June 2019",
  },

  languages: [
    { name: "English", level: "Professional" },
    { name: "Kannada", level: "Native" },
    { name: "Telugu", level: "Proficient" },
    { name: "Hindi", level: "Advanced" },
  ],

  additional: [
    "Independent product founder: built and sell React Native Background Location Pro, a commercial Kotlin/TurboModules SDK with one-time licensing and private source access",
    "Built a real-time route optimization engine combining a native background GPS service with Google Maps routing for 800+ drivers",
    "Active in the React Native community and technical writing on JSI, native modules and mobile performance",
  ],

  nav: [
    { id: "achievements", label: "Impact" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Work" },
    { id: "skills", label: "Skills" },
    { id: "recent-updates", label: "Updates" },
    { id: "about", label: "About" },
  ],
} as const;

export type Resume = typeof resume;

export function mailtoLink(subject: string) {
  return `mailto:${resume.email}?subject=${encodeURIComponent(subject)}`;
}
