import React from 'react'

const TwoColumnLayout = ({leftColumn, rightColumn}) => {
    const styles = {
        container: {
            display: 'flex',
            width: '100%',
        },
        column: {
            flex: 1,
            padding: '20px'
        }
    };

    return (
        <div style={styles.container}>
           <div styles={styles.column}>
              {leftColumn}
           </div>
           <div styles={styles.column}>
              {rightColumn}
           </div>
        </div>
    )
}

export default TwoColumnLayout;