function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

loadComponent("navbar", "navbar.html");
loadComponent("sidebar", "sidebar.html");
loadComponent("content", "content.html");
loadComponent("table", "table.html");
loadComponent("footer", "footer.html");
