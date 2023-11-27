

const ProgressBar = (props) => {
    let left = 0;
    if (props.second || props.second === 0) {
        left = props.second * 100 / 13;
    }

    return (
        <div style={{
            width: '100%',
            height: '8px',
            marginTop: '10px',
            borderRadius: '12px',
            position: 'relative',
            background: '#ccc',
            border: '1px solid #A238FF'
        }}>
            <div style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                position: 'absolute',
                left: left + 'px',
                top: '1px',
                backgroundColor: '#A238FF',
                transition: 'all 0.3s ease'
            }} />
        </div>
    )
}

export default ProgressBar