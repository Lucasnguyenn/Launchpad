import { ToastifyDebug } from './ToastifyDebug';
import {
  NOT_ENOUGH_FUNDS,
  RPC_ERROR,
  SLIPPAGE,
  USER_DENIED,
  extractError,
} from './transactionError';

export function getErrorMessage(error: any): string {
  const [message, type, errorData] = extractError(error);

  let failMsg: any = '';

  switch (type) {
    case NOT_ENOUGH_FUNDS:
      failMsg = (
        <div>
          There is not enough MATIC in your account on Polygon testnet to send
          this transaction.
        </div>
      );
      break;

    case USER_DENIED:
      failMsg = 'Transaction was cancelled.';
      break;

    case SLIPPAGE:
      failMsg =
        'The mark price has changed, consider increasing your Allowed Slippage by clicking on the "..." icon next to your address.';
      break;

    case RPC_ERROR:
      const originalError =
        errorData?.error?.message || errorData?.message || message;

      failMsg = (
        <div>
          Transaction failed due to RPC error.
          <br />
          Please try changing the RPC url in your wallet settings.
          <br />
          {originalError && <ToastifyDebug>{originalError}</ToastifyDebug>}
        </div>
      );
      break;

    default:
      failMsg = (
        <div>
          Transaction Failed
          <br />
          {message && <ToastifyDebug>{message}</ToastifyDebug>}
        </div>
      );
  }

  return failMsg;
}
