import iconFailed from 'images/icon/ic_failed.svg';
import iconSuccess from 'images/icon/ic_success.svg';
import { ToastContent, ToastOptions, toast } from 'react-toastify';

export function MessegerCommon({ content }: { content: any }) {
  return <div className="text-white text-sm">{content}</div>;
}

export const toastMes = {
  success: (content: ToastContent, opts?: ToastOptions) => {
    return toast.success(<MessegerCommon content={content} />, {
      icon: () => (
        <img
          src={iconSuccess}
          alt="IMG"
          className="img-close flex item-start"
        />
      ),
      className: 'mess-custom-body',
      ...opts,
    });
  },

  loading: (content: ToastContent, opts?: ToastOptions) => {
    return toast.success(<MessegerCommon content={content} />, {
      icon: () => (
        <div>
          <div className="loader-in-swap-box" />
        </div>
      ),
      className: 'mess-custom-body',
      ...opts,
    });
  },

  error: (content: ToastContent, opts?: ToastOptions) => {
    return toast.error(<MessegerCommon content={content} />, {
      icon: () => <img src={iconFailed} alt="IMG" className="img-close" />,
      className: 'mess-custom-body',
      ...opts,
    });
  },
};
