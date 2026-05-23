# System Design: File Upload Service

## Problem Statement

Design a file upload service for profile photos, product images, resumes, and support attachments.

## Functional Requirements

- Upload files securely.
- Generate thumbnails or previews.
- Serve files through CDN.
- Support virus scanning and metadata.

## Non-functional Requirements

- Large file support.
- Durable storage.
- Low download latency.
- Abuse prevention.

## HLD

```mermaid
flowchart LR
  Client --> API[Upload API]
  API --> Signed[Signed URL Generator]
  Client --> Object[(Object Storage)]
  Object --> Event[Object Event]
  Event --> Worker[Processing Worker]
  Worker --> Meta[(Metadata DB)]
  Object --> CDN[CDN]
```

## LLD

- Use pre-signed URLs so files go directly to object storage.
- Process thumbnails asynchronously.
- Store metadata separately from binary content.

## API Design

```http
POST /v1/uploads/presigned-url
GET /v1/files/:id
DELETE /v1/files/:id
```

## DB Schema

```sql
CREATE TABLE files (
  id UUID PRIMARY KEY,
  owner_id BIGINT NOT NULL,
  storage_key TEXT NOT NULL,
  content_type TEXT NOT NULL,
  size_bytes BIGINT NOT NULL,
  status TEXT NOT NULL
);
```

## Scaling Approach

Upload directly to S3-like storage, use CDN for downloads, process files with workers.

## Tradeoffs

Direct upload reduces API load but needs careful signed URL permissions and finalization flow.

## Bottlenecks

Large uploads, thumbnail workers, virus scan queue, CDN cache misses.

## Security Concerns

Validate content type and size, scan files, avoid public buckets, expire signed URLs, and check ownership before download.

## Monitoring Strategy

Track upload failures, processing lag, scan failures, CDN hit ratio, and storage growth.

