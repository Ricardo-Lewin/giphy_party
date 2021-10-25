const $searchContainer = $('#search-container');
const $searchInput = $('#search');
const $gifArea = $('#gif-container');

function addGif(res) {
    let numResults = res.data.length;
    if (numResults) {
        let randomIdx = Math.floor(Math.random() * numResults);
        let $newGif = $("<img>", {
            src: res.data[randomIdx].images.original.url
        });
        $gifArea.append($newGif);
    }
}


$('form').on('submit', async function(e) {
    e.preventDefault();

    let searchTerm = $searchInput.val();
    $searchInput.val("");

    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {params:{
        api_key:
        'UcF5JDWEBOdURrdx7ODptEwZMq5o1ESM', 
        q: searchTerm}
    });
    addGif(res.data);
})

$('#remove-search').on('click', function() {
    $gifArea.empty();
});