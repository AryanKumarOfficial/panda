import React from 'react'

const Dumb = () => {
    return (
        <>
            {/*extends to global scope from component level  */}
            <style jsx global>
                {`
            .dummy{
                background:yellow;
            }
            `}
            </style>
            <div className="dummy">Dumb</div>
        </>
    )
}

export default Dumb