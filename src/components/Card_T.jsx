function Card_T({item}) {

    function onCardClick() {
        // window.open(item.url, '_blank');
        alert("You clicked on " + item.title);
    }
    
    return <div className="card_default">
        <div className="card_header">
            <h2 className="card_title">{item.title}</h2>
        </div>
        <div className="card_body">
            <p className="card_text">{item.body}</p>
            <img src={item.url} alt={item.url_title} />
        </div>
        <div className="card_overlay">  
            <button className="card_button" onClick={onCardClick}>♡</button>
        </div>
    </div>;
}

export default Card_T;
