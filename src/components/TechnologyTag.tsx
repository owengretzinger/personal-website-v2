export default function TechnologyTag({ text }: { text: string }) {
  return (
    <div className="rounded-full bg-lightTeal px-3 py-1 text-xs text-darkTeal">
      {text}
    </div>
  );
}
