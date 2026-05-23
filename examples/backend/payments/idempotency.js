const paymentStore = new Map();

export async function createPayment({ orderId, amountInPaise, idempotencyKey, provider }) {
  if (!idempotencyKey) {
    throw new Error("idempotencyKey is required");
  }

  const existing = paymentStore.get(idempotencyKey);
  if (existing) return existing;

  const payment = {
    id: crypto.randomUUID(),
    orderId,
    amountInPaise,
    status: "pending",
    providerReference: null
  };

  paymentStore.set(idempotencyKey, payment);

  const providerResult = await provider.charge({
    amountInPaise,
    metadata: { orderId, paymentId: payment.id }
  });

  payment.status = providerResult.status;
  payment.providerReference = providerResult.reference;

  return payment;
}

