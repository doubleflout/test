/** Create one reservation for a caller-supplied request identifier. */
export async function reserveStock(store, { sku, quantity, requestId }) {
  if (!sku || !requestId || !Number.isInteger(quantity) || quantity <= 0) {
    throw new Error('invalid reservation');
  }

  const available = await store.getAvailable(sku);
  if (available < quantity) throw new Error('insufficient stock');

  await store.setAvailable(sku, available - quantity);
  return store.addReservation({ sku, quantity, requestId });
}
