import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../Hooks/UseMenu';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaPencilAlt } from 'react-icons/fa'

const ManageItems = () => {
    const [menu, refetch] = useMenu();

    const [axiosSecure] = useAxiosSecure()

    const handleDelete = item => {
        console.log(item);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log('deleted res', res.data.deletedCount);
                        if (res.data.deletedCount > 0) {
                            refetch;
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div>
            <SectionTitle heading={'Manage All Items'} subHeading={'Hurry Up!'} />
            <h1 className='text-2xl font-semibold my-6 m-4'>Total Items: {menu.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            menu.map((item, i) =>

                                <tr key={item._id}>
                                    <th>
                                        {i + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                        <p><small>Category: {item.category}</small></p>
                                    </td>
                                    <td>${item.price}</td>
                                    <th className='bg-orange-300'>
                                        <button>
                                            
                                        </button>
                                    </th>
                                    <th>
                                        <button
                                            onClick={() => handleDelete(item)}
                                            className="btn bg-red-600 hover:text-red-600 text-white btn-ghost">
                                            <FaTrashAlt />
                                        </button>
                                    </th>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;