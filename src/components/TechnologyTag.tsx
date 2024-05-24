export default function TechnologyTag({ text }: { text: string }) {
  return (
    <div className="rounded-full bg-lightTeal px-[10px] py-[2px] text-sm text-darkTeal">
      {text}
    </div>
  );
}
