import GlobalStyle from "../src/theme/GlobalStyle";
import Head from "next/head";
import 'semantic-ui-css/semantic.min.css';
import React from 'react'
import {
  Checkbox,
  Grid,
  Button,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

function MyApp({Component, pageProps}){
    const [visible, setVisible] = React.useState(false)
		const callback = () => {
			setVisible(!visible)
	}
    return(
		<>
			<Head>
					<title>Orçamentos Panificadora Santa Clara</title>
					<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
			</Head>
			<GlobalStyle />
			<Grid columns={1}>
      <Grid.Column>
			<Button toggle onClick={callback}>
        Menu
      </Button>
      </Grid.Column>

      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
                    <Component {...pageProps}/>
                </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Grid.Column>
            </Grid>
        </>
    )
}
export default MyApp;
