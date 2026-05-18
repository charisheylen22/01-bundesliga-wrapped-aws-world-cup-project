# Bundesliga Wrapped
## A Cinematic Football Recap Experience

> Inspired by Spotify Wrapped, Bundesliga Wrapped transforms raw football data into emotionally engaging, shareable fan stories for Bundesliga supporters.

---

## 🎯 Project Overview

**Bundesliga Wrapped** is a personalized season recap platform that creates cinematic, emotionally resonant fan experiences by combining:
- Real Bundesliga match data
- Behavioral fan analytics
- AI-generated storytelling
- Social-first design

---

## 📁 Project Structure

```
bundesliga-wrapped/
├── .kiro/                      # Kiro configuration & steering
│   ├── steering/
│   └── settings/
├── docs/                       # Documentation & specs
│   ├── product-vision.md
│   ├── user-personas.md
│   ├── feature-set.md
│   ├── architecture.md
│   └── api-spec.md
├── src/
│   ├── frontend/              # React/Next.js application
│   │   ├── app/
│   │   ├── components/
│   │   ├── lib/
│   │   └── styles/
│   ├── backend/               # AWS Lambda functions
│   │   ├── api/
│   │   ├── agents/            # AI agent orchestration
│   │   └── data/
│   ├── data/                  # Data models & schemas
│   │   ├── schemas/
│   │   └── fixtures/
│   └── shared/                # Shared utilities
├── infra/                     # AWS infrastructure (Terraform)
│   ├── main.tf
│   ├── variables.tf
│   └── modules/
├── scripts/                   # Build & deployment scripts
├── package.json
├── README.md
└── HACKATHON-PLAN.md
```

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Deploy to AWS (Amplify)
npm run deploy
```

---

## ☁️ AWS Deployment

This project is configured for AWS Amplify hosting and can also be managed by Terraform.

### AWS Amplify
> Note: the Amplify Gen 1 CLI is now in maintenance mode and is not recommended for new projects.
> For new Amplify deployments, use the AWS Amplify Console or Terraform to provision the app.

1. Install the AWS CLI if needed:
   ```bash
   npm install -g aws-cli
   ```
2. Configure AWS credentials:
   ```bash
   aws configure
   ```
3. Open the AWS Amplify Console in the AWS Management Console.
4. Create a new Amplify app and connect your repository.
5. Use the following build settings:
   - Build command: `npm run build`
   - Start command: `npm start`
   - Base directory: `/`
   - App root: `/`
6. If you prefer local infrastructure management, use Terraform instead.

### Terraform
1. Initialize Terraform:
   ```bash
   cd infra
   terraform init
   ```
2. Apply the infrastructure:
   ```bash
   terraform apply
   ```

---

## 🎨 Design Principles

1. **Cinematic** - Movie-quality storytelling experience
2. **Emotional** - Connect with fan identity and memories
3. **Personalized** - Every user gets a unique experience
4. **Shareable** - Built for social media virality
5. **Mobile-First** - Optimized for phone screens

---

## 🤖 AI Features

- **AI Storyteller Agent** - Generates personalized narratives
- **Emotional Sentiment Engine** - Analyzes match emotions
- **Fan Personality Classifier** - Categorizes fan identities
- **Social Caption Generator** - Creates shareable text
- **Highlight Recommendation Engine** - Suggests best moments

---

## 📊 Data Sources

- Bundesliga API (real or simulated)
- User behavior tracking
- Social media integration
- Fan engagement metrics

---

## 🎯 Target Audience

- Hardcore Bundesliga fans
- Casual football viewers
- Fantasy football players
- Social media football fans

---

## 🌟 Key Features

- Personalized season recaps
- Emotional match analysis
- AI-generated fan identities
- Shareable video cards
- Interactive visualizations
- Club-specific insights

---

## 📈 Viral Mechanics

- Instagram Story templates
- TikTok-style recap videos
- Challenge friends functionality
- Club leaderboards
- Meme-friendly insights

---

## 💰 Monetization

- Sponsored moments
- Club partnerships
- Premium insights
- Collectible digital items

---

## 🛠️ Tech Stack

**Frontend:**
- React/Next.js
- Tailwind CSS
- Framer Motion
- D3.js/Recharts

**Backend:**
- AWS Lambda
- API Gateway
- DynamoDB
- S3
- Cognito
- Bedrock (AI)
- Step Functions

---

## 📅 Hackathon Timeline

**Sprint 1:** Product vision & architecture
**Sprint 2:** Data models & API design
**Sprint 3:** Frontend prototype
**Sprint 4:** AI integration
**Sprint 5:** Polish & demo prep

---

## 🎓 L200 Implementation Strategy

This project is designed for an intermediate-level hackathon:
- Modular architecture allows parallel work
- AWS sandbox environment provides resources
- Simulated data option for quick prototyping
- Focus on core features first
- Expandable for future development

---

## 📚 Documentation

See the `docs/` folder for detailed specifications:
- Product Vision
- User Personas
- Feature Set
- System Architecture
- API Design
- UX/UI Design
- Implementation Roadmap

---

## 🤝 Contributing

This is a hackathon project. Follow the sprint plan in `HACKATHON-PLAN.md`.

---

## 📄 License

MIT License - See LICENSE file for details.

---

## 🙏 Acknowledgments

- Inspired by Spotify Wrapped
- Bundesliga data provided by official sources
- Built for football fans, by football fans
