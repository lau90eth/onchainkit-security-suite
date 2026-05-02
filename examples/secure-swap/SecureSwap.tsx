import { useContractVerification } from '../../src/hooks/useContractVerification';
import { useGasEstimator } from '../../src/hooks/useGasEstimator';
import { useTokenAllowance } from '../../src/hooks/useTokenAllowance';
import { Transaction, TransactionButton } from '@coinbase/onchainkit/transaction';
import { SecurityCheck } from '../../src/components/SecurityCheck';

const UNISWAP_ROUTER = '0x2626664c2603336E57B271c5C0b26F421741e481';
const USDC = '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913';

export function SecureSwap() {
  const { risk, warnings } = useContractVerification({ 
    address: UNISWAP_ROUTER 
  });
  
  const { estimatedFee, isSpike } = useGasEstimator();
  
  const { allowances } = useTokenAllowance({
    tokens: [USDC],
    spenders: [UNISWAP_ROUTER],
  });

  const hasInfiniteApproval = allowances.some(a => a.isInfinite);
  const calls = [{ to: UNISWAP_ROUTER, data: '0x' }];

  return (
    <div>
      {risk === 'high' && (
        <div>
          🔴 High risk contract
          {warnings.map(w => <p key={w}>{w}</p>)}
        </div>
      )}
      {hasInfiniteApproval && (
        <p>⚠️ You have an infinite approval to this contract</p>
      )}
      {isSpike && <p>⚠️ Gas spike detected</p>}
      <p>Estimated fee: {estimatedFee} ETH</p>

      <Transaction calls={calls}>
        <SecurityCheck />
        <TransactionButton disabled={risk === 'high'} />
      </Transaction>
    </div>
  );
}
