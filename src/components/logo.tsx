import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image src="/logo.png" alt="Pretorian Logo" width={28} height={28} className="h-7 w-7" />
      <span className="font-bold text-lg text-foreground">Pretorian</span>
    </div>
  );
}
