# Founder Fit Radar

> **How ready is the founder to lead what comes next.**

![Founder Fit Radar](https://img.shields.io/badge/Status-Live-success)
![License](https://img.shields.io/badge/License-MIT-blue)

**Founder Fit Radar** is a fast, reality-first assessment tool designed to separate ego from readiness. In just 2 minutes, it evaluates founder capability across 6 core domains, providing a weighted "Founder Fit" score and blunt, actionable feedback.

## 🎯 Purpose
To provide founders with a brutal, honest mirror. Most assessments are fluff; this one is designed to highlight the single biggest risk to the company's growth—often the founder themselves.

## ✨ Features
- **12-Question Assessment**: Rapid fire questions on a 1-5 scale.
- **Weighted Scoring Engine**: Custom algorithm prioritizing Execution and Team Leverage.
- **Result Bands**: Classified into Chaotic, Reactive, Repeatable, or Founder-Scalable.
- **Blunt Insights**: Automated "tough love" feedback derived from your weakest domain.
- **Radar Chart**: Visualizing performance across:
  - Vision Clarity
  - Market Understanding
  - Execution Capacity
  - Team Leverage
  - Financial Buffer
  - Founder Load
- **PDF & CSV Export**: Downloadable reports for offline review.
- **Premium Dark UI**: A "Boardroom Ready" aesthetic.

## 🛠️ Tech Stack
- **Frontend**: React (Vite)
- **Styling**: Vanilla CSS (CSS Modules approach with global variables)
- **Visualization**: Chart.js (`react-chartjs-2`)
- **PDF Generation**: `jspdf`
- **Icons**: `lucide-react`

## 🚀 Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/vinaythoke/founder-fit-radar.git
    cd founder-fit-radar
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📊 Scoring Logic
- **Raw Score**: Sum of (Domain Average × Weight)
- **Score (0-100)**: Normalized to a 0-100 scale.
- **Bands**:
    - **0-39**: Chaotic (Red)
    - **40-59**: Reactive (Orange)
    - **60-79**: Repeatable (Yellow)
    - **80-100**: Founder-Scalable (Green)

## 📄 License
MIT
