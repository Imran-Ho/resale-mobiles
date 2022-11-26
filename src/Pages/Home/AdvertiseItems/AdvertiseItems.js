import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../Loading/Loading';
import Advertisement from './Advertisement';

const AdvertiseItems = () => {
        
    const { data: advertisements, isLoading, refetch } = useQuery({
        queryKey: ['advertisement'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertisement')
            const data = await res.json();
            return data;
        }
    })

    // if(isLoading){
    //     return <Loading></Loading>
    // }
    

     // added product deleting action here
     const removingAction = id =>{
        console.log(id)
        fetch(`http://localhost:5000/advertisement/${id}`,{
            method: 'DELETE',
            headers: {
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                refetch()
                toast.success(`advertising product deleted successfully`)
            }
        })
    }
    return (
        <div className=''>
                <div>
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