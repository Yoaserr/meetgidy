function validateForm() {
    if (
        document.getElementById("name").value === "" ||
        document.getElementById("email").value === "" ||
        document.getElementById("service").value === ""
    ) {
        alert("Please fill all required fields.");
        return false;
    }
    return true;
}
