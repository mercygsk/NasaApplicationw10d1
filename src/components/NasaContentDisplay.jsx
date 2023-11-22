// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
function NasaContentDisplay({ content }) {
    // we are using { content } instead of props so that we can access it
    // by just using content, instead of props.content

    const loaded = () => {
        return (
            <>
                {/* <h1>{content.collection.items[0].data[0].description}</h1>
                <h2>{content.collection.items[0].data[0].title}</h2>
                <img src={content.collection.items[0].links[0].href} alt={content.collection.items[0].data[0].title} /> */}
                <br/>
                <div>{content.collection.items.map(addContent)}</div>
            </>
        )
    }

    const loading = () => {
        return <h1>No content to Display</h1>
    }

    function addContent(item, index) {
        try {
            return <div key={index} style={{ border: '1px solid #ccc', padding: '50px', margin: '10px', borderRadius: '5px', backgroundColor:'beige',float:"left" }}>
                <div>
                    <img src={item["links"][0]["href"]} alt={item["data"][0]["title"]} />
                    <div>
                        <h5>{item['data'][0]['title']}</h5>
                        <p>
                            <b>{item['data'][0]['description']}</b>
                        </p>
                    </div>
                    <ul>
                        <li key={0}>Date Created - <b>{item['data'][0]['date_created']}</b></li>
                        <li key={1}>NASA Id - {item['data'][0]['nasa_id']}</li>
                    </ul>
                </div>
            </div>
        } catch (e) {
            console.log("Done")
        }
    }
    //The component must return some JSX
    return content ? loaded() : loading();
}
// We must export the component to use it in other files
export default NasaContentDisplay;