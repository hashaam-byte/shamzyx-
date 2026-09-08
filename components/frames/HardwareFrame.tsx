export default function HardwareFrame({ image, alt }: { image: string; alt: string }) {
  return (
    <div className="relative w-full h-[130px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})`, backgroundColor: "#0d0710" }}
        role="img"
        aria-label={alt}
      />
      <span className="absolute top-2 left-2 w-3 h-3 border-t border-l border-purple/60" />
      <span className="absolute top-2 right-2 w-3 h-3 border-t border-r border-purple/60" />
      <span className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-purple/60" />
      <span className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-purple/60" />
    </div>
  );
}
