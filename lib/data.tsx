import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Brain,
  CheckCircle2,
  GitBranch,
  Layers,
  LineChart,
  MessageSquare,
  Sparkles,
  Target,
  Users,
  Wand2,
  Zap,
} from "lucide-react";

export type ObjectiveItem = {
  id: string;
  icon: LucideIcon;
};

export const objectivesData: ObjectiveItem[] = [
  { id: "understand-prompting", icon: Sparkles },
  { id: "understand-workflows", icon: GitBranch },
  { id: "efficient-prompting", icon: Zap },
  { id: "analyze-prompts", icon: LineChart },
  { id: "planning-systems", icon: Layers },
];

export type TopicMilestone = {
  id: string;
  capstone?: boolean;
};

export const topicRoadmapData: TopicMilestone[] = [
  { id: "topic-1" },
  { id: "topic-2" },
  { id: "topic-3" },
  { id: "topic-4" },
  { id: "topic-5", capstone: true },
];

export type AudienceCard = {
  id: string;
  icon: LucideIcon;
  audienceKey: "beginners" | "students" | "pros";
};

export const audienceCardsData: AudienceCard[] = [
  {
    id: "beginners",
    icon: BookOpen,
    audienceKey: "beginners",
  },
  {
    id: "students",
    icon: Brain,
    audienceKey: "students",
  },
  {
    id: "early-pro",
    icon: Target,
    audienceKey: "pros",
  },
];

export type MetricStat = {
  id: string;
  value: number;
  suffix: string;
};

export const metricsData: MetricStat[] = [
  { id: "m1", value: 50, suffix: "+" },
  { id: "m2", value: 50, suffix: "+" },
  { id: "m3", value: 2, suffix: "" },
  { id: "m4", value: 10, suffix: "+" },
  { id: "m5", value: 12, suffix: "+" },
];

export type ExperienceItem = {
  id: string;
  icon: LucideIcon;
};

export const experienceHighlightsData: ExperienceItem[] = [
  { id: "e1", icon: Users },
  { id: "e2", icon: CheckCircle2 },
  { id: "e3", icon: BookOpen },
  { id: "e4", icon: MessageSquare },
  { id: "e5", icon: Wand2 },
];

export type TestimonialEntry = {
  id: string;
  initials: string;
  nameKey: string;
  roleKey: string;
  quoteKey: string;
  span?: "sm" | "md" | "lg";
};

export const testimonialsData: TestimonialEntry[] = [
  {
    id: "abuBakr",
    initials: "ABS",
    nameKey: "testimonials.items.abuBakr.name",
    roleKey: "testimonials.items.abuBakr.role",
    quoteKey: "testimonials.items.abuBakr.quote",
    span: "md",
  },
  {
    id: "maram",
    initials: "MS",
    nameKey: "testimonials.items.maram.name",
    roleKey: "testimonials.items.maram.role",
    quoteKey: "testimonials.items.maram.quote",
    span: "lg",
  },
  {
    id: "layan",
    initials: "LB",
    nameKey: "testimonials.items.layan.name",
    roleKey: "testimonials.items.layan.role",
    quoteKey: "testimonials.items.layan.quote",
    span: "md",
  },

  {
    id: "natali",
    initials: "NM",
    nameKey: "testimonials.items.natali.name",
    roleKey: "testimonials.items.natali.role",
    quoteKey: "testimonials.items.natali.quote",
    span: "sm",
  },
  {
    id: "aya",
    initials: "AA",
    nameKey: "testimonials.items.aya.name",
    roleKey: "testimonials.items.aya.role",
    quoteKey: "testimonials.items.aya.quote",
    span: "sm",
  },
 
  {
    id: "farah",
    initials: "FR",
    nameKey: "testimonials.items.farah.name",
    roleKey: "testimonials.items.farah.role",
    quoteKey: "testimonials.items.farah.quote",
    span: "sm",
  },
  {
    id: "mustafa",
    initials: "MA",
    nameKey: "testimonials.items.mustafa.name",
    roleKey: "testimonials.items.mustafa.role",
    quoteKey: "testimonials.items.mustafa.quote",
    span: "sm",
  },
];

export type StudentPersona = {
  id: string;
  variant: "weak" | "average" | "max";
};

export const studentPersonasData: StudentPersona[] = [
  { id: "weak", variant: "weak" },
  { id: "average", variant: "average" },
  { id: "max", variant: "max" },
];
