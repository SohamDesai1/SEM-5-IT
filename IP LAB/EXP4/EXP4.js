let Pass = document.getElementById("password");
let show = document.getElementById("show");
let user = document.getElementById("user");
show.onclick = () => {
  if (Pass.value.length > 0) {
    if (Pass.type === "password") {
      Pass.setAttribute("type", "text");
    } else {
      Pass.setAttribute("type", "password");
    }
  }
};

function validate() {
  let pswrd = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*`~-]).{8,}$";
  if (user.value.length <= 0 || Pass.value.length <= 0) {
    console.log("no input");
    alert("Please enter all the fields")
  }
  if (Pass.value.match(pswrd)) {
    console.log("valid");
    alert("Welcome");
  }
  if (!Pass.value.match(pswrd)) {
    console.log("not valid");
    alert("Password is not valid");
  }
}
