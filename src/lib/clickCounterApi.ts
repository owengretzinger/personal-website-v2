"use server";

export async function fetchCounterClicks() {
  const response = await fetch(
    `https://keyvalue.immanuel.co/api/KeyVal/GetValue/${process.env.CLICKCOUNTKEY}/count`,
    {
      cache: "no-store",
    },
  );
  const data = await response.json();
  return parseInt(data);
}

export async function incrementGlobalCounterClicks(amount: number) {
  const clickCount = await fetchCounterClicks();
  if (typeof clickCount !== "number" || clickCount <= 0) {
    return;
  }
  await fetch(
    `https://keyvalue.immanuel.co/api/KeyVal/UpdateValue/${process.env.CLICKCOUNTKEY}/count/${clickCount + amount}`,
    { method: "POST" },
  );
}
