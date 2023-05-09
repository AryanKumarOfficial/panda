import { useRouter } from 'next/router';

import React from 'react'

const post = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    const {sno}=router.query
    return (
        <div>dynamic routes  {sno}</div>
    )
}

export default post