import { useEffect, useState } from "react"

const useSeller = email =>{
    const [isSeller, setIsSeller] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    useEffect( () =>{
        if(email){
            fetch(`https://project-12-server.vercel.app/users/seller/${email}`)
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                setIsSeller(data.isAdmin)
                setIsAdminLoading(false)
            })
        }
    }, [email])
    return [isSeller, isAdminLoading]
}

export default useSeller;