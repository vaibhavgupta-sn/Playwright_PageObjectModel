export class LoginPage {
    private page: any;
    private username_textbox: any;
    private password_textbox: any;
    private login_button: any;

    constructor(page: any) {
        this.page = page;
        this.username_textbox = page.getByLabel('Username');
        this.password_textbox = page.getByLabel('Password');
        this.login_button = page.getByRole('button', { name: 'Login' });
    }

    async gotoLoginPage(): Promise<void> {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(username: string, password: string): Promise<void> {
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }
}