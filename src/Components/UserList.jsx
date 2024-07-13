import React from "react";
import { userlist } from '../Data/UserList.js'


const UserList = () => {
    
    return (
        <>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">User List</h1>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-800 text-white">
                            <tr
                                className="w-1/6 py-3 h-12 px-4 uppercase font-semibold text-sm">
                                <th>Sr.No.</th>
                                <th>Email</th>
                                {/* <th>Camara</th> */}
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {userlist.map((user, index) => {
                                return <tr className='w-1/6 py-3 px-4 my-9 text-center'>
                                    <td>{index+1}</td>
                                    <td>{user.email}</td>
                                    {/* <td>{user.cam_id}</td> */}
                                    <td>{user.role}</td>
                                    <td className="flex gap-2 w-30 my-3 justify-center">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Edit
                                        </button>
                                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default UserList;
