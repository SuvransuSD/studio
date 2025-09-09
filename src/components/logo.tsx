import { Shield } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Shield className="h-7 w-7 text-primary" />
      <span className="font-bold text-lg text-foreground">Guardian Shield</span>
    </div>
  );
}
