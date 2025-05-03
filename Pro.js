document.getElementById("btn_add_link").addEventListener("click",function() {
    const containerRight = document.getElementById("profile-container-right");
    const template = document.getElementById("template-link-wrapper");
    const clone = template.content.cloneNode(true);
    containerRight.appendChild(clone); // append the child.

});

document.getElementById("remove-link").addEventListener("click",function(){
    console.log("Remove link clicked");
    
});

