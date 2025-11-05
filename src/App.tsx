import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/logos/logo.png";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Code,
  Database,
  Shield,
  Cloud,
  Zap,
  Globe,
  Smartphone,
  Github,
  LineChart,
  Linkedin,
  Sparkles,
  Target,
  Users,
  ArrowUp,
  ChevronDown,
  ExternalLink,
  Monitor,
  Server,
  Lock,
  Star,
  Eye,
  Play,
  Award,
  TrendingUp,
  Clock,
} from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Database Solutions",
    description:
      "Scalable PostgreSQL databases with real-time capabilities and automated backups for mission-critical applications.",
  },
  {
    icon: Shield,
    title: "Authentication & Security",
    description:
      "Complete user management with multi-factor authentication, role-based access control, and enterprise security.",
  },
  {
    icon: Cloud,
    title: "Cloud Storage",
    description:
      "Serverless file storage with CDN distribution, image optimization, and seamless media management.",
  },
  {
    icon: Zap,
    title: "Edge Functions",
    description:
      "Deploy serverless functions globally with ultra-low latency and automatic scaling for peak performance.",
  },
  {
    icon: Globe,
    title: "Realtime Features",
    description:
      "Live data synchronization, websockets, and broadcast messaging for collaborative applications.",
  },
  {
    icon: BrainCircuit,
    title: "AI Integration",
    description:
      "Smart embeddings, vector search, and AI-powered features seamlessly integrated into your applications.",
  },
];

const platforms = [
  {
    icon: Monitor,
    title: "Web Applications",
    description: "Modern React, Next.js, and Vue.js applications with server-side rendering and optimization.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native iOS and Android apps, plus cross-platform solutions with React Native and Flutter.",
  },
  {
    icon: Server,
    title: "Backend Services",
    description: "Scalable APIs, microservices architecture, and cloud infrastructure management.",
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description: "Enterprise-grade security, GDPR compliance, and data protection for regulated industries.",
  },
];

const differentiators = [
  {
    title: "Dedicated Squads",
    description:
      "Engineers, designers, and strategists locked onto your roadmap with transparent velocity rituals.",
  },
  {
    title: "Lifecycle Partners",
    description:
      "Discovery to growth loops covered with embedded experimentation and insights in every sprint.",
  },
  {
    title: "Modern Stack",
    description:
      "Composable architectures powered by cloud-native services, AI tooling, and security-first practices.",
  },
  {
    title: "Startup Friendly",
    description:
      "Flexible engagements, honest pricing, and a culture shaped by student founders who move fast.",
  },
];

const projects = [
  {
    title: "EcoFarm Intelligence",
    category: "AI & Agriculture",
    description: "Smart agriculture platform combining IoT sensors, satellite imagery, and machine learning to optimize crop yields and reduce resource consumption by 40%.",
    technologies: ["React Native", "Python", "TensorFlow", "AWS IoT"],
    metrics: {
      impact: "40% yield increase",
      reach: "15K+ farmers",
      efficiency: "60% water saved"
    },
    image: "🌱",
    status: "Live",
    link: "#",
    featured: true
  },
  {
    title: "SecureAlert Pro",
    category: "Safety & Security",
    description: "Enterprise-grade emergency response system with AI-powered threat detection, real-time location tracking, and automated emergency protocols.",
    technologies: ["React", "Node.js", "WebRTC", "Firebase"],
    metrics: {
      speed: "3s response time",
      coverage: "50K+ employees",
      reliability: "99.9% uptime"
    },
    image: "🚨",
    status: "Live",
    link: "#",
    featured: true
  },
  {
    title: "IntelliForm Suite",
    category: "AI & Automation",
    description: "Multilingual form automation platform with NLP processing, smart validation, and seamless integration across 20+ languages and frameworks.",
    technologies: ["Next.js", "OpenAI API", "PostgreSQL", "Stripe"],
    metrics: {
      completion: "85% success rate",
      processed: "100K+ forms",
      languages: "20+ supported"
    },
    image: "🤖",
    status: "Live",
    link: "#",
    featured: false
  },
  {
    title: "CloudSync Analytics",
    category: "Data & Analytics",
    description: "Real-time business intelligence platform with automated reporting, predictive analytics, and collaborative dashboard builder.",
    technologies: ["Vue.js", "Python", "Pandas", "Docker"],
    metrics: {
      speed: "60% faster insights",
      users: "5K+ analysts",
      accuracy: "95% prediction rate"
    },
    image: "📊",
    status: "Beta",
    link: "#",
    featured: false
  },
  {
    title: "DevOps Accelerator",
    category: "Infrastructure",
    description: "Automated CI/CD pipeline with intelligent deployment strategies, cost optimization, and performance monitoring.",
    technologies: ["Kubernetes", "Terraform", "GitHub Actions", "Grafana"],
    metrics: {
      deployment: "90% faster deploys",
      developers: "500+ teams",
      reliability: "99.9% success rate"
    },
    image: "⚡",
    status: "Live",
    link: "#",
    featured: false
  },
  {
    title: "AR Shopping Experience",
    category: "E-commerce & AR",
    description: "Immersive augmented reality shopping platform with virtual try-ons, 3D product visualization, and social sharing features.",
    technologies: ["React Native", "ARKit", "WebGL", "Three.js"],
    metrics: {
      engagement: "300% increase",
      shoppers: "25K+ users",
      conversion: "45% higher sales"
    },
    image: "🛍️",
    status: "Coming Soon",
    link: "#",
    featured: true
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Owner",
    company: "Heritage Grand Hotel, Mumbai",
    image: "👩‍💼",
    rating: 5,
    text: "AppLynk completely transformed our hotel management system. The booking platform they built increased our occupancy rates by 40% and streamlined our entire operation seamlessly.",
    project: "Hotel Management System"
  },
  {
    name: "Rajesh Kumar",
    role: "Restaurant Manager",
    company: "Spice Garden Restaurant Chain",
    image: "👨‍💼",
    rating: 5,
    text: "The digital ordering system created by AppLynk revolutionized our restaurant operations. Order processing time reduced from 15 minutes to just 3 minutes, and customer satisfaction improved dramatically.",
    project: "Digital Ordering Platform"
  },
  {
    name: "Anita Reddy",
    role: "Clinic Administrator",
    company: "City Care Medical Center",
    image: "👩‍⚕️",
    rating: 5,
    text: "Working with AppLynk was exceptional. Their patient management system handles 500+ appointments daily with 95% efficiency. The team understood our healthcare requirements perfectly.",
    project: "Patient Management System"
  },
  {
    name: "Vikram Singh",
    role: "Store Owner",
    company: "TechMart Electronics",
    image: "👨‍�",
    rating: 5,
    text: "The inventory management platform built by AppLynk gives us real-time stock insights and automated reordering. Our efficiency improved by 70% and customer service became much smoother.",
    project: "Inventory Management System"
  }
];

const companyStats = [
  {
    metric: "10+",
    label: "Projects Delivered",
    icon: Award,
    color: "emerald"
  },
  {
    metric: "100%",
    label: "Client Satisfaction",
    icon: Users,
    color: "blue"
  },
  {
    metric: "99.9%",
    label: "System Reliability",
    icon: TrendingUp,
    color: "green"
  },
  {
    metric: "24/7",
    label: "Technical Support",
    icon: Clock,
    color: "purple"
  }
];

const futureGoals = [
  "Launch an AI innovation wing dedicated to next-gen automation platforms.",
  "Expand into SaaS product accelerators built for emerging founders.",
  "Forge partnerships with global universities and tech communities.",
];

const heroSnippet = [
  "import { ignite } from \"@applynk/studio\";",
  "",
  "const roadmap = ignite({",
  "  team: \"dedicated-squad\",",
  "  mission: \"link people, data, and innovation\",",
  "  stack: [\"ai\", \"automation\", \"design\"],",
  "});",
  "",
  "roadmap.launch({",
  "  product: \"next-gen experience\",",
  "  timeline: \"< 6 weeks\",",
  "  confidence: 0.98,",
  "});",
];

const aiToolLogos = [
  { 
    name: "Cursor", 
    logo: "https://cursor.sh/brand/icon.svg",
    url: "https://cursor.sh" 
  },
  { 
    name: "GitHub", 
    logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    url: "https://github.com" 
  },
  { 
    name: "OpenAI", 
    logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg",
    url: "https://openai.com" 
  },
  { 
    name: "Claude", 
    logo: "https://www.anthropic.com/images/icons/claude-logo.svg",
    url: "https://claude.ai" 
  },
  { 
    name: "Vercel", 
    logo: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png",
    url: "https://vercel.com" 
  },
  { 
    name: "Supabase", 
    logo: "https://supabase.com/brand-assets/supabase-logo-icon.png",
    url: "https://supabase.com" 
  },
  { 
    name: "Firebase", 
    logo: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
    url: "https://firebase.google.com" 
  },
  { 
    name: "Stripe", 
    logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
    url: "https://stripe.com" 
  },
  { 
    name: "Figma", 
    logo: "https://cdn.worldvectorlogo.com/logos/figma-5.svg",
    url: "https://figma.com" 
  },
  { 
    name: "Framer", 
    logo: "https://cdn.worldvectorlogo.com/logos/framer-logo.svg",
    url: "https://framer.com" 
  },
  { 
    name: "Notion", 
    logo: "https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg",
    url: "https://notion.so" 
  },
  { 
    name: "Linear", 
    logo: "https://cdn.worldvectorlogo.com/logos/linear-logo.svg",
    url: "https://linear.app" 
  },
  { 
    name: "Midjourney", 
    logo: "https://yt3.googleusercontent.com/o6F9-NKhf16RPBqVyFltRwPNdEAs63NrjKRUSqmcYBnfWVdSRGJqCCe8LTgaqjBmw9wUrOHT=s900-c-k-c0x00ffffff-no-rj",
    url: "https://midjourney.com" 
  },
  { 
    name: "Replicate", 
    logo: "https://avatars.githubusercontent.com/u/18855235?s=280&v=4",
    url: "https://replicate.com" 
  },
  { 
    name: "Hugging Face", 
    logo: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg",
    url: "https://huggingface.co" 
  },
];

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [projectFilter, setProjectFilter] = useState<string>('All');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    // Add smooth scrolling to the document
    document.documentElement.style.scrollBehavior = 'smooth';

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projectCategories = ['All', 'AI & Agriculture', 'Safety & Security', 'AI & Automation', 'Data & Analytics', 'Infrastructure', 'E-commerce & AR'];
  
  const filteredProjects = projectFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === projectFilter);
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="pointer-events-none absolute -top-48 right-1/2 h-96 w-96 translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute bottom-[-120px] left-[-80px] h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="pointer-events-none absolute bottom-[-160px] right-[-60px] h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <header className="sticky top-0 z-50 border-b border-emerald-400/20 bg-slate-950/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3 text-lg font-semibold">
            <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border-2 border-emerald-400/60 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 shadow-lg shadow-emerald-500/25">
              <img 
                src={logo} 
                alt="AppLynk Studio Logo" 
                className="h-7 w-7 object-contain filter brightness-110"
              />
              <div className="absolute inset-0 rounded-xl bg-emerald-400/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
            </span>
            AppLynk Studio
          </a>
          <nav className="hidden gap-8 text-sm font-medium lg:flex">
            {/* Product Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setHoveredMenu('product')}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button className="flex items-center gap-1 py-2 transition hover:text-emerald-300">
                Product
                <ChevronDown className="h-4 w-4" />
              </button>
              
              <AnimatePresence>
                {hoveredMenu === 'product' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full w-80 rounded-2xl border border-emerald-400/20 bg-slate-900/95 p-6 shadow-2xl backdrop-blur-xl"
                  >
                    <div className="space-y-4">
                      <div className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                        Core Services
                      </div>
                      {services.slice(0, 3).map((service, index) => (
                        <a
                          key={index}
                          href="#services"
                          className="group flex items-start gap-3 rounded-lg p-3 transition hover:bg-emerald-500/10"
                        >
                          <service.icon className="mt-1 h-5 w-5 text-emerald-400" />
                          <div>
                            <div className="font-medium text-white group-hover:text-emerald-300">
                              {service.title}
                            </div>
                            <div className="text-xs text-slate-400">
                              {service.description.slice(0, 60)}...
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Developers Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setHoveredMenu('developers')}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button className="flex items-center gap-1 py-2 transition hover:text-emerald-300">
                Developers
                <ChevronDown className="h-4 w-4" />
              </button>
              
              <AnimatePresence>
                {hoveredMenu === 'developers' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full w-80 rounded-2xl border border-emerald-400/20 bg-slate-900/95 p-6 shadow-2xl backdrop-blur-xl"
                  >
                    <div className="space-y-4">
                      <div className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                        Developer Resources
                      </div>
                      <a
                        href="#approach"
                        className="group flex items-start gap-3 rounded-lg p-3 transition hover:bg-emerald-500/10"
                      >
                        <Code className="mt-1 h-5 w-5 text-emerald-400" />
                        <div>
                          <div className="font-medium text-white group-hover:text-emerald-300">
                            Technical Approach
                          </div>
                          <div className="text-xs text-slate-400">
                            Our development methodology and best practices
                          </div>
                        </div>
                      </a>
                      <a
                        href="https://github.com/Applynk-studio"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-start gap-3 rounded-lg p-3 transition hover:bg-emerald-500/10"
                      >
                        <Github className="mt-1 h-5 w-5 text-emerald-400" />
                        <div>
                          <div className="flex items-center gap-1 font-medium text-white group-hover:text-emerald-300">
                            Open Source
                            <ExternalLink className="h-3 w-3" />
                          </div>
                          <div className="text-xs text-slate-400">
                            Explore our open source contributions
                          </div>
                        </div>
                      </a>
                      <a
                        href="#crew"
                        className="group flex items-start gap-3 rounded-lg p-3 transition hover:bg-emerald-500/10"
                      >
                        <Users className="mt-1 h-5 w-5 text-emerald-400" />
                        <div>
                          <div className="font-medium text-white group-hover:text-emerald-300">
                            Our Team
                          </div>
                          <div className="text-xs text-slate-400">
                            Meet the developers behind AppLynk Studio
                          </div>
                        </div>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setHoveredMenu('solutions')}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button className="flex items-center gap-1 py-2 transition hover:text-emerald-300">
                Solutions
                <ChevronDown className="h-4 w-4" />
              </button>
              
              <AnimatePresence>
                {hoveredMenu === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full w-80 rounded-2xl border border-emerald-400/20 bg-slate-900/95 p-6 shadow-2xl backdrop-blur-xl"
                  >
                    <div className="space-y-4">
                      <div className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                        Platform Solutions
                      </div>
                      {platforms.map((platform, index) => (
                        <a
                          key={index}
                          href="#services"
                          className="group flex items-start gap-3 rounded-lg p-3 transition hover:bg-emerald-500/10"
                        >
                          <platform.icon className="mt-1 h-5 w-5 text-emerald-400" />
                          <div>
                            <div className="font-medium text-white group-hover:text-emerald-300">
                              {platform.title}
                            </div>
                            <div className="text-xs text-slate-400">
                              {platform.description.slice(0, 60)}...
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a className="py-2 transition hover:text-emerald-300" href="#projects">
              Projects
            </a>
            <a className="py-2 transition hover:text-emerald-300" href="#culture">
              Culture
            </a>
            <a className="py-2 transition hover:text-emerald-300" href="#founder">
              About
            </a>
          </nav>
          <a
            href="mailto:applynk@gmail.com"
            className="hidden min-h-[44px] items-center gap-2 rounded-full border border-sky-400/60 bg-sky-500/20 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-300 sm:flex"
          >
            Let’s Collaborate
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </header>

      <main id="top" className="safe-area">
        <section className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pb-16 pt-20 md:flex-row">
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/60 bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100">
              <Sparkles className="h-3 w-3" />
              Modern Digital Studio
            </span>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-emerald-200 bg-clip-text text-transparent sm:text-5xl lg:text-6xl">
              Linking ideas to intelligent, human-centered digital experiences.
            </h1>
            <p className="text-lg text-slate-300 sm:text-xl leading-relaxed">
              At AppLynk Studio, innovators and developers unite to design scalable products, immersive interfaces, and AI-first workflows that move businesses forward.
            </p>
            <div className="flex w-full flex-col gap-3 sm:flex-row">
              <a
                href="mailto:applynk@gmail.com"
                className="group flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:bg-emerald-600 hover:-translate-y-1 hover:shadow-emerald-500/40"
              >
                Start a Project
                <ArrowRight
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://github.com/Applynk-studio"
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-full border border-emerald-400/40 bg-white/5 px-6 py-3 text-base font-semibold text-slate-100 transition-all duration-300 hover:border-emerald-400/80 hover:text-emerald-200 hover:-translate-y-1"
              >
                Explore GitHub
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <div className="flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-3 py-1">
                <Users className="h-5 w-5 text-sky-300" aria-hidden="true" />
                Dedicated project teams
              </div>
              <div className="flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1">
                <LineChart className="h-5 w-5 text-emerald-300" aria-hidden="true" />
                Agile & transparent delivery
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <div className="relative w-full overflow-hidden rounded-3xl border border-sky-400/40 bg-slate-900/70 p-6 shadow-2xl shadow-sky-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-transparent to-indigo-500/20" />
              <div className="relative flex items-start justify-between">
                <div className="space-y-1">
                  <p className="text-xs font-mono uppercase tracking-[0.3em] text-sky-200/70">
                    /studio/core/launch.ts
                  </p>
                  <p className="text-xs font-mono text-slate-400">AppLynk Studio Engine</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-rose-400" />
                  <span className="inline-flex h-2 w-2 rounded-full bg-amber-400" />
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </div>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                Live build · Stable release
              </div>
              <div className="mt-6 rounded-2xl border border-sky-400/40 bg-slate-950/60 p-5 font-mono text-sm leading-relaxed text-slate-200 shadow-inner shadow-slate-900">
                <pre className="overflow-x-auto whitespace-pre text-[13px]">
                  {heroSnippet.map((line, index) => {
                    const lineNumber = String(index + 1).padStart(2, "0");
                    return (
                      <span key={lineNumber} className="flex gap-4">
                        <span className="text-slate-500">{lineNumber}</span>
                        <span className="text-slate-100">{line}</span>
                      </span>
                    );
                  })}
                </pre>
              </div>
            </div>
          </motion.div>
        </section>

        <motion.section
          id="about"
          className="mx-auto max-w-5xl px-6 pb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-8 rounded-3xl border border-white/5 bg-white/5 p-8 shadow-xl shadow-sky-500/5 md:grid-cols-2">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-white">About AppLynk Studio</h2>
              <p className="text-slate-300">
                We are a collective of student-founders, innovators, and engineers building intelligent software that feels personal, purposeful, and powerful. Every engagement is guided by curiosity, craft, and measurable impact.
              </p>
            </div>
            <div className="space-y-6 text-slate-300">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Vision
                </h3>
                <p className="text-base">
                  Empower creators with user-centered experiences that unlock growth, innovation, and lasting change.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Mission
                </h3>
                <p className="text-base">
                  Simplify technology with intelligent, high-quality solutions that link people, data, and ideas seamlessly.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="services"
          className="mx-auto max-w-6xl px-6 pb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-10 flex flex-col gap-4 text-center">
            <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
              Core Services
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Tailored solutions across the digital product lifecycle.
            </h2>
            <p className="text-base text-slate-300 sm:text-lg">
              From research to ship-ready releases, we build experiences that are thoughtful, performant, and ready to scale.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-sky-500/5 transition hover:-translate-y-1 hover:border-sky-400/40"
              >
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/10 text-sky-300">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="text-sm text-slate-300">{description}</p>
                </div>
                <button
                  type="button"
                  className="mt-6 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-sky-200 transition group-hover:gap-3"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="approach"
          className="mx-auto max-w-6xl px-6 pb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-10 lg:grid-cols-[2fr,3fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                A dedicated approach designed for focus and flow.
              </h2>
              <p className="text-base text-slate-300">
                Every partner receives a bespoke squad pairing design, engineering, and product strategy. We lead with discovery, then iterate with rapid alignment rituals to keep momentum high and feedback loops tight.
              </p>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 shadow-lg">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <BarChart3 className="mt-1 h-5 w-5 text-emerald-300" aria-hidden="true" />
                    <span>Weekly outcome reviews keep progress transparent and measurable.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="mt-1 h-5 w-5 text-sky-300" aria-hidden="true" />
                    <span>Design and engineering co-create in Figma, code, and testing sandboxes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="mt-1 h-5 w-5 text-indigo-200" aria-hidden="true" />
                    <span>Clients get direct access to makers—not layers of account management.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-sky-500/5"
                >
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="ai-tools"
          className="mx-auto max-w-6xl px-6 pb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
              AI Stack
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Tools we orchestrate across every build.
            </h2>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-sky-400/40 bg-slate-900/60 p-6">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 via-slate-950/60 to-transparent z-10" />
            <div className="flex gap-8 animate-scroll-slow whitespace-nowrap" aria-label="AI tools marquee">
              {[...aiToolLogos, ...aiToolLogos, ...aiToolLogos].map((tool, index) => (
                <a
                  key={`${tool.name}-${index}`}
                  className="flex min-w-[140px] flex-shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-center shadow-lg shadow-sky-500/10 transition hover:border-sky-400/60 hover:scale-105 hover:bg-white/15 backdrop-blur-sm"
                  href={tool.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={tool.name}
                  title={tool.name}
                >
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="h-10 w-auto max-w-[100px] object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = document.createElement('span');
                      fallback.textContent = tool.name;
                      fallback.className = 'text-sm font-semibold text-slate-200';
                      target.parentNode?.appendChild(fallback);
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="culture"
          className="mx-auto max-w-5xl px-6 pb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-3xl border border-sky-400/30 bg-gradient-to-br from-slate-900/80 to-slate-950/40 p-8 shadow-2xl shadow-sky-500/10">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Culture of limitless curiosity.</h2>
            <p className="mt-4 text-base text-slate-300">
              We are students-turned-entrepreneurs who believe innovation comes from empowering teams to experiment, learn, and ship with heart. Collaboration is our superpower—every voice unlocks new possibilities.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-sky-400/30 bg-white/5 p-6 text-sm text-slate-200">
                <h3 className="text-lg font-semibold text-white">Why choose AppLynk</h3>
                <ul className="mt-4 space-y-3">
                  {differentiators.map((item) => (
                    <li key={item.title} className="flex items-start gap-2">
                      <Sparkles className="mt-0.5 h-4 w-4 text-sky-300" aria-hidden="true" />
                      <span>{item.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-emerald-400/30 bg-white/5 p-6 text-sm text-slate-200">
                <h3 className="text-lg font-semibold text-white">Future goals</h3>
                <ul className="mt-4 space-y-3">
                  {futureGoals.map((goal) => (
                    <li key={goal} className="flex items-start gap-2">
                      <ArrowRight className="mt-0.5 h-4 w-4 text-emerald-300" aria-hidden="true" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="mx-auto max-w-7xl px-6 pb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
              <Star className="h-3 w-3" />
              Portfolio Showcase
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Transforming Ideas Into <span className="text-emerald-400">Digital Reality</span>
            </h2>
            <p className="mt-3 text-base text-slate-300 sm:text-lg lg:text-xl max-w-3xl mx-auto">
              Each project represents our commitment to innovation, scalability, and measurable impact across diverse industries.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setProjectFilter(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  projectFilter === category
                    ? 'bg-emerald-500/20 border border-emerald-400/60 text-emerald-300'
                    : 'bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:bg-slate-700/50 hover:text-slate-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Projects Grid */}
          <div className="grid gap-8 lg:grid-cols-2 mb-12">
            {filteredProjects.filter(project => project.featured).map((project, index) => (
              <motion.article
                key={project.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/50 p-8 shadow-2xl shadow-emerald-500/5 transition-all duration-500 hover:scale-[1.02] hover:shadow-emerald-500/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                    project.status === 'Live' 
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/40'
                      : project.status === 'Beta'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40'
                      : 'bg-blue-500/20 text-blue-300 border border-blue-400/40'
                  }`}>
                    <div className={`h-1.5 w-1.5 rounded-full ${
                      project.status === 'Live' ? 'bg-emerald-400' : 
                      project.status === 'Beta' ? 'bg-amber-400' : 'bg-blue-400'
                    }`} />
                    {project.status}
                  </span>
                </div>

                <div className="flex items-start gap-6">
                  {/* Project Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="h-16 w-16 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                        {project.image}
                      </div>
                      <div className="absolute inset-0 rounded-2xl bg-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    {/* Category */}
                    <span className="inline-block rounded-full bg-slate-700/50 px-3 py-1 text-xs font-medium text-slate-300">
                      {project.category}
                    </span>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-slate-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-emerald-400">{value}</div>
                          <div className="text-xs text-slate-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg bg-slate-800/60 px-2 py-1 text-xs font-medium text-slate-300 border border-slate-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="rounded-lg bg-slate-800/60 px-2 py-1 text-xs font-medium text-slate-400 border border-slate-700/50">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-2">
                      <a
                        href={project.link}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200 transition-colors duration-300 group/link"
                      >
                        <Play className="h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                        View Project
                      </a>
                      <button className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-slate-300 transition-colors duration-300">
                        <Eye className="h-4 w-4" />
                        Live Demo
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Regular Projects Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.filter(project => !project.featured).map((project, index) => (
              <motion.article
                key={project.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-emerald-500/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-emerald-500/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <div className={`h-2 w-2 rounded-full ${
                    project.status === 'Live' ? 'bg-emerald-400' : 
                    project.status === 'Beta' ? 'bg-amber-400' : 'bg-blue-400'
                  }`} />
                </div>

                <div className="space-y-4">
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-2xl">
                      {project.image}
                    </div>
                    <span className="rounded-full bg-slate-700/50 px-2 py-1 text-xs text-slate-400">
                      {project.category.split(' & ')[0]}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Metric */}
                  <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                    <div className="text-sm font-bold text-emerald-400">
                      {Object.values(project.metrics)[0]}
                    </div>
                    <div className="text-xs text-slate-500 capitalize">
                      {Object.keys(project.metrics)[0]}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-slate-800/60 px-2 py-1 text-xs text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-medium text-emerald-300 hover:text-emerald-200 transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View All Projects CTA */}
          <div className="mt-12 text-center">
            <a
              href="mailto:applynk@gmail.com"
              className="inline-flex items-center gap-3 rounded-full border border-emerald-400/60 bg-emerald-500/20 px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-500/30 hover:shadow-emerald-500/30"
            >
              <Award className="h-5 w-5" />
              Discuss Your Project
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          className="mx-auto max-w-7xl px-6 pb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
              <Star className="h-3 w-3" />
              Client Success Stories
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Trusted by <span className="text-emerald-400">Industry Leaders</span>
            </h2>
            <p className="mt-3 text-base text-slate-300 sm:text-lg max-w-2xl mx-auto">
              See how we've helped companies transform their operations and achieve measurable growth.
            </p>
          </div>

          {/* Company Stats */}
          <div className="mb-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-2xl border border-white/10 bg-slate-900/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <stat.icon className={`h-8 w-8 mx-auto mb-3 text-${stat.color}-400`} />
                <div className="text-2xl font-bold text-white lg:text-3xl">{stat.metric}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/50 p-8 shadow-2xl shadow-emerald-500/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-emerald-500/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Quote */}
                <div className="mb-6">
                  <div className="mb-4 flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-emerald-400 text-emerald-400" />
                    ))}
                  </div>
                  <blockquote className="text-slate-300 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-emerald-400">{testimonial.role}</div>
                    <div className="text-xs text-slate-400">{testimonial.company}</div>
                  </div>
                </div>

                {/* Project Tag */}
                <div className="absolute top-4 right-4">
                  <span className="rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3 py-1 text-xs font-medium text-emerald-300">
                    {testimonial.project}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="founder"
          className="mx-auto max-w-5xl px-6 pb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-8 rounded-3xl border border-white/10 bg-slate-900/50 p-8 shadow-2xl shadow-emerald-500/10 md:grid-cols-[1fr,1.5fr]">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
                Founder Spotlight
              </span>
              <h2 className="text-3xl font-bold text-white">T. Keerthan Reddy</h2>
              <p className="text-base text-slate-300">
                Product architect, problem solver, and co-founder of AppLynk Studio. Keerthan leads vision-to-ship journeys with an obsession for empathy-driven design and automation-first engineering.
              </p>
              <div className="space-y-4 text-sm text-slate-200">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-400/40 bg-sky-500/10">
                    <Github className="h-5 w-5 text-sky-200" aria-hidden="true" />
                  </span>
                  <a
                    className="font-medium text-slate-100"
                    href="https://github.com/Keerthanreddy01"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Keerthan Reddy on GitHub"
                  >
                    github.com/Keerthanreddy01
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-400/40 bg-sky-500/10">
                    <Linkedin className="h-5 w-5 text-sky-200" aria-hidden="true" />
                  </span>
                  <a
                    className="font-medium text-slate-100"
                    href="https://www.linkedin.com/in/keerthan-reddy-71a5b5370/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Keerthan Reddy on LinkedIn"
                  >
                    linkedin.com/in/keerthan-reddy-71a5b5370
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-400/40 bg-sky-500/10">
                    <Sparkles className="h-5 w-5 text-sky-200" aria-hidden="true" />
                  </span>
                  <a
                    className="font-medium text-slate-100"
                    href="mailto:applynk@gmail.com"
                    aria-label="Email AppLynk Studio"
                  >
                    applynk@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-6 text-sm text-slate-200">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">Leadership Philosophy</h3>
                <p className="mt-3 text-slate-300">
                  "Innovation happens when teams can experiment fearlessly. We ship fast, listen deeply, and build technology that people actually love using."
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">Connect with AppLynk</h3>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/company/applynk-studio/?viewAsMember=true"
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full border border-sky-400/50 bg-sky-500/10 px-4 py-2 font-semibold text-slate-100 transition hover:border-sky-400/80"
                    aria-label="AppLynk Studio on LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" aria-hidden="true" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/Applynk-studio"
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full border border-sky-400/50 bg-sky-500/10 px-4 py-2 font-semibold text-slate-100 transition hover:border-sky-400/80"
                    aria-label="AppLynk Studio on GitHub"
                  >
                    <Github className="h-5 w-5" aria-hidden="true" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="crew"
          className="mx-auto max-w-5xl px-6 pb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-8">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
                Our Crew
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Meet the AppLynk Team
              </h2>
              <p className="mt-3 text-base text-slate-300 max-w-2xl mx-auto">
                The innovators and problem-solvers who turn your vision into reality.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Co-Founder */}
              <motion.div
                className="rounded-3xl border border-white/10 bg-slate-900/50 p-6 shadow-2xl shadow-sky-500/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                    Co-Founder
                  </div>
                  <h3 className="text-xl font-bold text-white">L. Kiran Teja</h3>
                  <p className="text-sm text-sky-300 font-medium">Software Developer</p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Passionate software developer with expertise in modern frameworks and scalable architecture. Drives technical excellence and innovation.
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/10">
                      <Code className="h-4 w-4 text-emerald-200" />
                    </span>
                    <span className="text-xs text-slate-400">Full-Stack Development</span>
                  </div>
                </div>
              </motion.div>

              {/* Projects Manager */}
              <motion.div
                className="rounded-3xl border border-white/10 bg-slate-900/50 p-6 shadow-2xl shadow-sky-500/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                    Projects Manager
                  </div>
                  <h3 className="text-xl font-bold text-white">K. Uday Sai</h3>
                  <p className="text-sm text-emerald-300 font-medium">Projects Manager</p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Strategic project orchestrator ensuring seamless execution from concept to delivery. Masters the art of turning chaos into clarity.
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/10">
                      <Target className="h-4 w-4 text-emerald-200" />
                    </span>
                    <span className="text-xs text-slate-400">Project Leadership</span>
                  </div>
                </div>
              </motion.div>

              {/* Team Member */}
              <motion.div
                className="rounded-3xl border border-white/10 bg-slate-900/50 p-6 shadow-2xl shadow-sky-500/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-purple-200">
                    Team Member
                  </div>
                  <h3 className="text-xl font-bold text-white">V. Shiva Kumar</h3>
                  <p className="text-sm text-purple-300 font-medium">Core Team</p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Versatile team player bringing fresh perspectives and innovative solutions. Essential contributor to our collaborative culture.
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-purple-400/40 bg-purple-500/10">
                      <Users className="h-4 w-4 text-purple-200" />
                    </span>
                    <span className="text-xs text-slate-400">Team Collaboration</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="mx-auto max-w-6xl px-6 pb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-3xl border border-sky-400/40 bg-gradient-to-br from-sky-500/15 via-slate-900 to-indigo-500/20 p-8 text-center shadow-2xl shadow-sky-500/10">
            <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-200">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-sky-300" />
              Let’s collaborate
            </div>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Ready to link your next breakthrough?
            </h2>
            <p className="mt-3 text-base text-slate-200">
              Drop us a note and we’ll assemble a dedicated squad to explore your vision, scope the roadmap, and launch momentum.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="mailto:applynk@gmail.com"
                className="flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-300"
              >
                Email AppLynk Studio
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/company/applynk-studio/?viewAsMember=true"
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-sky-400/40 bg-white/5 px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-sky-400/80"
              >
                Connect on LinkedIn
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-emerald-400/20 bg-slate-950/95 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-slate-200">
            <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border-2 border-emerald-400/50 bg-gradient-to-br from-emerald-500/15 to-emerald-600/5 shadow-md shadow-emerald-500/20">
              <img 
                src={logo} 
                alt="AppLynk Studio Logo" 
                className="h-6 w-6 object-contain filter brightness-110"
              />
            </span>
            <p>© {new Date().getFullYear()} AppLynk Studio. Built with innovation and heart.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a className="flex items-center gap-1 hover:text-emerald-200 transition-colors" href="mailto:applynk@gmail.com">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
              applynk@gmail.com
            </a>
            <a
              className="flex items-center gap-1 hover:text-emerald-200 transition-colors"
              href="https://github.com/Applynk-studio"
              target="_blank"
              rel="noreferrer"
            >
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
              GitHub
            </a>
            <a
              className="flex items-center gap-1 hover:text-emerald-200 transition-colors"
              href="https://www.linkedin.com/company/applynk-studio/?viewAsMember=true"
              target="_blank"
              rel="noreferrer"
            >
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-sky-400/60 bg-sky-500/20 text-sky-300 shadow-lg shadow-sky-500/20 backdrop-blur-xl transition hover:bg-sky-400 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
