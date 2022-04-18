import React from 'react';

function Loading(Componet) {
    return function withLoadingcomponet({ isLoading, data }) {
        if (isLoading) {
            return (
                <p>Loading...</p>
            )
        } else {
            return (
                <Componet data={data} />
            )
        }
    }
}

    export default Loading;