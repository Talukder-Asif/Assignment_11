import React, { useContext } from 'react';
import { AuthContext } from '../../../Authantication/AuthProvider/AuthProvider';

const Profile = () => {
    const {user}= useContext(AuthContext)
    return (
        <div>
        <h3 className=" mb-5 text-3xl md:text-4xl lg:text-5xl text-gray-900  font-bold">
             My Profile</h3>
            <div className='flex gap-10 flex-wrap'>
                <img className='w-48 rounded-full' src={user.photoURL} alt="" />
                <div>
                <h3 className="text-xl mb-5 md:text-2xl text-gray-900 lg:text-3xl font-bold">
             Full Name : {user.displayName}</h3>
                <h3 className="text-xl mb-5 md:text-2xl text-gray-900 lg:text-3xl font-bold">
             Email : {user.email}</h3>
                </div>
            </div>
        </div>
    );
};

export default Profile;