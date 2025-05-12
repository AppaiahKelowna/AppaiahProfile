document.addEventListener("DOMContentLoaded",function() {
    // 1. get elements from the local storage.
    const jsonEle = localStorage.getItem("template-links");
    // 2. get the parent elements.
    const rightContainer = document.getElementById("profile-container-right");
    // 3. convert Json to html
    const divLink = JSON.parse(jsonEle || []);

    Array.from(divLink).forEach(html => {
        const div = document.createElement("div");
        div.innerHTML = html;
        rightContainer.appendChild(div);
    })

    const removeBtn = document.getElementById("remove-link");
    removeBtn.addEventListener("click",function(e){
        const linkWrapper = removeBtn.closest(".link-wrapper");
        if(linkWrapper){
            if(rightContainer.contains(linkWrapper))
            // Array.from(divLink).reduce()
            console.log("true consition");
            rightContainer.removeChild(linkWrapper);
        }
    });
});

document.getElementById("btn_add_link").addEventListener("click",function() {
    const containerRight = document.getElementById("profile-container-right");
    const template = document.getElementById("template-link-wrapper");
    const clone = template.content.cloneNode(true);
    containerRight.appendChild(clone); // append the child.

    // 1. get all 'link-wrapper' elements
    const linkWrappers = containerRight.querySelectorAll(".link-wrapper");
    // 2. convert html to String.
    const htmlEle = Array.from(linkWrappers).map(ele => ele.outerHTML);
    // 3. store in local Storage.
    localStorage.setItem("template-links", JSON.stringify(htmlEle));
});


