"use client"
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/clerk-react';
import React, { useState } from 'react';
import Emptystate from './Emptystate';
import Link from 'next/link';

function Listing() {
    const { user } = useUser();
    const [userRoomList, setUserRoomList] = useState([]);

    return (
      <div>
            <div className='flex items-center justify-between'>
                <h2 className='font-bold text-2xl'>
                    {/*<span style={{ color: '#23c8c1' }}>Hello, </span>
                    <span style={{ color: '#204444' }}>{user?.fullName}</span>*/}
                </h2>
                
            </div>
            {userRoomList?.length == 0 ? (
                <Emptystate />
            ) : (
                <div>
                    
                </div>
            )}
        </div>
    );
}

export default Listing
