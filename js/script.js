function changeColor(){
    const body = document.querySelector('body')
    const button = document.querySelector('.container__button')

    if(body.getAttribute('style') !== 'background-color: #ced6e0'){
        body.setAttribute('style', 'background-color: #ced6e0')
    }else{
        body.setAttribute('style', 'background-color: #fff')
    }
}