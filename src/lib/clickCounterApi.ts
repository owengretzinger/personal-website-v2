"use server";

export const fetchCount = async () => {
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
};

export const incrementCount = async () => {
  try {
    const clickCount = await fetchCount();
    await fetch(
      `https://keyvalue.immanuel.co/api/KeyVal/UpdateValue/${process.env.CLICKCOUNTKEY}/count/${clickCount + 1}`,
      { method: "POST" },
    );
  } catch (error) {
    console.error(error);
  }
};
