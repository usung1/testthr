import React from 'react';
import axios from 'axios';


class register extends component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            password2: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // 페이지 내에서 값의 변화를 제어하는 함수
    handleChange(event) { 
        const target = event.target;
        this.setState({
            [target.name]: target.value,

        });
    }


    handleSubmit(event) {
        event.preventDefault();
        /* 여기에 입력받은 값들 API 전송 */

        axios
            .post("http://localhost:8000/users/register/", {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                password2: this.state.password2,
            })
            .then((response) => {
                console.log(response.data);
                this.props.history.push("/login");
            });
    }

    // axios는 자바스크립트에서 API로 요청을 보낼 때 쓰임 (프론트->백 요청)
    // .post의 좌측은 백엔드에서 정의한 필드이름, 우측은 리액트에서 유저가 입력한 데이터
    // 이런 방식으로 데이터를 넣음으로써 좌측의 필드명을 키로, 우측의 데이터를 값으로 하는 json데이터가 생성됨.
    // 백엔드 서버는 이 요청을 받아들이고 요청에 담겨온 json 데이터를 직렬화하여 회원을 생성하는 작업을 진행함.
 
    render() {

    }

}
export default register;


<section className="hero is-warning is-large">
<div className="hero-body">
  <div className="container">
    <div className="columns is-centered">
      <div className="column is-6-tablet is-5-desktop is-4-widescreen">
        
        <form onSubmit={this.handleSubmit} className="box">
          <div className="field">
            <label className="label">아이디</label>
            <div className="control has-icons-left">
              <input
                type="text"
                placeholder="아이디를 입력하세요."
                className="input"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                required
              />

            </div>
          </div>

          <div className="field">
            <label className="label">이메일</label>
            <div className="control has-icons-left">
              <input
                type="email"
                placeholder="이메일을 입력하세요."
                className="input"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">비밀번호</label>
            <div className="control has-icons-left">
              <input
                type="password"
                placeholder="*******"
                className="input"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">비밀번호 확인</label>
            <div className="control has-icons-left">
              <input
                type="password"
                placeholder="*******"
                className="input"
                name="password2"
                value={this.state.password2}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          
          <div className="field">
            <button
              className="button is-primary is-fullwidth"
              type="submit"
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</section>