const mobileNav = () =>{
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');
    
    //state
    let isMobileNavOpen = false;

    //hamburger btn
    headerBtn.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        if(isMobileNavOpen){
            globalThis.scrollTo({ top: 0, left: 0, behavior: "instant" });
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        }else{
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    });

    //menu links
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMobileNavOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        })
    });
};

export default mobileNav;

