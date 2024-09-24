import { usePage } from '@inertiajs/react';
import '../../css/classes.scss';
import React from 'react';

const UserStatus: React.FC = () => {
    const auth = usePage().props.auth as any;
    console.log("UserStatus:  auth → ", { auth });

    return (
        <div className="user-status">
            <span
                style={{
                    display: 'inline-block',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: (auth && (auth?.name || auth?.user)) ? 'green' : 'red',
                    marginRight: '8px',
                }}
            />
            <span className="user-status-text" style={{ color: (auth && (auth?.name || auth?.user)) ? 'green' : 'red' }}>
                {`Hello, ${(auth && (auth?.name || auth?.user)) ? (auth?.name ?? auth?.user?.name) : 'Guest'}!`}
            </span>
        </div>
    );
}

export default UserStatus;
