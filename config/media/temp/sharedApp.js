class App extends Component {
    constructor(props) {
        super(props);
        console.log("[App.js] Constructor" );
        const token = localStorage.getItem("token");
        this.state = {
            // eslint-disble-next-line
            isLogin: token != "null",
        };
        console.log("[App.js] token: ", token );
        console.log("[App.js] isLogin: ", this.state.isLogin);
        this.doLogin = this.doLogin.bind(this);
        this.doLogout = this.doLogout.bind(this);
    }
}

