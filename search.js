const product=[
    {
        id: 0,
        image: 'img/sepatu.webp',
        title: 'Sepatu super',
        price: 120
    },

    {
        id: 1,
        image: 'img/hp-itel.jpg',
        title: 'Itel Nmax',
        price: 120
    },
    
    {
        id: 2,
        image: 'img/iphone-15.webp',
        title: 'Iphone 15 Promax',
        price: 120
    },
    
    {
        id: 3,
        image: 'img/sepatu.webp',
        title: 'Sepatu',
        price: 120
    },

    {
        id: 4,
        image: 'img/sepatu.webp',
        title: 'Sepatu',
        price: 120
    },
    {
        id: 5,
        image: 'img/sepatu.webp',
        title: 'Sepatu',
        price: 120
    },
]

const categories = [...new Set(product.map((item)=> {return item}))]

document.getElementById('searchBar').addEventListener('keyup', (e)=>{
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item)=>{
        return(
            item.title.toLocaleLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
});

const displayItem = (items)=> {
    document.getElementById('root').innerHTML=items.map((item)=>{
        var {image, title, price} = item;
        return(
            `<div class='box'>
                <div class='img-box'>
                    <img class='image' src=${image}></img>
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>${price}.00</h2>
                    <button><a href='https://web.whatsapp.com/'>Add to cart</a></button>
                </div>
            </div>`
        )
    }).join('')
};
displayItem(categories);

// Responsive adjustments
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = (sidebar.style.display === 'none' || sidebar.style.display === '') ? 'block' : 'none';
}

// Add an event listener to close the sidebar when a link is clicked (optional)
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        const sidebar = document.querySelector('.sidebar');
        if (window.innerWidth <= 600) {
            sidebar.style.display = 'none';
        }
    });
});