import React, {useState, useEffect} from 'react'

function ConcurrentFetchExample(){
    const [data, setData] = useSate({});
    const [isLoading, setIsLoading] = useSate(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const urls = [
                    'https://api.example.com/data1',
                    'https://api.example.com/data2'
                ]

                const promises = urls.map(url => fetch(url).then(response => response.json()).catch(err => ({error: err.message})));
                const results = await Promise.all(promises);

                setData(results.reduce((acc, cur, index) => ({
                    ...acc,
                    [`data${index+1}`]: cur,
            
                }), {}));

                setIsLoading(false);
            } catch (err) {
                setError(err.message)
            }
            };
            fetchData();
        }, []);

    if(isLoading){
        return <div>Loading</div>;
    }

    if(error){
        return <div>Error: {error}</div>
    }

    return (
        <div>
            {
                Object.keys(data).map(key => {
                    <div key={key}>
                        <h2>{key}</h2>
                        <pre>{JSON.stringify(data[key], null, 2)}</pre>
                    </div>
                })
            }
        </div>
    )
}