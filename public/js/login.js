export async function login() {
  $("#submitBtn").on("click", async () => {
    var username = $("#username").val();
    var pass = $("#password").val();
    console.log(username);
    console.log(pass);

	const result = await fetch("http://localhost:5000/api/v1/user", {
		method: "POST",
		headers: {
			"Content-type": "application/json"
		},
		body: JSON.stringify({
			username: username,
			password: pass
		})
	})

	if (result.status != 200) {
		
	}

	const data = await result.json();
	
});
}
