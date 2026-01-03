export const DOMAINS = {
  vision: { label: "Vision clarity", weight: 0.12 },
  market: { label: "Market understanding", weight: 0.15 },
  execution: { label: "Execution capacity", weight: 0.18 },
  team: { label: "Team leverage", weight: 0.18 },
  financial: { label: "Financial buffer", weight: 0.15 },
  founder: { label: "Founder load & resilience", weight: 0.11 },
};

export const QUESTIONS = [
  // Vision clarity (12%)
  {
    id: "q1",
    domain: "vision",
    text: "I can explain the company vision in one sentence everyone understands.",
  },
  {
    id: "q2",
    domain: "vision",
    text: "I can state the top 3 outcomes we must hit this year.",
  },
  // Market understanding (15%)
  {
    id: "q3",
    domain: "market",
    text: "I can name the exact buyer and why they will buy.",
  },
  {
    id: "q4",
    domain: "market",
    text: "I can show 3 recent signals that demand exists now.",
  },
  // Execution capacity (18%)
  {
    id: "q5",
    domain: "execution",
    text: "We have documented processes for core workflows.",
  },
  {
    id: "q6",
    domain: "execution",
    text: "We hit weekly commitments at least 80% of the time.",
  },
  // Team leverage (18%)
  {
    id: "q7",
    domain: "team",
    text: "My team can make decisions without my daily sign-off.",
  },
  {
    id: "q8",
    domain: "team",
    text: "Critical roles are covered by named people, not bandaid owners.",
  },
  // Financial buffer (15%)
  {
    id: "q9",
    domain: "financial",
    text: "We have runway or revenue cover for 6 months.",
  },
  {
    id: "q10",
    domain: "financial",
    text: "We know the true unit economics for our core offer.",
  },
  // Founder load & resilience (11%)
  {
    id: "q11",
    domain: "founder",
    text: "I can handle a major customer or product crisis without breaking.",
  },
  {
    id: "q12",
    domain: "founder",
    text: "I have a realistic succession/delegation plan for myself.",
  },
];

export const BANDS = [
  { min: 0, max: 39, label: "Chaotic", color: "#ef4444" }, // Red
  { min: 40, max: 59, label: "Reactive", color: "#f97316" }, // Orange
  { min: 60, max: 79, label: "Repeatable", color: "#eab308" }, // Yellow
  { min: 80, max: 100, label: "Founder-Scalable", color: "#22c55e" }, // Green
];
