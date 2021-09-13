var Card = {
    open() {
        const getIcon = document.querySelector(".contact-icon")
        var getCard = document.querySelector("#contact")
        
        getCard.style.display="none";
        document.querySelector("#contactClick").style.display="flex";
    },
    
    close() {
        document.querySelector("#contactClick").style.display="none";
        var getCard = document.querySelector("#contact")
        getCard.style.display="flex";

    }
};
