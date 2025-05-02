document.getElementById("btn_add_link").addEventListener("click",function() {
    const containerRight = document.getElementById("profile-container-right");
    const template = document.getElementById("template-link-wrapper");
    const clone = template.content.cloneNode(true);
    
    
    const removeLink = clone.querySelector(".remove-link"); 
    removeLink.addEventListener("click", function() {
        const linkWrapper = clone.querySelector(".link-wrapper");  
        if(linkWrapper) {
            containerRight.removeChild(linkWrapper);
        }
    })

    containerRight.appendChild(clone); // append the child.

});

