import React from 'react';

function Home({ data }) {
    return (
        data.map((d, i) => {    
            return (
                <p>{d.name}</p>
            )
        })
    );
}

export default Home;