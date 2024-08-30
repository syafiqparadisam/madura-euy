//Go to login page if user already have an account
export function toLoginPage() {
    $("#toLogin").on("click", () => {
        window.location.href="/login";
    });
}