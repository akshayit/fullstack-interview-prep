# DevOps and Cloud Interview Preparation

DevOps interviews test whether you can ship safely, recover quickly, and operate systems in production.

## Learning Path

1. Git and GitHub collaboration.
2. CI/CD and GitHub Actions.
3. Docker images and containers.
4. Kubernetes basics.
5. AWS basics: EC2, S3, CloudFront, API Gateway, Lambda, RDS, Redis cache.
6. Monitoring, logging, alerts, and deployment strategies.

## Concept Explanation

DevOps connects code to production. It covers build, test, release, infrastructure, observability, and incident response.

## Beginner Explanation

Writing code is not enough. Amazon checkout must be tested, deployed safely, monitored, and rolled back quickly if payment failures increase.

## Realistic Analogy

CI/CD is like a quality gate in a warehouse. Every package should pass checks before reaching customers.

## Interview Answer

A good CI/CD pipeline runs linting, tests, build, security checks, deployment, smoke tests, and rollback support. Production systems need metrics, logs, traces, alerts, and runbooks.

## GitHub Actions Example

```yaml
name: ci

on:
  pull_request:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm test
      - run: npm run build
```

## Docker Example

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

## Deployment Strategies

- Rolling deployment: update instances gradually.
- Blue-green: switch traffic from old environment to new environment.
- Canary: send small traffic percentage to new version first.
- Feature flags: deploy code separately from releasing behavior.

## Pitfalls

- No rollback plan.
- Storing secrets in repo.
- Alerts without runbooks.
- Deploying without smoke tests.

## Debugging Tips

- Check deployment diff.
- Compare error rate before and after release.
- Inspect container logs and health checks.
- Verify environment variables and secrets.

## Question Bank

### Basic

1. What is Git?
2. What is CI/CD?
3. What is Docker?
4. What is S3?

### Intermediate

1. What is a Docker image?
2. How do you deploy a Node.js app?
3. What is CloudFront?
4. What is RDS?

### Advanced

1. Blue-green vs canary?
2. How do you design zero-downtime migrations?
3. How do you monitor p99 latency?
4. How do you secure secrets in CI?

### Scenario-based

1. A new deployment causes 500 errors in checkout. What do you do first?
2. Images are slow globally. How do S3 and CloudFront help?
3. Lambda cold starts hurt API latency. What are your options?

### Production Debugging

1. Health checks pass but users see errors.
2. CPU is normal but latency is high.
3. Logs are missing after container restart.

### Architecture

1. How would you deploy a Next.js app and Express API on AWS?
2. How would you design logs and metrics for payment service?
3. How would you deploy a Redis-backed rate limiter?

### Coding Exercises

1. Write a GitHub Actions pipeline.
2. Create a Dockerfile for an API.
3. Add a health endpoint.

### Common Mistakes

- Building huge Docker images.
- Running as root unnecessarily.
- No readiness checks.
- No database migration strategy.

## Best Practices

- Keep deployments repeatable.
- Use least privilege IAM.
- Store secrets in secret managers.
- Add dashboards before incidents happen.

## Performance Concerns

Track CPU, memory, latency, error rate, saturation, network, cold starts, queue depth, and DB connections.

## Security Concerns

Patch dependencies, scan images, restrict IAM, encrypt storage, rotate secrets, and audit access.

