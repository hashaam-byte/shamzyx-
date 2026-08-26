export default function BrowserFrame({ image, alt }: { image: string; alt: string }) {
  return (
    <div className="relative w-full rounded-lg border border-purple/30 bg-bg overflow-hidden">
      <div className="flex items-center gap-1.5 px-2.5 py-2 bg-panel border-b border-panel-border">
        <span className="w-2 h-2 rounded-full bg-purple/30" />
        <span className="w-2 h-2 rounded-full bg-purple/30" />
        <span className="w-2 h-2 rounded-full bg-purple/30" />
      </div>
      {/* Swap this div for <Image src={image} alt={alt} width={..} height={..} className="object-cover" /> once real screenshots are in */}
      <div
        className="w-full h-[110px] bg-cover bg-top"
        style={{ backgroundImage: `url(${image})`, backgroundColor: "#0d0710" }}
        role="img"
        aria-label={alt}
      />
    </div>
  );
}
