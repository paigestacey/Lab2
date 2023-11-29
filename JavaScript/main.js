
alert('Hello, World!');

document.addEventListener("DOMContentLoaded", function () {
    function formatDate(date) {
        const options = { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" };
        return new Date(date).toLocaleString("en-US", options);
    }

    const lastUpdatedElement = document.getElementById("lastUpdated");

    const currentDate = new Date();
    lastUpdatedElement.textContent = formatDate(currentDate);
});





