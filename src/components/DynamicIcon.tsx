import * as Icons from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function DynamicIcon({ name, className = "", size = 24 }: DynamicIconProps) {
  // Gracefully fallback to a default icon if not found
  const LucideIcon = (Icons as any)[name] || Icons.HelpCircle;
  return <LucideIcon className={className} size={size} />;
}
