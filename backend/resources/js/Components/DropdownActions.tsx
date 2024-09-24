import React from 'react';
import { DefaultButton } from "@fluentui/react";
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { generateMenuProps } from "@/utils/generateMenuProps";
import { usePage } from '@inertiajs/react';

// Initialize icons
initializeIcons();

interface DropdownActionsProps {
  projectId: number;
  routes: any;
}

const DropdownActions: React.FC<DropdownActionsProps> = ({ projectId, routes }) => {
  const auth = usePage().props.auth as any;
  const isLoggedIn = auth?.user != null || auth?.name != null;

  const modifiedMenuProps = generateMenuProps(projectId, routes).items.map((item: any) => {
    // Disable all menu items except "Details" if the user is not logged in
    if (item.key !== 'details' && !isLoggedIn) {
      return { ...item, disabled: true };
    }
    return item;
  });

  return (
    <DefaultButton
      className="m-0 p-0 border-0 bg-transparent hover:bg-transparent hover:text-blue-500"
      menuProps={{ items: modifiedMenuProps }}
    />
  );
};

export default DropdownActions;
