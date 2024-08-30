//Go to Register page if user doesn't have an account
export function toRegisterPage() {
    $("#toRegister").on("click", () => {
        window.location.href="/register";
    });
}