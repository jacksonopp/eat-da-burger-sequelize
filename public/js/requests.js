const submitBtn = document.getElementById("burger-submit-btn");
// add a burger
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const newBurger = document.getElementById("burger-input").value;
    console.log(newBurger);
    // api post request
    axios.post("/api/burger", {
        burger_name: newBurger
    })
    window.location.reload();
})

//update a burger
document.querySelectorAll(".move-button").forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.target.getAttribute("data-value");
        // api put request
        axios.put(`/api/burger/${id}`, {})
        window.location.reload();
    })
})