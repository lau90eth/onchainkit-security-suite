/**
 * Returns a Tailwind color class based on risk level.
 * Used for consistent risk UI across components.
 */
export function getRiskColor(
  risk: 'low' | 'medium' | 'high',
): { bg: string; text: string; border: string } {
  switch (risk) {
    case 'low':
      return {
        bg: 'bg-green-50',
        text: 'text-green-700',
        border: 'border-green-200',
      };
    case 'medium':
      return {
        bg: 'bg-yellow-50',
        text: 'text-yellow-700',
        border: 'border-yellow-200',
      };
    case 'high':
      return {
        bg: 'bg-red-50',
        text: 'text-red-700',
        border: 'border-red-200',
      };
  }
}
