import { SecurityCheck } from '../../src/components/SecurityCheck';
import { useNetworkGuard, NetworkGuard } from '../../src/hooks/useNetworkGuard';
import { useGasEstimator } from '../../src/hooks/useGasEstimator';
import { Transaction, TransactionButton } from '@coinbase/onchainkit/transaction';

const calls = [{ to: '0x1234...', data: '0x' }];

export function App() {
  const { estimatedFee, isSpike, waitTimeMinutes } = useGasEstimator({
    maxAcceptableFee: '0.01',
  });

  return (
    <div>
      <NetworkGuard />
      <Transaction calls={calls}>
        <SecurityCheck />
        {isSpike && (
          <p>⚠️ Gas spike — wait {waitTimeMinutes} min for better rates</p>
        )}
        {!isSpike && <p>✅ Fee: {estimatedFee} ETH</p>}
        <TransactionButton />
      </Transaction>
    </div>
  );
}
