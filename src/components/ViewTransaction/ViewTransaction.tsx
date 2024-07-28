import { Link } from 'react-router-dom';

interface ViewTransactionProps {
  txUrl: string;
  title?: string;
  action?: string;
}

export function ViewTransaction({
  txUrl,
  title,
  action,
}: ViewTransactionProps) {
  return (
    <div>
      <div className="text-base mb-1">
        <span className="title">{title}</span> {action}
      </div>
      <Link to={txUrl} className="underline text-gray" target="_blank">
        View Transaction
      </Link>
    </div>
  );
}
