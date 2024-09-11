import React from 'react'

const CenterDiv = ({children}) => {
    const styles = {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    };

    return (
        <div style={styles}>
           {children}
        </div>
    )
}

export default CenterDiv