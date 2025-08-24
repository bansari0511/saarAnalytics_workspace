const [query, setQuery] = useState("");
const [options, setOptions] = useState([]);

async function fetchSuggestions(searchText) {
    try {
        const res = await fetch("http://172.18.139.11:8082/api/news/headline", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(searchText),
        });

        const data = await res.json();
        setOptions(data || []);
        console.log("data:", data);

    } catch (err) {
        console.error("API error:", err);
        setOptions([]);
    }
}

useEffect(function () {
    if (query.length < 3) {
        setOptions([]);
        return;
    }
    const delayDebounce = setTimeout(async () => {
        fetchSuggestions(query);
    }, 300);
    return () => clearTimeout(delayDebounce);
}, [query]);

function handleChange(e) {
    setQuery(e.target.value);
}

function renderSuggestion(item, index) {
    return (
        <ListItem key={index} disablePadding>
            <ListItemText primary={item} />
        </ListItem>

    );

}