

const getInboxNumber = ()=> url = window.location.href.replace("https://mail.google.com/mail/u/","").substr(0,1)
   
const onClickButton = function(email){
    
    $("#aso_search_form_anchor").addClass("gb_Re")
    const search = encodeURI(`in:inbox from:${email}`)
    window.location.href= `https://mail.google.com/mail/u/${getInboxNumber()}/#search/${search}`

}

const addButton = function (){
    const email = $("body .go").parent().find("span").first().attr("email")
    const image = $("<img>").attr("src",chrome.extension.getURL('search-sender.png'))
    const button = $("<button>").addClass("ext-email-button").html(image    ).click(onClickButton.bind(null,email))
    $("body .go").parent().parent().append(button)
    console.log("added")
}
window.addButton = addButton
const callback = function(mutationsList, observer) {
    if($("body .go").length >0) {
        if($("body .go").parent().parent().find("button").length ==0) {
            console.log("adding")
            addButton()
        }
 }

};

// Looking to add button to page
const targetNode = $("body")[0]
const config = { attributes: true, childList: true, subtree: true };

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);
   

