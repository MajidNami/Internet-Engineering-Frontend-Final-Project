function buy_popup(book){
    let books = [
        {
            title : 'JavaScript: The Definitive Guide',
            desc1 : 'For web developers and other programmers interested in using JavaScript, this bestselling book provides the most comprehensive JavaScript material on the market. The seventh edition represents a significant update, with new information for ECMAScript 2020, and new chapters on language-specific features.',
            desc2 : 'JavaScript: The Definitive Guide is ideal for experienced programmers who want to learn the programming language of the web, and for current JavaScript programmers who want to master it.',
            img : 'book-js.jfif',
            link : 'https://www.amazon.com/JavaScript-Definitive-Most-Used-Programming-Language/dp/1491952024'
        },
        {
            title : 'Learning React: Functional Web Development with React and Redux',
            desc1 : 'If you want to learn how to build efficient user interfaces with React, this is your book. Authors Alex Banks and Eve Porcello show you how to create UIs with this small JavaScript library that can deftly display data changes on large-scale, data-driven websites without page reloads. Along the way, you’ll learn how to work with functional programming and the latest ECMAScript features.',
            desc2 : 'Developed by Facebook, and used by companies including Netflix, Walmart, and The New York Times for large parts of their web interfaces, React is quickly growing in use. By learning how to build React components with this hands-on guide, you’ll fully understand how useful React can be in your organization.',
            img : 'book-react.jpg',
            link : 'https://www.amazon.com/Learning-React-Functional-Development-Redux/dp/1491954620'
        },
        {
            title : 'Learning Go',
            desc1 : 'Go is rapidly becoming the preferred language for building web services. While there are plenty of tutorials available that teach Go\'s syntax to developers with experience in other programming languages, tutorials aren\'t enough. They don\'t teach Go\'s idioms, so developers end up recreating patterns that don\'t make sense in a Go context.',
            desc2 : 'This practical guide provides the essential background you need to write clear and idiomatic Go.No matter your level of experience, you\'ll learn how to think like a Go developer. Author Jon Bodner introduces the design patterns experienced Go developers have adopted and explores the rationale for using them.',
            img : 'book-go.jpg',
            link : 'https://www.amazon.com/Learning-Go-Idiomatic-Real-World-Programming/dp/1492077216'
        }
    ];
    let popup = document.querySelector('.buy-popup');
    let gray_bg = document.querySelector('.gray-bg');
    let popup_title = document.querySelector('#related-books .buy-popup .popup-title');
    let popup_term1 = document.querySelector('#related-books .buy-popup .terms .term:nth-child(1)');
    let popup_term2 = document.querySelector('#related-books .buy-popup .terms .term:nth-child(2)');
    let popup_img = document.querySelector('#related-books .buy-popup .popup-img');
    let buy_btn = document.querySelector('#related-books .buy-popup .buy');
    for (let i = 0; i < books.length; i++) {
        if(books[i].title.toLowerCase().includes(book)){
            popup_title.innerHTML = books[i].title;
            popup_term1.innerHTML = books[i].desc1;
            popup_term2.innerHTML = books[i].desc2;
            popup_img.src = 'images/'+books[i].img;
            buy_btn.href = books[i].link;
        }
    }
    popup.style.display='flex';
    gray_bg.style.display='block';
}

function close_popup(){
    let popup = document.querySelector('.buy-popup');
    let gray_bg = document.querySelector('.gray-bg');
    popup.style.display='none';
    gray_bg.style.display='none';
}

function show_menu(){
    let menu = document.querySelector('#menu');
    let menu_btn = document.querySelector('.menu');
    close_popup();
    if(menu.style.top == '' || menu.style.top == '-1000px'){
        menu_btn.src = 'images/close.png';
        menu.style.top = '0';
    }
    else{
        menu_btn.src = 'images/menu.png';
        menu.style.top = '-1000px';
    }
}

function close_menu() {
    let menu = document.querySelector('#menu');
    let menu_btn = document.querySelector('.menu');
    menu_btn.src = 'images/menu.png';
    menu.style.top = '-1000px';
}