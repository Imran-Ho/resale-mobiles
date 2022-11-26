import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Advertisement from './Advertisement';
import Loading from '../../../Loading/Loading';
const AdvertiseItems = () => {

    const { data: advertisements, isLoading, refetch } = useQuery({
        queryKey: ['advertisement'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertisement')
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }


    // added product deleting action here
    const removingAction = productId => {
        // console.log(productId)
        fetch(`http://localhost:5000/advertisement/${productId}`, {
            method: 'DELETE',
            headers: {
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(`advertising product deleted successfully`)
                }
            })
    }
    return (
        <div className=''>
            <div>
                {
                    advertisements && <>
                        <div>
                            <h3 className='text-3xl text-center text-primary mt-10 font-bold'>Advertising Products</h3>
                            <p className='text=1xl text-center text-secondary mb-5'>We give opportunity to put used products for advertising.</p>
                        </div>
                    </>
                }
            </div>
            <div className='grid lg:grid-cols-3 gap-3'>
                {
                    advertisements && advertisements?.map(advertisement => <Advertisement
                        key={advertisement._id}
                        advertisement={advertisement}
                        removingAction={removingAction}
                    ></Advertisement>)
                }
            </div>
        </div>
    );
};

export default AdvertiseItems;