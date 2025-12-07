<!--
Sync Impact Report:
Version change: (No previous version detected) → 1.0.0
Modified principles:
- PROJECT_NAME: (No previous value) → Physical AI & Humanoid Robotics — Essentials
- PRINCIPLE_1_NAME: (No previous value) → Simplicity
- PRINCIPLE_1_DESCRIPTION: (No previous value) → The book and its components must be easy to understand and use. Design choices should prioritize straightforward implementations over complex ones.
- PRINCIPLE_2_NAME: (No previous value) → Accuracy
- PRINCIPLE_2_DESCRIPTION: (No previous value) → All technical information, code examples, and explanations must be factually correct and up-to-date.
- PRINCIPLE_3_NAME: (No previous value) → Minimalism
- PRINCIPLE_3_DESCRIPTION: (No previous value) → Content should be concise, focusing on essential concepts without unnecessary jargon or verbosity. The system architecture should have minimal dependencies and overhead.
- PRINCIPLE_4_NAME: (No previous value) → Fast Builds
- PRINCIPLE_4_DESCRIPTION: (No previous value) → The Docusaurus build process should be optimized for speed to ensure quick iterations and deployments.
- PRINCIPLE_5_NAME: (No previous value) → Free-tier Architecture
- PRINCIPLE_5_DESCRIPTION: (No previous value) → All chosen technologies and services (e.g., database, vector storage, hosting) must operate within free-tier limits to minimize operational costs.
- PRINCIPLE_6_NAME: (No previous value) → High-quality writing
- PRINCIPLE_6_DESCRIPTION: (No previous value) → The text should be clear, engaging, and professional, adhering to high editorial standards.
- PRINCIPLE_7_NAME: (New) → Smart Structure
- PRINCIPLE_7_DESCRIPTION: (New) → The book's organization and content flow should be logical, intuitive, and easy to navigate for learners.
- PRINCIPLE_8_NAME: (New) → Zero unnecessary complexity
- PRINCIPLE_8_DESCRIPTION: (New) → Avoid adding features, dependencies, or architectural layers that do not directly contribute to the core purpose and success criteria.
Added sections:
- Principle 7 (Smart Structure)
- Principle 8 (Zero unnecessary complexity)
- Project Scope and Requirements
- Key Features and Constraints
Removed sections: None
Templates requiring updates:
- .specify/templates/plan-template.md: ⚠ pending
- .specify/templates/spec-template.md: ⚠ pending
- .specify/templates/tasks-template.md: ⚠ pending
- .claude/commands/sp.adr.md: ⚠ pending
- .claude/commands/sp.analyze.md: ⚠ pending
- .claude/commands/sp.checklist.md: ⚠ pending
- .claude/commands/sp.clarify.md: ⚠ pending
- .claude/commands/sp.constitution.md: ⚠ pending
- .claude/commands/sp.git.commit_pr.md: ⚠ pending
- .claude/commands/sp.implement.md: ⚠ pending
- .claude/commands/sp.phr.md: ⚠ pending
- .claude/commands/sp.plan.md: ⚠ pending
- .claude/commands/sp.specify.md: ⚠ pending
- .claude/commands/sp.tasks.md: ⚠ pending
Follow-up TODOs: None
-->
# Physical AI & Humanoid Robotics — Essentials Constitution

## Core Principles

### Simplicity
The book and its components must be easy to understand and use. Design choices should prioritize straightforward implementations over complex ones.

### Accuracy
All technical information, code examples, and explanations must be factually correct and up-to-date.

### Minimalism
Content should be concise, focusing on essential concepts without unnecessary jargon or verbosity. The system architecture should have minimal dependencies and overhead.

### Fast Builds
The Docusaurus build process should be optimized for speed to ensure quick iterations and deployments.

### Free-tier Architecture
All chosen technologies and services (e.g., database, vector storage, hosting) must operate within free-tier limits to minimize operational costs.

### High-quality writing
The text should be clear, engaging, and professional, adhering to high editorial standards.

### Smart Structure
The book's organization and content flow should be logical, intuitive, and easy to navigate for learners.

### Zero unnecessary complexity
Avoid adding features, dependencies, or architectural layers that do not directly contribute to the core purpose and success criteria.

## Project Scope and Requirements

### Book Structure (6 Chapters)
1. Introduction to Physical AI
2. Basics of Humanoid Robotics
3. ROS 2 Fundamentals
4. Digital Twin Simulation (Gazebo + Isaac)
5. Vision-Language-Action Systems
6. Capstone: Simple AI-Robot Pipeline

### Requirements
- Clean and modern Docusaurus UI
- Lightweight content, short chapters, minimal jargon
- Free-tier friendly workflow
- Lightweight embeddings for RAG
- RAG answers must only use book text

## Key Features and Constraints

### Key Features
- Docusaurus textbook
- RAG chatbot using Qdrant + Neon + FastAPI
- Select-Text → Ask AI integration
- Optional Urdu + personalization layer
- Works smoothly on GitHub Pages
- No GPU requirements

### Constraints
- No heavy GPU usage
- Minimal embeddings
- Free-tier database + vector storage
- Minimal JS, minimal plugins
- Only use content inside the book for RAG answers

## Governance
This constitution outlines the fundamental principles and guidelines for the "Physical AI & Humanoid Robotics — Essentials" project. All project development, design, and implementation efforts must adhere to these rules. Amendments to this constitution require a documented proposal, review, and approval by the project leads.

**Version**: 1.0.0 | **Ratified**: 2025-12-06 | **Last Amended**: 2025-12-06
