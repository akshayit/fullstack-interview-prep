# AWS Basics for Fullstack Interviews

## EC2

Virtual machines for running applications. Use when you need control over runtime, networking, and long-running processes.

## S3

Object storage for images, videos, uploads, logs, and backups.

Product example: Instagram-style media uploads store original images in S3-like storage and deliver through CDN.

## CloudFront

CDN for caching static assets near users.

Product example: Netflix thumbnails and product images load faster globally through CDN edge locations.

## API Gateway

Managed entry point for APIs. Useful with Lambda or service routing, auth, throttling, and request transformation.

## Lambda

Serverless functions for event-driven workloads.

Use case: generate image thumbnails after upload.

## RDS

Managed relational databases like PostgreSQL and MySQL.

Use case: orders, users, payments, inventory.

## Redis Cache

Managed Redis can support caching, sessions, counters, rate limits, and queues.

## Deployment Strategy

For a fullstack app:

1. Host frontend on CDN.
2. Run API on containers, EC2, or serverless.
3. Store files in S3.
4. Store relational data in RDS.
5. Use Redis for cache and rate limits.
6. Add logs, metrics, traces, and alerts.

## Interview Follow-ups

1. When would you choose Lambda over EC2?
2. How does CloudFront improve performance?
3. How do you secure S3 uploads?
4. How do you deploy a Next.js app on AWS?
5. How do you monitor RDS performance?

