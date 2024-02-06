(function(){
    const listElement = document.querySelectorAll('.menu-items-inside');
    const list = document.querySelector('.menu-links');
    const menu = document.querySelector('.menu-hamburguer');

    const addClick = () => {
        listElement.forEach(element =>{
            element.addEventListener('click',()=>{
                let submenu = element.children[1]
                let height = 0
                element.classList.toggle('menu-item--active')

                if(submenu.clientHeight === 0){
                    height = submenu.scrollHeight;
                }
                submenu.style.height = `${height}px`;
            });
        })
    }
    addClick();
})();