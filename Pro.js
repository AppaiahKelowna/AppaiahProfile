document.getElementById("btn_add_link").addEventListener("click",function() {
    const linkContainer = document.getElementById("profile-container-right").querySelector("div");;
    const newLink = document.createElement("a");
    newLink.innerHTML = '<a><i class="fas fa-file-alt"></i>New link</a>';
    linkContainer.insertBefore(newLink, document.getElementById("btn_add_link"));
});