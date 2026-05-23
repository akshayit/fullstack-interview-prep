import express from "express";
import { rateLimit } from "./rate-limiter.js";

const app = express();
app.use(express.json({ limit: "1mb" }));
app.use(requestContext);
app.use(rateLimit({ windowMs: 60_000, max: 100 }));

app.post("/v1/orders", requireAuth, validateOrder, async (req, res, next) => {
  try {
    const order = await createOrder({
      userId: req.user.id,
      items: req.body.items
    });

    res.status(201).json({ data: order });
  } catch (error) {
    next(error);
  }
});

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.use((err, req, res, next) => {
  console.error({
    requestId: req.requestId,
    route: req.path,
    message: err.message
  });

  res.status(err.statusCode ?? 500).json({
    error: {
      code: err.code ?? "INTERNAL_ERROR",
      message: err.expose ? err.message : "Something went wrong"
    }
  });
});

function requestContext(req, res, next) {
  req.requestId = req.headers["x-request-id"] ?? crypto.randomUUID();
  res.setHeader("x-request-id", req.requestId);
  next();
}

function requireAuth(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) {
    res.status(401).json({ error: { code: "UNAUTHENTICATED" } });
    return;
  }

  req.user = { id: "user_123", role: "customer" };
  next();
}

function validateOrder(req, res, next) {
  if (!Array.isArray(req.body.items) || req.body.items.length === 0) {
    res.status(422).json({
      error: {
        code: "VALIDATION_ERROR",
        message: "Order must contain at least one item"
      }
    });
    return;
  }

  next();
}

async function createOrder(command) {
  return {
    id: crypto.randomUUID(),
    userId: command.userId,
    items: command.items,
    status: "created"
  };
}

app.listen(3000, () => {
  console.log("Order API listening on http://localhost:3000");
});

