# ⚽ Bundesliga Wrapped

## A Cinematic AI-Powered Football Recap Experience

> Relive the Bundesliga season like never before. Inspired by Spotify Wrapped, Bundesliga Wrapped transforms football data into personalized, emotional, and shareable fan stories.

---

## Overview

Bundesliga Wrapped is an AI-powered web experience that generates personalized football season recaps for Bundesliga fans.

By combining match data, fan engagement signals, and AI storytelling, users receive a cinematic season summary tailored to their football journey.

### Core Experience

- Personalized football journey
- AI-generated storytelling
- Emotional fan insights
- Social-ready sharing
- Mobile-first design

---

## Features

### Personalized Recaps
Generate unique season summaries based on user preferences and football events.

### AI Storytelling
Create emotional narratives and fan identities using AI agents.

### Match Insights
Transform match events into engaging visual experiences.

### Social Sharing
Export recap moments optimized for social media.

### Club Experience
Deliver club-specific highlights and fan engagement.

---

## Architecture

```txt
Frontend (Next.js)
    ↓
API Gateway
    ↓
AWS Lambda
    ↓
AI Layer (Amazon Bedrock)
    ↓
Data Layer (DynamoDB + S3)
```

---

## Project Structure

```txt
bundesliga-wrapped/

├── docs/
│   ├── product-vision.md
│   ├── architecture.md
│   └── api-spec.md
│
├── src/
│   ├── frontend/
│   ├── backend/
│   ├── data/
│   └── shared/
│
├── infra/
├── scripts/
├── package.json
└── README.md
```

---

## Tech Stack

### Frontend
- Next.js
- React
- Tailwind CSS
- Framer Motion
- D3.js

### Backend
- AWS Lambda
- API Gateway
- DynamoDB
- Amazon S3
- Amazon Cognito

### AI
- Amazon Bedrock
- AI Agents
- Prompt Engineering

### Infrastructure
- Terraform
- AWS Amplify

---

## Quick Start

### Clone repository

```bash
git clone https://github.com/charisheylen22/01-bundesliga-wrapped-aws-world-cup-project.git
cd 01-bundesliga-wrapped-aws-world-cup-project
```

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

---

## Deployment

### AWS Amplify

Build:

```bash
npm run build
```

Run production:

```bash
npm start
```

Deploy using AWS Amplify Console.

---

### Terraform

Initialize:

```bash
cd infra
terraform init
```

Deploy:

```bash
terraform apply
```

---

## Target Users

- Bundesliga supporters
- Casual football fans
- Fantasy football players
- Social-first sports audiences

---

## Documentation

See the `docs/` folder for:

- Product Vision
- User Personas
- Feature Set
- Architecture
- API Specification
- UX/UI Design
- Implementation Roadmap

---

## Development Roadmap

### Phase 1 — Foundation
- Product vision
- Infrastructure
- API contracts

### Phase 2 — Experience
- Frontend prototype
- Story generation
- Visual design

### Phase 3 — Intelligence
- AI integration
- Personalization
- Analytics

### Phase 4 — Launch
- Performance
- Testing
- Final demo

---

## Contributing

Contributions are welcome.

```bash
git checkout -b feature/new-feature
git commit -m "Add feature"
git push origin feature/new-feature
```

---

## License

MIT License

See `LICENSE` for details.

---

## Acknowledgments

- Inspired by Spotify Wrapped
- Built with heart for football fans
- Powered by AWS and AI
- author : Charismata DIANGANZI 
