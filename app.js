// App Portfolio Logic for Raghav Sethi

// --- APPLICATIONS DATA ---
const appsData = [
  {
    id: "alphavex",
    title: "Alphavex",
    subtitle: "Fitness & Nutrition Companion",
    category: "fitness",
    platform: "ios",
    shortDesc: "A comprehensive training and nutrition tracker featuring custom workout templates, Apple Health integration, and a built-in AI coach.",
    fullDesc: "Alphavex is a state-of-the-art fitness logging tool with a companion watchOS app. Built solo, it features full-body strength templates, detailed macro tracking (calories, macros, micronutrients), Apple Health/Watch synchronization, and Alpha AI—an integrated coach that answers fitness questions based on your logged metrics.",
    image: "assets/images/alphavex.jpg",
    tags: ["SwiftUI", "watchOS", "HealthKit", "Swift", "CoreData", "AI Coach"],
    color: "#a855f7", // purple
    colorLight: "rgba(168, 85, 247, 0.15)",
    status: "Live on App Store",
    rating: "4.8",
    stats: {
      platform: "iOS & watchOS",
      architecture: "MVVM / HealthKit Sync",
      highlights: "Integrated AI Fitness Coach"
    },
    features: [
      "Custom training logs & strength progression charts",
      "Macro and micronutrient logging calculator",
      "Bi-directional Apple Health & Watch background sync",
      "Integrated Alpha AI Coach trained on user workout data",
      "100% offline-first privacy architecture"
    ],
    links: {
      appstore: "https://apps.apple.com/app/alphavex/id6475630325",
      github: "https://github.com/sforsethi/alphavex"
    }
  },
  {
    id: "nimnim",
    title: "NimNim",
    subtitle: "On-Demand Laundry & Dry Cleaning",
    category: "utilities",
    platform: "ios",
    shortDesc: "A complete mobile platform for scheduling customized laundry, dry cleaning, alterations, and shoe care with 24-hour turnaround.",
    fullDesc: "NimNim is a full-stack, highly scalable on-demand service app operating in Boston, New York City, and Miami. Built solo as the lead iOS developer, it features an interactive pickup/delivery scheduler, order status tracking, custom washing settings, and integration with local operations software.",
    image: "assets/images/nimnim.jpg",
    tags: ["Swift", "UIKit", "REST API", "CoreLocation", "Push Notifications"],
    color: "#0ea5e9", // light blue
    colorLight: "rgba(14, 165, 233, 0.15)",
    status: "Live on App Store",
    rating: "4.7",
    stats: {
      platform: "iOS App",
      scope: "Boston, NYC, Miami",
      turnaround: "24-Hour Express Option"
    },
    features: [
      "Dynamic scheduler for pick-ups and deliveries",
      "Detailed detergent & temperature preference selection",
      "Real-time visual order tracker with progress bar",
      "In-app credit system & discount coupon integrations",
      "Camera integration to photograph alteration details"
    ],
    links: {
      appstore: "https://apps.apple.com/us/app/nimnim-laundry-dry-clean/id1111624838",
      github: "https://github.com/sforsethi/nimnim"
    }
  },
  {
    id: "mount-fitness",
    title: "Mount Fitness",
    subtitle: "Virtual Peak Climbing Gamifier",
    category: "fitness",
    platform: "ios",
    shortDesc: "A creative gamified tracking app that maps your steps, walks, and workouts onto virtual climbing routes for 50+ famous peaks.",
    fullDesc: "Mount Fitness gamifies cardiorespiratory workouts to increase user motivation. It automatically aggregates active energy and distance metrics from Apple Health, translating your steps into virtual ascents of peaks like Mount Everest, Fuji, or Kilimanjaro, complete with progress notifications, custom route checkins, and achievements.",
    image: "assets/images/mount_fitness.jpg",
    tags: ["SwiftUI", "HealthKit", "ASO Strategy", "Combine", "Local Notifications"],
    color: "#10b981", // green
    colorLight: "rgba(16, 185, 129, 0.15)",
    status: "Live on App Store",
    rating: "4.8",
    stats: {
      peaks: "50+ Famous Peaks",
      integration: "Apple HealthKit Sync",
      revenue: "ASO Strategy Lab Product"
    },
    features: [
      "Interactive 3D peak climbing progress lines",
      "Automatic step and altitude logging from Apple Health",
      "Unlocked achievements, summit checkins, and collectible medals",
      "Custom route map displays for virtual basecamps",
      "Daily notifications reminding users of their height target"
    ],
    links: {
      appstore: "https://apps.apple.com/app/mount-fitness/id6670401502",
      github: "https://github.com/sforsethi/mount-fitness"
    }
  },
  {
    id: "burned",
    title: "Burned!",
    subtitle: "AI Workout Roasting & Motivation",
    category: "fitness",
    platform: "ios",
    shortDesc: "A fitness tracker that utilizes customizable AI coaches to roast or praise your workouts based on real-time activity metrics.",
    fullDesc: "Burned! integrates with your Apple Health and workout data to provide direct motivation. Featuring AI characters like a Drill Sergeant or Savage Coach, the app checks your logged active calories and exercise minutes, creating customized audio roasts to keep you focused and accountable.",
    image: "assets/images/burned.jpg",
    tags: ["SwiftUI", "HealthKit", "OpenAI API", "Text-To-Speech", "Swift"],
    color: "#f97316", // orange
    colorLight: "rgba(249, 115, 22, 0.15)",
    status: "Live on App Store",
    rating: "4.9",
    stats: {
      concept: "AI-Powered Motivation",
      sync: "Active HealthKit Reading",
      roasts: "Custom Roasting Engines"
    },
    features: [
      "Real-time workout logging with interactive dial graphs",
      "Personalized AI roasting generation based on daily targets",
      "Multiple AI characters with text-to-speech audio outputs",
      "Apple Health daily calorie and heart rate synchronization",
      "Shareable quote cards for social media bragging rights"
    ],
    links: {
      appstore: "https://apps.apple.com/us/app/burned-ai-fitness-roasting/id6739414243",
      github: "https://github.com/sforsethi/burned"
    }
  },
  {
    id: "lafufu",
    title: "Toy Tracker: Lafufu",
    subtitle: "Designer Toy Collectibles Vault",
    category: "utilities",
    platform: "ios",
    shortDesc: "A catalog and tracking companion designed for toy collectors to organize, search, and catalog blind-box figure collections.",
    fullDesc: "Toy Tracker Lafufu serves as a personal collection dashboard for designer figure and blind-box enthusiasts (e.g. Labubu, Pop Mart collections). Users can browse extensive catalogs, mark owned figures, keep a wishlist, track set completions, and view stats showing collection value and rarity distribution.",
    image: "assets/images/lafufu.jpg",
    tags: ["SwiftUI", "CoreData", "ASO Strategy", "UI Design", "Local Storage"],
    color: "#ec4899", // pink
    colorLight: "rgba(236, 72, 153, 0.15)",
    status: "Live on App Store",
    rating: "4.8",
    stats: {
      niche: "Pop-Mart / Blind Box",
      database: "Offline-First Storage",
      target: "Toy Collectors & Enthusiasts"
    },
    features: [
      "Comprehensive catalog of figure sets and release lists",
      "Owned vs Wishlist checkmarking dashboard",
      "Rarity indicator badges and completion percentages",
      "Personal photos attachment for figure collection records",
      "Custom collection statistics visualizer"
    ],
    links: {
      appstore: "https://apps.apple.com/us/app/toy-tracker-lafufu-pop-more/id6738320492",
      github: "https://github.com/sforsethi/toy-tracker-lafufu"
    }
  },
  {
    id: "track-bmi",
    title: "Track BMI",
    subtitle: "Neumorphic Weight Log & Chart",
    category: "fitness",
    platform: "ios",
    shortDesc: "A privacy-centric weight tracker and BMI calculator featuring a premium 3D neumorphic user interface.",
    fullDesc: "Track BMI offers a clean, visual weight tracking log. Designed around 3D neumorphism principles, it includes weight slider gauges, automated BMI trend charts, custom milestones, and a secure local database that stores your personal data privately (without external cloud sync or tracking).",
    image: "assets/images/track_bmi.jpg",
    tags: ["SwiftUI", "CoreGraphics", "ASO Strategy", "Local Storage", "Neumorphic Design"],
    color: "#3b82f6", // blue
    colorLight: "rgba(59, 130, 246, 0.15)",
    status: "Live on App Store",
    rating: "4.7",
    stats: {
      design: "3D Neumorphic UI",
      database: "100% Local & Private",
      features: "Interactive BMI Analytics"
    },
    features: [
      "Neumorphic slider dials for quick weight entry",
      "Custom weight loss progress graphs with milestone markers",
      "Instant BMI calculation gauge with weight zone indicators",
      "Export capability to CSV/JSON format",
      "100% free of advertisements and trackers"
    ],
    links: {
      appstore: "https://apps.apple.com/us/app/track-bmi-weight-tracker/id6449175402",
      github: "https://github.com/sforsethi/track-bmi"
    }
  },
  {
    id: "latte",
    title: "Latte",
    subtitle: "Mentorship Marketplace App",
    category: "utilities",
    platform: "ios",
    shortDesc: "A complete mobile marketplace platform connecting professionals for 1-on-1 mentorship sessions and guidance milestones.",
    fullDesc: "Latte is a modern social networking and professional business mentorship platform. Built to streamline guidance, it enables structured booking calendars, direct secure messaging, goal achievements tracking, and profile endorsements. Highly scalable, it allows users to locate, schedule, and learn from industry leaders with ease.",
    image: "assets/images/latte.jpg",
    tags: ["SwiftUI", "Combine", "REST API Integration", "Calendar Sync", "Push Notifications"],
    color: "#b45309", // amber / warm brown
    colorLight: "rgba(180, 83, 9, 0.15)",
    status: "Live on App Store",
    rating: "5.0",
    stats: {
      platform: "iOS App Store",
      concept: "Mentorship Marketplace",
      rating: "5.0 ★ Star Rating"
    },
    features: [
      "Dynamic booking calendar with time-slot allocations",
      "Direct chat system with rich message updates",
      "Goal tracking board for milestones and endorsements",
      "Mentor discovery search engine with filtered criteria",
      "Secure and polished payment integrations"
    ],
    links: {
      appstore: "https://apps.apple.com/in/app/latte-mentorship-for-all/id6443648295",
      github: "https://github.com/sforsethi/latte"
    }
  },
  {
    id: "phoenix-nhance",
    title: "Phoenix Nhance",
    subtitle: "Mall Loyalty & Rewards Platform",
    category: "utilities",
    platform: "ios",
    shortDesc: "A premium native iOS mall loyalty and digital assistant application designed for India's largest shopping mall chain.",
    fullDesc: "Phoenix Nhance is a high-traffic loyalty app built for The Phoenix Mills Limited. It enables mall shoppers to earn rewards by scanning invoices, discover active store sales and exclusive events, navigate mall directories with interactive store listings, and pre-book parking slots.",
    image: "assets/images/phoenix_nhance.jpg",
    tags: ["Swift", "UIKit", "REST API", "Loyalty Integrations", "Invoice Processing"],
    color: "#f43f5e", // rose/rose-red
    colorLight: "rgba(244, 63, 94, 0.15)",
    status: "Live on App Store",
    rating: "3.4",
    stats: {
      platform: "iOS App Store",
      scale: "Millions of Active Users",
      role: "Lead iOS Engineer"
    },
    features: [
      "In-app invoice scanning for immediate loyalty points credit",
      "Comprehensive catalog of discounts, rewards, and events",
      "Interactive map directory showing store locations",
      "Digital parking reservation and slot allocation tools",
      "Push notification systems alerting users of flash sales"
    ],
    links: {
      appstore: "https://apps.apple.com/in/app/phoenix-nhance/id1471334354",
      github: "https://github.com/sforsethi/phoenix-nhance"
    }
  },
  {
    id: "jaipur-bus",
    title: "Jaipur Bus Transit",
    subtitle: "Public Transit Route Guide",
    category: "utilities",
    platform: "android",
    shortDesc: "An offline transit companion app that allows commuters to search local bus routes, low-floor JCTSL timetables, and local travel fares in Jaipur.",
    fullDesc: "Jaipur Bus Transit was designed as a lightweight utility app for commuters in Jaipur, India. Built to function 100% offline, it aggregates Low-Floor and Mini-bus route paths, low-floor timetables, travel fare computations, and local tourist attractions. It has helped thousands of daily commuters navigate public transit easily.",
    image: "assets/images/jaipur_bus.jpg",
    tags: ["Android", "Java", "SQLite", "Offline-First", "Public Transit"],
    color: "#64748b", // slate gray for archived
    colorLight: "rgba(100, 116, 139, 0.15)",
    status: "Inactive / Archived",
    rating: "",
    stats: {
      platform: "Android App",
      status: "Archived / Inactive",
      type: "Offline Utility"
    },
    features: [
      "Search bus routes by source and destination stops",
      "Complete JCTSL low-floor bus timetables listing",
      "Offline transit fare calculator",
      "Jaipur local tourism points map guide",
      "Low memory footprint Java implementation"
    ],
    links: {
      github: "https://github.com/sforsethi/jaipur-bus-transit"
    }
  },
  {
    id: "khatabook",
    title: "Khatabook",
    subtitle: "Digital Ledger & Credit Tracker",
    category: "utilities",
    platform: "android",
    shortDesc: "The leading digital book-keeping and credit tracker ledger app in India, replacing traditional paper accounts for millions of small business merchants.",
    fullDesc: "Khatabook is a massive financial ledger app that helps micro, small, and medium businesses in India manage credit accounts (bahi khata). It automates payment reminders via WhatsApp/SMS, records transactions, tracks daily credits, generates detailed PDF reports, and aggregates UPI digital payments securely.",
    image: "assets/images/khatabook.jpg",
    tags: ["Android", "Kotlin", "Room Database", "UPI Integration", "Scalable Systems"],
    color: "#2563eb", // royal blue
    colorLight: "rgba(37, 99, 235, 0.15)",
    status: "Live on Play Store",
    rating: "4.6",
    stats: {
      scale: "10M+ Business Merchants",
      downloads: "50M+ Downloads",
      rating: "4.6★ Play Store"
    },
    features: [
      "Send automated payment reminders via SMS & WhatsApp",
      "Instant credit and debit balance calculations",
      "Secure offline ledger entries with automated cloud backup",
      "Detailed customer-wise financial PDF reports generation",
      "Direct QR-code UPI payment collection link"
    ],
    links: {
      live: "https://play.google.com/store/apps/details?id=com.vaibhavkalpe.android.khatabook",
      github: "https://github.com/sforsethi/khatabook"
    }
  },
  {
    id: "nimnim-android",
    title: "NimNim (Android)",
    subtitle: "On-Demand Laundry Scheduler",
    category: "utilities",
    platform: "android",
    shortDesc: "Android client for scheduling laundry, dry cleaning, alterations, and shoe repair services with 24-hour turnaround in Boston, NYC, and Miami.",
    fullDesc: "NimNim is the Android client for the on-demand dry cleaning and laundry platform. It connects users with local washing facilities, allowing them to schedule pick-ups and deliveries, select detailed washing preferences, check order progress updates, and apply discount credit balances.",
    image: "assets/images/nimnim.jpg",
    tags: ["Android", "Kotlin", "Google Maps API", "REST Client", "Push Messaging"],
    color: "#0ea5e9", // light blue
    colorLight: "rgba(14, 165, 233, 0.15)",
    status: "Live on Play Store",
    rating: "4.5",
    stats: {
      platform: "Android App Store",
      scope: "Boston, NYC, Miami",
      turnaround: "24-Hour Express Option"
    },
    features: [
      "Interactive scheduling tool for pick-ups and drop-offs",
      "Comprehensive washing & detergent preference gauges",
      "Order tracking status dashboard with push alerts",
      "In-app wallet credit and referral tracking codes",
      "Store locator and customer support chat modules"
    ],
    links: {
      live: "https://play.google.com/store/apps/details?id=com.nimnim.customer",
      github: "https://github.com/sforsethi/nimnim-android"
    }
  },
  {
    id: "snowfig",
    title: "Snowfig",
    subtitle: "Collaborative Project Organizer",
    category: "utilities",
    platform: "android",
    shortDesc: "An archived task planner and team organizer utility focused on milestone achievements and offline task checklists.",
    fullDesc: "Snowfig was built as an offline-capable project workspace planner. It provides interactive boards, goal tracking charts, task checklists, and calendar view milestones to help individual developers and small teams plan projects and organize deliverables without cloud connectivity.",
    image: "assets/images/snowfig.jpg",
    tags: ["Android", "Java", "SQLite", "Task Planner", "Archived UI"],
    color: "#64748b", // slate gray for archived
    colorLight: "rgba(100, 116, 139, 0.15)",
    status: "Inactive / Archived",
    rating: "",
    stats: {
      type: "Productivity Tool",
      status: "Archived / Inactive",
      architecture: "Java MVP Layout"
    },
    features: [
      "Create and organize lists and milestone boards",
      "Offline calendar integration for task deadlines",
      "Milestone statistics charts rendering",
      "Direct import/export of task backup data",
      "Sleek and lightweight material UI layout"
    ],
    links: {
      github: "https://github.com/sforsethi/snowfig"
    }
  },
  {
    id: "answer-key",
    title: "Answer Key",
    subtitle: "Academic Solutions Database",
    category: "utilities",
    platform: "android",
    shortDesc: "An archived educational helper app designed to aggregate academic exam solutions, question guides, and keys offline.",
    fullDesc: "Answer Key was designed as an educational assistant app. It stores exam solutions, question sheets, and verified answer keys in a structured local database. Students could browse answers by subject, bookmark key items, and download pdf question guides to view without network connectivity.",
    image: "assets/images/answer_key.jpg",
    tags: ["Android", "Java", "PDF Renderer", "Local DB", "Education"],
    color: "#64748b",
    colorLight: "rgba(100, 116, 139, 0.15)",
    status: "Inactive / Archived",
    rating: "",
    stats: {
      category: "Educational Aggregator",
      status: "Archived / Inactive",
      type: "Offline Database"
    },
    features: [
      "Structured local database of exam answer lists",
      "Offline PDF reader and page zoom utilities",
      "Categorized directories for school & competitive exams",
      "Favorites bookmarking system for study guides",
      "Secure local file caching mechanisms"
    ],
    links: {
      github: "https://github.com/sforsethi/answer-key"
    }
  },
  {
    id: "bider",
    title: "Bider",
    subtitle: "Motorcycle Community & Route Tracker",
    category: "utilities",
    platform: "android",
    shortDesc: "A real-time community application built for motorcycle riders to plan group rides, track rider location tracks, and join local clubs.",
    fullDesc: "Bider is a motorcycle community companion app. It connects local riders through location search, allows forming riding clubs, enables scheduling group tours, and provides real-time GPS tracking of participants during active tours to ensure the pack stays together.",
    image: "assets/images/bider.jpg",
    tags: ["Android", "Kotlin", "Google Maps API", "Location Services", "Real-Time Tracking"],
    color: "#d97706", // glowing orange/yellow
    colorLight: "rgba(217, 119, 6, 0.15)",
    status: "Just Released / Active",
    rating: "5.0",
    stats: {
      platform: "Google Play Store",
      scope: "Riders & Touring Clubs",
      rating: "5.0★ Star Rating"
    },
    features: [
      "Real-time GPS ride tracking for group riders",
      "Create and search local motorcycle riding clubs",
      "Interactive group tour creator with scheduled stops",
      "Rider profiles showing favorite routes and bikes",
      "Privacy-focused location sharing (active sessions only)"
    ],
    links: {
      live: "https://play.google.com/store/apps/details?id=com.ardnemos.bider",
      github: "https://github.com/sforsethi/bider"
    }
  },
  {
    id: "latte-android",
    title: "Latte (Android)",
    subtitle: "Mentorship Platform App",
    category: "utilities",
    platform: "android",
    shortDesc: "Android counterpart of the professional mentorship platform facilitating structured 1-on-1 calls and progress logs.",
    fullDesc: "Latte is an AI-powered mentorship platform for private organizational communities. The Android client features automated mentor-mentee matchmaking dashboards, integrated call booking calendars, real-time message feeds, and goal tracking logs to make mentorship guidance structured and successful.",
    image: "assets/images/latte.jpg",
    tags: ["Android", "Kotlin", "REST client", "Push Notification", "Calendar Sync"],
    color: "#b45309", // amber/brown
    colorLight: "rgba(180, 83, 9, 0.15)",
    status: "Live on Play Store",
    rating: "5.0",
    stats: {
      platform: "Google Play Store",
      concept: "Mentorship Marketplace",
      rating: "5.0★ Star Rating"
    },
    features: [
      "AI-based match scoring and recommendations",
      "Integrated call scheduler and timezone offsets conversion",
      "Direct chat messaging with push notifications alerts",
      "Guidance milestone logging dashboard",
      "Organization community admin panel controls"
    ],
    links: {
      live: "https://play.google.com/store/apps/details?id=com.latte.connect",
      github: "https://github.com/sforsethi/latte-android"
    }
  }
];

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  // Init features
  initTheme();
  initHeader();
  initTypewriter();
  initPortfolio();
  initContactForm();
  initScrollSpy();
});

// --- THEME MANAGEMENT ---
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  const currentTheme = savedTheme || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", currentTheme);

  themeToggle.addEventListener("click", () => {
    const activeTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = activeTheme === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
}

// --- HEADER SCROLL ACTION ---
function initHeader() {
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// --- TYPEWRITER EFFECT ---
class TypeWriter {
  constructor(element, words, wait = 2500) {
    this.element = element;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.isDeleting = false;
    this.type();
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.element.innerHTML = this.txt;

    let typeSpeed = 80;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 400;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

function initTypewriter() {
  const target = document.getElementById("typewriter-text");
  if (!target) return;
  const headings = ["beautiful web apps.", "high-performance mobile apps.", "native desktop utilities.", "developer-centric tools."];
  new TypeWriter(target, headings, 2200);
}

// --- PORTFOLIO SYSTEM ---
let activeCategory = "all";
let searchQuery = "";

function initPortfolio() {
  const iosGrid = document.getElementById("apps-grid");
  const androidGrid = document.getElementById("android-apps-grid");
  const filterTabs = document.querySelectorAll(".filter-tab");
  const searchInput = document.getElementById("search-apps");
  
  if (!iosGrid && !androidGrid) return;

  // Render initial apps
  renderApps();

  // Category filter trigger
  filterTabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      activeCategory = tab.dataset.filter;
      renderApps();
    });
  });

  // Search filter trigger
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderApps();
    });
  }

  // Modal event bindings
  initModal();
}

function renderCard(app, targetGrid) {
  const card = document.createElement("div");
  card.className = "app-card glass-panel glass-panel-hover";
  card.setAttribute("style", `--app-color: ${app.color}; --app-color-light: ${app.colorLight};`);
  card.dataset.id = app.id;

  const tagsHtml = app.tags.slice(0, 3).map(tag => `<span class="tag-pill">${tag}</span>`).join('');
  const ratingHtml = app.rating ? `
    <span class="app-card-rating">
      <svg style="width:14px;height:14px;fill:currentColor" viewBox="0 0 24 24"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/></svg>
      ${app.rating}
    </span>
  ` : '';

  card.innerHTML = `
    <div class="app-card-img-wrapper">
      <img src="${app.image}" alt="${app.title} UI Mockup" loading="lazy">
      <div class="app-card-badge">${app.status}</div>
    </div>
    <div class="app-card-info">
      <div class="app-card-header">
        <h3 class="app-card-title">${app.title}</h3>
        ${ratingHtml}
      </div>
      <p class="app-card-subtitle">${app.subtitle}</p>
      <p class="app-card-desc">${app.shortDesc}</p>
    </div>
    <div class="app-card-tags">
      ${tagsHtml}
      ${app.tags.length > 3 ? `<span class="tag-pill">+${app.tags.length - 3}</span>` : ''}
    </div>
    <div class="app-card-footer">
      <span class="learn-more-link">
        Explore Details 
        <svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
      </span>
    </div>
  `;

  // Click handler for opening modal
  card.addEventListener("click", () => {
    openAppModal(app.id);
  });

  targetGrid.appendChild(card);
}

function renderApps() {
  const iosGrid = document.getElementById("apps-grid");
  const androidGrid = document.getElementById("android-apps-grid");
  
  if (iosGrid) {
    // Filter iOS apps
    const filteredIos = appsData.filter(app => {
      if (app.platform !== "ios") return false;
      const matchesCategory = activeCategory === "all" || app.category === activeCategory;
      const matchesSearch = app.title.toLowerCase().includes(searchQuery) ||
                            app.subtitle.toLowerCase().includes(searchQuery) ||
                            app.tags.some(tag => tag.toLowerCase().includes(searchQuery)) ||
                            app.shortDesc.toLowerCase().includes(searchQuery);
      return matchesCategory && matchesSearch;
    });

    iosGrid.innerHTML = "";

    if (filteredIos.length === 0) {
      iosGrid.innerHTML = `
        <div class="no-apps-message">
          <p>No iOS apps found matching your criteria. Try another filter or search term.</p>
        </div>
      `;
    } else {
      filteredIos.forEach(app => renderCard(app, iosGrid));
    }
  }

  if (androidGrid) {
    // Filter Android apps
    const filteredAndroid = appsData.filter(app => {
      if (app.platform !== "android") return false;
      const matchesSearch = app.title.toLowerCase().includes(searchQuery) ||
                            app.subtitle.toLowerCase().includes(searchQuery) ||
                            app.tags.some(tag => tag.toLowerCase().includes(searchQuery)) ||
                            app.shortDesc.toLowerCase().includes(searchQuery);
      return matchesSearch;
    });

    androidGrid.innerHTML = "";

    if (filteredAndroid.length === 0) {
      androidGrid.innerHTML = `
        <div class="no-apps-message">
          <p>No Android apps found matching your search term.</p>
        </div>
      `;
    } else {
      filteredAndroid.forEach(app => renderCard(app, androidGrid));
    }
  }
}

// --- MODAL ENGINE ---
let scrollPositionBeforeModal = 0;

function initModal() {
  const overlay = document.getElementById("modal-overlay");
  const closeBtn = document.getElementById("modal-close-btn");
  
  if (!overlay || !closeBtn) return;

  // Close by button
  closeBtn.addEventListener("click", closeModal);

  // Close by clicking background overlay
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  // Close by ESC key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("open")) {
      closeModal();
    }
  });
}

function openAppModal(appId) {
  const app = appsData.find(a => a.id === appId);
  if (!app) return;

  const overlay = document.getElementById("modal-overlay");
  const modalContent = document.getElementById("modal-content");
  
  if (!overlay || !modalContent) return;

  // Set colors and properties
  modalContent.setAttribute("style", `--app-color: ${app.color}; --app-color-light: ${app.colorLight};`);

  // Build HTML structures
  const featuresHtml = app.features.map(feat => `
    <li class="modal-feature-item">
      <svg fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" style="width:16px;height:16px"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
      <span>${feat}</span>
    </li>
  `).join('');

  const tagsHtml = app.tags.map(tag => `<span class="tag-pill">${tag}</span>`).join('');

  const statsHtml = Object.entries(app.stats).map(([key, val]) => `
    <div class="modal-stat-row">
      <span class="modal-stat-val" style="color: ${app.color}">${val}</span>
      <span class="modal-stat-lbl">${key.charAt(0).toUpperCase() + key.slice(1)}</span>
    </div>
  `).join('');

  // Action links validation
  let actionsHtml = "";
  if (app.links.live) {
    actionsHtml += `<a href="${app.links.live}" target="_blank" class="btn btn-primary">Visit Live App</a>`;
  }
  if (app.links.appstore) {
    actionsHtml += `<a href="${app.links.appstore}" target="_blank" class="btn btn-secondary">Download on Store</a>`;
  }
  if (app.links.github) {
    actionsHtml += `<a href="${app.links.github}" target="_blank" class="btn btn-secondary">
      <svg style="width:18px;height:18px;fill:currentColor" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.41 6,9.54 6.63,8.85C6.52,8.6 6.18,7.58 6.73,6.22C6.73,6.22 7.56,5.95 9.45,7.23C10.24,7 11.09,6.9 11.93,6.9C12.77,6.9 13.62,7 14.41,7.23C16.3,5.95 17.13,6.22 17.13,6.22C17.68,7.58 17.34,8.6 17.23,8.85C17.87,9.54 18.25,10.41 18.25,11.5C18.25,15.32 15.91,16.16 13.68,16.41C14.04,16.72 14.36,17.33 14.36,18.27C14.36,19.62 14.35,20.71 14.35,21C14.35,21.28 14.5,21.6 15,21.5C18.97,20.17 21.88,16.42 21.88,12C21.88,6.58 17.42,2 12,2Z"/></svg>
      View Source Code
    </a>`;
  }

  modalContent.innerHTML = `
    <button class="modal-close-btn" id="modal-close-btn" aria-label="Close modal">
      <svg style="width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
    </button>
    <div class="modal-body">
      <div class="modal-hero-wrapper">
        <img src="${app.image}" alt="${app.title} Presentation Mockup">
      </div>
      <div class="modal-header-info">
        <div class="modal-title-desc">
          <h2 class="modal-title">${app.title}</h2>
          <p class="modal-subtitle">${app.subtitle}</p>
        </div>
        <div class="modal-badges">
          <span class="modal-badge" style="border-color: ${app.color}; color: ${app.color}; background: ${app.colorLight}">${app.status}</span>
        </div>
      </div>
      
      <div class="modal-grid">
        <div class="modal-main-column">
          <div>
            <h4 class="modal-sec-title">Overview</h4>
            <p class="modal-desc-text">${app.fullDesc}</p>
          </div>
          <div>
            <h4 class="modal-sec-title">Key Features</h4>
            <ul class="modal-features-list">
              ${featuresHtml}
            </ul>
          </div>
        </div>
        
        <div class="modal-side-column">
          <div class="modal-tech-stack">
            <h4 class="modal-sec-title">Tech Stack</h4>
            <div class="modal-tech-tags">
              ${tagsHtml}
            </div>
          </div>
          <div class="modal-stats">
            <h4 class="modal-sec-title">Key Highlights</h4>
            <div class="modal-stats-list">
              ${statsHtml}
            </div>
          </div>
          <div class="modal-actions">
            ${actionsHtml}
          </div>
        </div>
      </div>
    </div>
  `;

  // Re-bind the close button that was generated inside the template
  const newCloseBtn = modalContent.querySelector("#modal-close-btn");
  newCloseBtn.addEventListener("click", closeModal);

  // Stop body scroll
  scrollPositionBeforeModal = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollPositionBeforeModal}px`;
  document.body.style.width = '100%';

  overlay.classList.add("open");
  modalContent.focus();
}

function closeModal() {
  const overlay = document.getElementById("modal-overlay");
  if (!overlay || !overlay.classList.contains("open")) return;

  overlay.classList.remove("open");

  // Restore body scroll
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, scrollPositionBeforeModal);
}

// --- CONTACT FORM HANDLER ---
function initContactForm() {
  const form = document.getElementById("contact-form");
  const successWrapper = document.getElementById("form-success");
  
  if (!form || !successWrapper) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Basic fields validation
    const name = document.getElementById("form-name").value;
    const email = document.getElementById("form-email").value;
    const msg = document.getElementById("form-message").value;

    if (!name || !email || !msg) {
      alert("Please fill out all fields.");
      return;
    }

    // Submit state animation
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `Sending...`;

    // AJAX post request to FormSubmit
    fetch("https://formsubmit.co/ajax/raghav@niyatstudio.com", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: msg,
        _subject: `New App Portfolio Message from ${name}`
      })
    })
    .then(response => response.json())
    .then(data => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      // FormSubmit returns data.success as "true" (string) or true (boolean)
      if (data.success === "true" || data.success === true) {
        form.style.display = "none";
        successWrapper.style.display = "flex";
        form.reset();
      } else {
        alert("Oops! Something went wrong. Please try again or contact raghav@niyatstudio.com directly.");
      }
    })
    .catch(error => {
      console.error("Error submitting form:", error);
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      alert("Oops! Something went wrong. Please check your network connection or contact raghav@niyatstudio.com directly.");
    });
  });
}

// --- SCROLL SPY NAVIGATION ---
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute("id");
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
}
