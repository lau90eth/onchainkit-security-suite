// Re-exported types used across the security suite

export type RiskLevel = 'low' | 'medium' | 'high';

export type SecurityStatus = {
  label: string;
  status: 'safe' | 'warning' | 'danger';
  detail?: string;
};

export type TokenAllowance = {
  token: string;
  spender: string;
  amount: bigint;
  isInfinite: boolean;
};

export type ContractVerificationResult = {
  isVerified: boolean;
  isProxy: boolean;
  proxyTarget: string | null;
  risk: RiskLevel;
  warnings: string[];
};
