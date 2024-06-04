"use server";

export async function fetchCounterClicks() {
  try {
    const response = await fetch(
      `https://keyvalue.immanuel.co/api/KeyVal/GetValue/${process.env.CLICKCOUNTKEY}/count`,
      {
        cache: "no-store",
      },
    );
    const data = await response.json();
    return parseInt(data);
  } catch (error) {
    console.error(error);
    return 0;
  }
}

export async function incrementGlobalCounterClicks(amount: number) {
  try {
    const clickCount = await fetchCounterClicks();
    if (typeof clickCount !== 'number' || clickCount <= 0) {
      throw new Error('Error fetching click count from API');
    }
    await fetch(
      `https://keyvalue.immanuel.co/api/KeyVal/UpdateValue/${process.env.CLICKCOUNTKEY}/count/${clickCount + amount}`,
      { method: "POST" },
    );
  } catch (error) {
    console.error(error);
  }
}
