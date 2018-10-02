import { NavLink } from 'react-router-dom';
import { IconName } from '@blueprintjs/icons';
import * as React from 'react';
import classnames from 'classnames';
import { Classes } from '@blueprintjs/core';
interface ButtonLinkProps {
  icon: IconName;
  to: string;
  label: string;
}

const ButtonLink = (props: ButtonLinkProps) => {
  const { icon, to, label } = props;
  const currentClasses = classnames(
    Classes.BUTTON,
    Classes.MINIMAL,
    Classes.iconClass(icon)
  );
  return (
    <NavLink
      className={currentClasses}
      activeClassName={Classes.ACTIVE}
      to={to}
    >
      {label}
    </NavLink>
  );
};

export default ButtonLink;
