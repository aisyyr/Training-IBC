import React,{useEffect, useState} from 'react'
import UserItem from '../../components/user-item'
import { host } from '../../configs'
import Layout from '../../layouts/Layout'
import { useRouter } from 'next/router'
import SingleUser from '../../components/single-user'
import { route } from 'next/dist/server/router'

// export default function UserDetail({detail:{data}}){
  export default function UserDetail(){
  const router = useRouter()

  const idUser = router.query.uid;
  return <div>Hello User, dengan ID {idUser}</div>;

//   const { uid } = router.query
//   const [data, setData] = useState(false);
//   const [loading, setLoading] = useState(false);
         
//   useEffect(()=>{
//     host.get(`users/${uid}`)
//            .then(response => { 
//               setData(response.data.data)
//               setLoading(false)
//         })
//    }, [host,uid])

// if (loading || !data) return <div> Loading... </div>
// console.log(data)
//     return (
//     <>
//     <Layout>
//     <SingleUser user={data && data} key={data && data.id} />
//     </Layout>
//     </>)
}