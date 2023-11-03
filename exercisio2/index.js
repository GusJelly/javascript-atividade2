const first_name = document.querySelector("#tb_firstName");
const last_name = document.querySelector("#tb_lastName");
const email = document.querySelector("#tb_email");
const button = document.querySelector("#btn_add");
const tableBody = document.querySelector(".table tbody");

button.addEventListener("click", () => {
    let message = "";
    if (first_name.value.length < 3 || first_name.value === "") {
        message += "First name is invalid!\n";
    }
    if (last_name.value.length < 3 || last_name.value === "") {
        message += "Last name is invalid!\n";
    }
    if (email.value.length < 3 || email.value === "") {
        message += "Email is invalid!\n";
    }

    if (message === "") {
        tableBody.innerHTML += `
            <tr>
                <td>${first_name.value}</td>
                <td>${last_name.value}</td>
                <td>${email.value}</td>
            </tr>
        `
        first_name.value = "";
        last_name.value = "";
        email.value = "";
    } else {
        window.alert(message);
    }
})
