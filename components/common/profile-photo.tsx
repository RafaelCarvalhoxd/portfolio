import Image from "next/image";

interface ProfilePhotoProps {
  className?: string;
}

export function ProfilePhoto({ className = "" }: ProfilePhotoProps) {
  return (
    <div className={`opacity-0 animate-fade-in ${className}`}>
      <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-2 border-primary/30 ring-4 ring-primary/10 group cursor-pointer hover:border-primary/50 transition-all duration-500 hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <Image
          src="/profile-photo.jpg"
          alt="Rafael Carvalho"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110 brightness-110 contrast-105 saturate-110"
          priority
        />
        <div className="absolute inset-0 rounded-full shadow-lg shadow-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
}
