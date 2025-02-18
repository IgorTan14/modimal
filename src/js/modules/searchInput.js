export default function searchInput (){
    document.querySelector('.account__search').addEventListener('click', function(){
        document.querySelector('.search-input').style.display = 'block';
        //  document.querySelector('.search-input').style.transform = 'translateX(0%)' // плавное скрытие
    });

    document.querySelector('.search-input__close').addEventListener('click', function(){
        console.log('gg')
        // document.querySelector('.search-input').style.transform = 'translateX(120%)'
        document.querySelector('.search-input').style.display = 'none';
    })
}