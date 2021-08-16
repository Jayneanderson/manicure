//O que eu preciso fazer?
//quando estiver com 




var Card = {
    open() {
        const getIcon = document.querySelector(".contact-icon")
        var getCard = document.querySelector("#contact")
        
        getCard.style.display="none";
        document.querySelector("#contactClick").style.display="flex";
        console.log(getCard)
    },
    
    close() {
        document.querySelector("#contactClick").style.display="none";
        var getCard = document.querySelector("#contact")
        getCard.style.display="flex";

    }
};