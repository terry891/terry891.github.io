import Card_T from '../components/Card_T';

function Maps() {

    const cards = [
        {id: 1, title: "Card_Title", body: "Body", url: "https://picsum.photos/200"}, 
        {id: 2, title: "Card_Title_2", body: "Body", url: "https://picsum.photos/300"},
        {id: 3, title: "Card_Title_3", body: "Body", url: "https://picsum.photos/400"}
    ]

    return (
        <div className="maps">
            <div className="cards_grid">
                {cards.map((card) => (
                    <Card_T key={card.id} item={card} />  // Use a unique key for each item
                ))}
            </div>
        </div>
    );
}

export default Maps;
