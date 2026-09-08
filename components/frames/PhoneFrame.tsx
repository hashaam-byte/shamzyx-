export default function PhoneFrame({ image, alt }: { image: string; alt: string }) {
  return (
    <div className="relative w-[92px] h-[186px] rounded-[14px] border-2 border-purple/30 bg-bg overflow-hidden shrink-0">
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-1.5 rounded-full bg-purple/25 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})`, backgroundColor: "#0d0710" }}
        role="img"
        aria-label={alt}
      />
    </div>
  );
}
