import SmallCard from "./SmallCard";

const rows = [];
for (let i = 0; i < 15; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(<SmallCard key={i} />);
}
function Test(){
    return <tbody>{rows}</tbody>;
}

export default Test;