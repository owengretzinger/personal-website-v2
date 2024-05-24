import { fetchCount } from "@/lib/clickCounterApi";
import ButtonWithClickCounterClient from "./ButtonWithClickCounterClient";

export default async function ButtonWithClickCounterServer() {
  const initialCount = await fetchCount();

  return <ButtonWithClickCounterClient initialCount={initialCount} />;
}
