import { fetchCounterClicks } from "@/lib/clickCounterApi";
import ButtonWithClickCounterClient from "./ButtonWithClickCounterClient";

export default async function ButtonWithClickCounterServer() {
  const initialCount = await fetchCounterClicks();

  return <ButtonWithClickCounterClient initialServerCount={initialCount} />;
}
