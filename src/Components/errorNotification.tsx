import { useState } from 'react';

import classNames from 'classnames';

interface NotificationProps {
  isError: boolean;
}

export const Notification: React.FC<NotificationProps> = ({ isError }) => {
  const [isHidden, setIsHidden] = useState(!isError);

  const autoHide = () => {
    setTimeout(() => {
      setIsHidden(true);
    }, 3000);
  };

  autoHide();

  return (
    <div
      className={classNames(
        'notification',
        'is-danger',
        'is-light',
        'has-text-weight-normal',
        { hidden: isHidden },
      )}
    >
      <button // eslint-disable-line jsx-a11y/control-has-associated-label
        type="button"
        className="delete"
        onClick={() => setIsHidden(true)}
      />

      {/* show only one message at a time */}
      Unable to add a todo
      <br />
      Unable to delete a todo
      <br />
      Unable to update a todo
    </div>

  );
};