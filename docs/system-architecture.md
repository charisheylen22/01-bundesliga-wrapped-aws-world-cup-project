# System Architecture: Bundesliga Wrapped

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           AWS Cloud Environment                              │
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                         Frontend Layer                                │  │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌───────────────────────┐  │  │
│  │ │  React/Next.js  │  │  Static Assets  │  │  CloudFront CDN       │  │  │
│  │ │  Application    │  │  (Images, CSS)  │  │  (Global Distribution)│  │  │
│  │ └────────┬────────┘  └─────────────────┘  └───────────────────────┘  │  │
│  └───────────┼───────────────────────────────────────────────────────────┘  │
│              │                                                                │
│              ▼                                                                │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                      API Gateway Layer                                 │  │
│  │  ┌─────────────────────────────────────────────────────────────────┐  │  │
│  │ │                    API Gateway                                    │  │  │
│  │ │  - REST/GraphQL Endpoints                                         │  │  │
│  │ │  - Authentication & Authorization                                 │  │  │
│  │ │  - Rate Limiting & Throttling                                     │  │  │
│  │ │  - Request Routing                                                │  │  │
│  │ └─────────────────────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│              │                                                                │
│  ┌───────────┼──────────────────────────────────────────────────────────────┐
│  │           ▼                                                                │
│  │  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │  │                      Backend Services Layer                          │ │
│  │  │  ┌──────────────┐ ┌──────────────┐ ┌──────────────────────────────┐ │ │
│  │  │ │   Lambda       │ │   Lambda     │ │   Lambda                   │ │ │
│  │  │ │   (API)        │ │   (Workers)  │ │   (AI Agents)              │ │ │
│  │  │ └──────────────┘ └──────────────┘ └──────────────────────────────┘ │ │
│  │  │          │              │                  │                        │ │
│  │  └──────────┼──────────────┼──────────────────┼────────────────────────┘ │
│  │             │              │                  │                          │
│  │             ▼              ▼                  ▼                          │
│  │  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │  │                      Data Layer                                      │ │
│  │  │  ┌──────────────┐ ┌──────────────┐ ┌──────────────────────────────┐ │ │
│  │  │ │  DynamoDB      │ │  S3          │ │  ElastiCache               │ │ │
│  │  │ │  (Primary DB)  │ │  (Storage)   │ │  (Caching)                 │ │ │
│  │  │ └──────────────┘ └──────────────┘ └──────────────────────────────┘ │ │
│  │  │  ┌──────────────┐ ┌──────────────┐ ┌──────────────────────────────┐ │ │
│  │  │ │  RDS           │ │  Redshift    │ │  OpenSearch                │ │ │
│  │  │ │  (Analytics)   │ │  (Data Ware) │ │  (Search)                  │ │ │
│  │  │ └──────────────┘ └──────────────┘ └──────────────────────────────┘ │ │
│  │  └─────────────────────────────────────────────────────────────────────┘ │
│  │             │              │                  │                          │
│  │             ▼              ▼                  ▼                          │
│  │  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │  │                      AI/ML Layer                                     │ │
│  │  │  ┌──────────────┐ ┌──────────────┐ ┌──────────────────────────────┐ │ │
│  │  │ │  Bedrock       │ │  SageMaker   │ │  Step Functions            │ │ │
│  │  │ │  (LLM)         │ │  (ML)        │ │  (Orchestration)           │ │ │
│  │  │ └──────────────┘ └──────���───────┘ └──────────────────────────────┘ │ │
│  │  └─────────────────────────────────────────────────────────────────────┘ │
│  └───────────────────────────────────────────────────────────────────────────┘
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                      External Integrations                             │  │
│  │  ┌──────────────┐ ┌──────────────┐ ┌──────────────────────────────┐   │  │
│  │ │  Bundesliga  │ │  Social      │ │  Third-Party                 │   │  │
│  │ │  API         │ │  Media       │ │  APIs                        │   │  │
│  │ └──────────────┘ └──────────────┘ └──────────────────────────────┘   │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Component Details

### 1. Frontend Layer

#### React/Next.js Application

**Technology Stack:**
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + Custom CSS
- **Animations:** Framer Motion
- **Charts:** Recharts + D3.js
- **State Management:** Zustand + React Query
- **Routing:** Next.js App Router
- **Deployment:** Vercel + S3 + CloudFront

**Key Features:**
- Server-side rendering for SEO
- Static site generation for performance
- Incremental static regeneration for dynamic content
- Image optimization
- Mobile-first responsive design

**Directory Structure:**
```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── signup/
│   ├── (dashboard)/
│   │   ├── wrapped/
│   │   ├── profile/
│   │   └── settings/
│   ├── api/
│   │   └── trpc/
│   └── layout.tsx
├── components/
│   ├── ui/
│   ├── layout/
│   ├── charts/
│   └── animations/
├── lib/
│   ├── api/
│   ├── utils/
│   └── constants/
└── styles/
```

#### CloudFront CDN

**Configuration:**
- **Origin:** S3 bucket + API Gateway
- **Cache behaviors:** Optimized for static and dynamic content
- **SSL/TLS:** AWS Certificate Manager
- **WAF:** Web Application Firewall integration
- **Lambda@Edge:** Custom edge functions

**Caching Strategy:**
- Static assets: 1 year cache
- Dynamic content: 0-5 minute cache
- API responses: 1-15 minute cache
- User-specific content: No caching

---

### 2. API Gateway Layer

#### REST/GraphQL Endpoints

**API Design:**
- **REST:** For CRUD operations
- **GraphQL:** For complex queries and data fetching
- **WebSockets:** For real-time updates (future)

**Authentication:**
- **Cognito User Pools:** User authentication
- **API Keys:** Service-to-service authentication
- **JWT Tokens:** Session management

**Rate Limiting:**
- **Per-user limits:** 100 requests/minute
- **Per-IP limits:** 1000 requests/minute
- **Burst limits:** 200 requests/minute

**Request Flow:**
```
Client → CloudFront → API Gateway → Lambda → Backend Services
```

---

### 3. Backend Services Layer

#### Lambda Functions

**API Functions:**
- **User Management:** Authentication, profile, preferences
- **Data Fetching:** Match data, stats, insights
- **AI Processing:** Narrative generation, analysis
- **Content Delivery:** Wrapped generation, reports

**Worker Functions:**
- **Data Ingestion:** Bundesliga API data
- **Data Processing:** Stats calculation, insights generation
- **Email Notifications:** Weekly updates, reminders
- **Cleanup Jobs:** Data retention, archiving

**AI Agent Functions:**
- **Storyteller Agent:** Narrative generation
- **Sentiment Engine:** Emotional analysis
- **Personality Classifier:** Fan classification
- **Social Caption Generator:** Shareable content

**Function Configuration:**
- **Memory:** 512MB - 2048MB
- **Timeout:** 30s - 15min
- **Concurrency:** 100 - 1000
- **VPC:** Optional for database access

**Example Lambda Structure:**
```typescript
// src/backend/api/wrapped.ts
export const handler = async (event: APIGatewayProxyEvent) => {
  try {
    const userId = event.requestContext.authorizer?.claims?.sub;
    const season = event.queryStringParameters?.season || '2023-2024';
    
    // Fetch user data
    const userData = await fetchUserData(userId);
    
    // Generate wrapped
    const wrapped = await generateWrapped(userData, season);
    
    return {
      statusCode: 200,
      body: JSON.stringify(wrapped),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
```

---

### 4. Data Layer

#### DynamoDB

**Tables:**
1. **Users**
   - PK: `user_id`
   - SK: `metadata`
   - Attributes: name, email, preferences, created_at

2. **UserPreferences**
   - PK: `user_id`
   - SK: `preferences`
   - Attributes: club_id, language, notifications

3. **Matches**
   - PK: `match_id`
   - SK: `metadata`
   - Attributes: home_team, away_team, score, date

4. **UserMatchHistory**
   - PK: `user_id`
   - SK: `match_id`
   - Attributes: watched, emotional_score, comments

5. **Wrappeds**
   - PK: `user_id`
   - SK: `season`
   - Attributes: content, generated_at, shared

6. **Insights**
   - PK: `user_id`
   - SK: `insight_id`
   - Attributes: type, content, created_at

**DynamoDB Features:**
- **Global Secondary Indexes:** For cross-table queries
- **Time-to-Live:** Automatic data expiration
- **DAX:** DynamoDB Accelerator for caching
- **Streams:** For event-driven processing

#### S3

**Buckets:**
1. **bundesliga-wrapped-assets**
   - Static assets (images, CSS, JS)
   - Public read access
   - CloudFront origin

2. **bundesliga-wrapped-uploads**
   - User uploads (profile pictures)
   - Private access
   - Cognito authentication

3. **bundesliga-wrapped-wrappeds**
   - Generated wrapped content
   - Private access
   - Signed URLs for sharing

4. **bundesliga-wrapped-backups**
   - Database backups
   - Encrypted
   - Lifecycle policies

**S3 Features:**
- **Versioning:** For data recovery
- **Encryption:** AES-256
- **Lifecycle Policies:** Automatic transitions
- **Access Logging:** For audit

#### ElastiCache

**Redis Cluster:**
- **Session Cache:** User sessions
- **Data Cache:** Frequently accessed data
- **Rate Limiting:** Token bucket algorithm
- **Pub/Sub:** Real-time updates

**Configuration:**
- **Nodes:** 3 nodes (1 primary, 2 replicas)
- **Engine:** Redis 7.0
- **Size:** cache.r6g.large
- **Encryption:** In-transit and at-rest

---

### 5. AI/ML Layer

#### Amazon Bedrock

**Models:**
1. **Claude 3.5 Sonnet**
   - Primary model for narrative generation
   - Excellent for storytelling
   - Strong emotional understanding

2. **Titan Text Premier**
   - Secondary model for analysis
   - Good for data processing
   - Cost-effective

3. **Titan Embeddings G1 - Text**
   - Semantic search
   - Similarity matching
   - Vector storage

**Prompt Management:**
- **Prompt Library:** Reusable prompt templates
- **Versioning:** Track prompt changes
- **Testing:** A/B test prompts
- **Monitoring:** Track prompt performance

**Example Bedrock Integration:**
```typescript
// src/backend/ai/storyteller.ts
import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";

const bedrock = new BedrockRuntimeClient({ region: "us-east-1" });

export const generateStory = async (context: StoryContext): Promise<string> => {
  const prompt = buildStoryPrompt(context);
  
  const command = new InvokeModelCommand({
    modelId: "anthropic.claude-3-5-sonnet-20240620-v1:0",
    contentType: "application/json",
    body: JSON.stringify({
      prompt: `\\n\\nHuman: ${prompt}\\n\\nAssistant:`,
      max_tokens: 1000,
      temperature: 0.7,
      top_p: 0.9,
    }),
  });
  
  const response = await bedrock.invokeModel(command);
  const body = JSON.parse(new TextDecoder().decode(response.body));
  
  return body.completion;
};
```

#### AWS Step Functions

**Workflow:**
1. **Wrapped Generation Workflow**
   - Step 1: Fetch user data
   - Step 2: Generate narrative
   - Step 3: Generate insights
   - Step 4: Generate visualizations
   - Step 5: Compile wrapped
   - Step 6: Store and notify

2. **Data Processing Workflow**
   - Step 1: Ingest match data
   - Step 2: Calculate stats
   - Step 3: Generate insights
   - Step 4: Update user data
   - Step 5: Trigger notifications

**State Machine Definition:**
```json
{
  "Comment": "Bundesliga Wrapped Generation",
  "StartAt": "FetchUserData",
  "States": {
    "FetchUserData": {
      "Type": "Task",
      "Resource": "arn:aws:lambda:us-east-1:123456789012:function:FetchUserData",
      "Next": "GenerateNarrative"
    },
    "GenerateNarrative": {
      "Type": "Task",
      "Resource": "arn:aws:lambda:us-east-1:123456789012:function:GenerateNarrative",
      "Next": "GenerateInsights"
    },
    "GenerateInsights": {
      "Type": "Task",
      "Resource": "arn:aws:lambda:us-east-1:123456789012:function:GenerateInsights",
      "Next": "GenerateVisualizations"
    },
    "GenerateVisualizations": {
      "Type": "Task",
      "Resource": "arn:aws:lambda:us-east-1:123456789012:function:GenerateVisualizations",
      "Next": "CompileWrapped"
    },
    "CompileWrapped": {
      "Type": "Task",
      "Resource": "arn:aws:lambda:us-east-1:123456789012:function:CompileWrapped",
      "End": true
    }
  }
}
```

---

### 6. Storage Strategy

#### Data Retention

1. **Active Data**
   - Current season: 1 year
   - Previous season: 2 years
   - User data: 5 years

2. **Archived Data**
   - Old seasons: 7 years
   - Analytics data: 10 years
   - Backups: 7 years

3. **Deleted Data**
   - Soft delete: 30 days
   - Hard delete: 90 days
   - Audit logs: 7 years

#### Data Encryption

1. **At Rest**
   - DynamoDB: AES-256
   - S3: AES-256
   - RDS: AES-256
   - EBS: AES-256

2. **In Transit**
   - TLS 1.3
   - HTTPS only
   - mTLS for service-to-service

---

## Security Architecture

### Authentication & Authorization

#### Cognito User Pools

**Features:**
- **Sign-up/Sign-in:** Email/phone
- **MFA:** Optional multi-factor authentication
- **Federated Identity:** Social login (Google, Apple)
- **Custom Attributes:** User preferences, club

**Security:**
- **Password Policy:** Minimum 8 chars, special chars
- **Account Lockout:** 5 failed attempts
- **Session Management:** Token refresh, revocation

#### API Gateway Authorization

**Cognito Authorizer:**
- **Token Validation:** JWT validation
- **Scope Validation:** Permission checks
- **Rate Limiting:** Per-user limits

**IAM Authorization:**
- **Service-to-Service:** IAM roles
- **Lambda Permissions:** Resource-based policies

### Data Security

#### Sensitive Data Protection

1. **PII Protection**
   - Encryption at rest
   - Encryption in transit
   - Access logging
   - Audit trails

2. **Data Masking**
   - PII masking in logs
   - Partial data in responses
   - Tokenization for sensitive fields

#### Compliance

1. **GDPR**
   - Data minimization
   - Right to deletion
   - Data portability
   - Consent management

2. **CCPA**
   - Opt-out mechanisms
   - Data disclosure
   - Non-discrimination

---

## Monitoring & Observability

### CloudWatch

**Metrics:**
- **API Gateway:** Request count, latency, errors
- **Lambda:** Invocation count, duration, errors
- **DynamoDB:** Read/write capacity, throttling
- **S3:** Request count, bytes transferred

**Alarms:**
- **Error Rate:** >1% over 5 minutes
- **Latency:** >1s over 5 minutes
- **Throttling:** >10 over 5 minutes
- **Capacity:** >80% over 15 minutes

### X-Ray

**Tracing:**
- **Request Tracing:** End-to-end tracing
- **Service Map:** Visualize dependencies
- **Anomaly Detection:** Identify issues

**Sampling:**
- **Fixed:** 100 requests/second
- **Responsive:** Adjust based on load
- **Custom:** Rule-based sampling

### Prometheus & Grafana

**Custom Metrics:**
- **Business Metrics:** User engagement, conversion
- **Performance Metrics:** Response times, throughput
- **AI Metrics:** Model latency, token usage

**Dashboards:**
- **System Dashboard:** Infrastructure health
- **Business Dashboard:** User engagement
- **AI Dashboard:** Model performance

---

## Deployment Strategy

### CI/CD Pipeline

**GitHub Actions:**
1. **Build:** npm install, build
2. **Test:** Jest, Cypress
3. **Deploy:** AWS CLI, SAM

**Environments:**
- **Development:** Auto-deploy on push
- **Staging:** Manual approval
- **Production:** Manual approval

**Infrastructure as Code:**
- **Terraform:** AWS infrastructure
- **CloudFormation:** AWS resources
- **SAM:** Lambda functions

### Blue/Green Deployment

**Strategy:**
1. **Deploy New Version:** To new environment
2. **Test New Version:** Automated tests
3. **Switch Traffic:** Route 53 weighted routing
4. **Monitor:** CloudWatch, X-Ray
5. **Rollback:** If issues detected

---

## Cost Optimization

### Reserved Capacity

1. **DynamoDB:** Reserved capacity for predictable workloads
2. **Lambda:** Provisioned concurrency for critical functions
3. **RDS:** Reserved instances for analytics

### Auto-Scaling

1. **Lambda:** Automatic scaling
2. **DynamoDB:** On-demand with auto-scaling
3. **ECS:** Auto-scaling based on CPU/memory

### Cost Monitoring

1. **Cost Explorer:** Monthly costs
2. **Budgets:** Set cost alerts
3. **Tags:** Cost allocation tags

---

## Disaster Recovery

### Backup Strategy

1. **DynamoDB:** On-demand backups + PITR
2. **S3:** Versioning + lifecycle policies
3. **RDS:** Automated backups + snapshots

### Recovery Strategy

1. **RTO:** 4 hours
2. **RPO:** 1 hour
3. **Testing:** Quarterly DR tests

---

## Scalability

### Horizontal Scaling

1. **Lambda:** Automatic scaling to 1000+ concurrent
2. **API Gateway:** Automatic scaling
3. **CloudFront:** Global distribution

### Vertical Scaling

1. **Lambda:** Memory up to 10GB
2. **DynamoDB:** Throughput scaling
3. **RDS:** Instance scaling

### Performance Optimization

1. **Caching:** ElastiCache, DAX
2. **CDN:** CloudFront
3. **Compression:** Gzip, Brotli

---

## Future Enhancements

### Real-time Features

1. **Live Match Tracking**
   - WebSocket connections
   - Real-time updates
   - Push notifications

2. **Live Chat**
   - Fan chat during matches
   - Club-specific channels
   - Moderation

### Advanced Analytics

1. **Machine Learning**
   - Predictive models
   - Recommendation engine
   - Anomaly detection

2. **Data Warehouse**
   - Redshift for analytics
   - QuickSight for dashboards
   - ML insights

### Internationalization

1. **Multi-language**
   - German language support
   - English language support
   - Auto-translation

2. **Regional Optimization**
   - Regional endpoints
   - Localized content
   - Time zone support

---

## Conclusion

Bundesliga Wrapped's architecture is designed for **scalability, performance, and security**. By leveraging AWS services and modern best practices, the system can handle millions of users while maintaining a premium, cinematic experience.

The **modular architecture** allows for independent scaling of components, while the **AI-powered storytelling** creates a unique, personalized experience for each fan. The **cloud-native design** ensures high availability, disaster recovery, and cost efficiency.

Through careful attention to **security, compliance, and performance**, Bundesliga Wrapped ensures that fans can enjoy their personalized experiences with confidence and peace of mind.