import React, { useEffect } from "react";
import './App.css';

const BASE_URL = "https://pollinations.ai/p/";

function App() {
    const queryParams = new URLSearchParams(window.location.search);
    const paramValue = queryParams.get('i');
    const urlDecoded = decodeURIComponent(paramValue);

    useEffect(() => {
        document.title = `Pixelo image preview: ${urlDecoded}`;
    }, [urlDecoded]);

    return (
        <div className="App">
            <img
                src={`${BASE_URL}${paramValue}?width=1000&height=1000&nofeed=true&nologo=true&model=flux`}
                alt={urlDecoded}
                width="100%"
            />
        </div>
    );
}

export default App;
