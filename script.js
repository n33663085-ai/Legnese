function searchScholarship() {
    let input = document.getElementById("search").value.toLowerCase();

    if (input.includes("венгр")) {
        window.location.href = "scholarships/hungary.html";
    } else if (input.includes("герман")) {
        window.location.href = "scholarships/germany.html";
    } else if (input.includes("турц")) {
        window.location.href = "scholarships/turkey.html";
    } else if (input.includes("сша")) {
        window.location.href = "scholarships/usa.html";
    } else {
        alert("Пока ничего не найдено. Скоро мы добавим больше стипендий!");
    }
}
