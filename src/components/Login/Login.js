import {Component} from 'react'
import {
  Container,
  SubContainer,
  Image,
  Head,
  Label,
  Form,
  Input,
  Element,
  LoginButton,
} from './styledComponents'

class LoginForm extends Component {
  state = {userid: '', pin: ''}

  //   componentDidMount() {
  //     this.getForm()
  //   }

  //   getForm = async () => {
  //     const {username, password} = this.state
  //   }
  userUpdate = event => {
    this.setState({userid: event.target.value})
  }

  PasswordUpdate = event => {
    this.setState({pin: event.target.value})
  }

  SubmissionForm = async event => {
    event.preventDefault()
    const {userid, pin} = this.state
    console.log(userid, pin)

    const userDetails = {userid, pin}
    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)

    console.log(response)
  }

  render() {
    const {userid, pin} = this.state
    return (
      <Container>
        <SubContainer>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
          <Form onSubmit={this.SubmissionForm}>
            <Head>Welcome</Head>
            <Element>
              <Label htmlFor="id">User Id</Label>
              <Input
                id="id"
                value={userid}
                onChange={this.userUpdate}
                placeholder="Enter User ID"
                type="text"
              />
            </Element>
            <Element>
              <Label htmlFor="password">Password</Label>
              <Input
                onChange={this.PasswordUpdate}
                value={pin}
                id="password"
                placeholder="Enter User ID"
                type="password"
              />
            </Element>
            <LoginButton type="submit">Login</LoginButton>
          </Form>
        </SubContainer>
      </Container>
    )
  }
}

export default LoginForm
