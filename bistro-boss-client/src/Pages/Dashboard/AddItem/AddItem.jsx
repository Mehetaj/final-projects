import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const img_hosting_token = import.meta.env.VITE_image_upload_token
console.log(img_hosting_token);
const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const [axiosSecure] = useAxiosSecure()
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = (data) => {
        // console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0])
        // const navigate = useNavigate()


        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(imgResponse => {
            console.log(imgResponse);
            if (imgResponse.success) {
                const imgUrl = imgResponse.data.display_url;
                // console.log(imgUrl);
                const {name,price, category, recipe} = data;
                const newItem = {name,price: parseFloat(price),category,recipe, image: imgUrl}
                console.log(newItem);
                axiosSecure.post('/menu', newItem)
                .then(data => {
                    console.log('after posting new Item',data.data)
                    if (data.data.insertedId) {
                        reset()
                        // navigate('/menu')
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Item Added Successfully',
                            showConfirmButton: false,
                            timer: 1200
                        })
                    }
                })
            }
        })
    }

    return (
        <div className=''>
            <SectionTitle subHeading={"What's New"} heading={'Add and Item'} />

            <div className='bg-[#F3F3F3] w-full md:w-[600px] xl:w-[950px] h-[830px] p-8'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=''>
                        <label className='block mb-2' htmlFor="recipename">Recipe name*</label>
                        <input
                            className='w-full h-[52px] '
                            type="text" placeholder='Recipe name'
                            {...register("name", { required: true, maxLength: 80 })}
                        />
                    </div>
                    <div className='grid mt-6 grid-cols-1 xl:gap-10 xl:grid-cols-2'>
                        <div className='mb-4'>
                            <label className='block mb-2' htmlFor="recipename">Category*</label>
                            <select
                                defaultValue={'Pick One'}
                                className='w-full h-[52px] p-1'
                                {...register("category", { required: true })}
                            >
                                <option value="">Pick One</option>
                                <option value="Pizza">pizza</option>
                                <option value="Soup">soup</option>
                                <option value="Salad">salad</option>
                                <option value="Dessart">dessart</option>
                                <option value="Drinks">drinks</option>
                            </select>
                        </div>
                        <div>
                            <label className='block my-2' htmlFor="recipename">Price*</label>
                            <input
                                className='w-full h-[52px] p-1'
                                type="number" placeholder=' Price'
                                {...register("price", { required: true, maxLength: 80 })}
                            />
                        </div>
                    </div>
                    <div>
                        <label className='block my-2' htmlFor="recipename">Recipe Details*</label>
                        <textarea
                            {...register("recipe", { required: true })}
                            className='w-full xl:w-[880px] h-[250px] p-1'
                            type="text" placeholder='Recipe Details' />
                    </div>

                    <div>
                        <label htmlFor="" className="label">
                            <span className=' label-text'>Item Image*</span>
                        </label>
                        <input
                            type="file"
                            className=' file-input file-input-bordered w-full max-w-xs'
                            {...register("image", { required: true, maxLength: 80 })}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Add Item" className='btnp' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;