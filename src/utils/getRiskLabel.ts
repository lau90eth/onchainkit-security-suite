/**
 * Returns a human-readable label and emoji for a risk level.
 */
export function getRiskLabel(risk: 'low' | 'medium' | 'high'): {
  emoji: string;
  label: string;
  description: string;
} {
  switch (risk) {
    case 'low':
      return {
        emoji: '✅',
        label: 'Safe',
        description: 'Contract verified, no known risks detected',
      };
    case 'medium':
      return {
        emoji: '⚠️',
        label: 'Caution',
        description: 'Some risk signals detected — review before signing',
      };
    case 'high':
      return {
        emoji: '🔴',
        label: 'High Risk',
        description: 'Contract not verified — proceed with extreme caution',
      };
  }
}
