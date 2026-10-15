export type RsvpPayload = {
  name: string;
  attending: "accepts" | "declines";
  guestCount?: number;
  contact?: string;
  dietary?: string;
  message?: string;
};

/**
 * INTEGRATION POINT: no backend is connected yet.
 * Replace this with a real call (Formspree, a serverless route, a sheet
 * webhook) before launch. It currently resolves after a short delay so the
 * UI's loading/success states can be previewed honestly, without claiming a
 * response was actually recorded anywhere.
 */
export async function submitRsvp(_payload: RsvpPayload): Promise<{ ok: true }> {
  await new Promise((resolve) => setTimeout(resolve, 600));
  return { ok: true };
}
