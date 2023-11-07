import React, { useContext } from 'react';
import { AuthContext } from '../../../Authantication/AuthProvider/AuthProvider';

const Profile = () => {
    const {user}= useContext(AuthContext)
    return (
        <div>
        <h3 className="text-3xl mb-5 md:text-4xl text-gray-900 lg:text-5xl font-bold">
             My Profile</h3>
            <div>
                <img className='w-48 rounded-full' src={user.photoURL} alt="" />
            </div>
        </div>
    );
};

export default Profile;