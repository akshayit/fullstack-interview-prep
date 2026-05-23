CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE orders (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(id),
  status TEXT NOT NULL CHECK (status IN ('created', 'paid', 'packed', 'shipped', 'delivered', 'cancelled')),
  total_in_paise INTEGER NOT NULL CHECK (total_in_paise >= 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE order_items (
  id BIGSERIAL PRIMARY KEY,
  order_id BIGINT NOT NULL REFERENCES orders(id),
  product_id BIGINT NOT NULL,
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  price_in_paise INTEGER NOT NULL CHECK (price_in_paise >= 0)
);

CREATE INDEX idx_orders_user_created_at ON orders (user_id, created_at DESC);
CREATE INDEX idx_order_items_order_id ON order_items (order_id);

