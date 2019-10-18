import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Container, Dropdown, Image, Grid, Segment, Divider, List, Form, Button, Icon } from 'semantic-ui-react';

class TopMenu extends React.Component{
  render(){
    return (
        <Menu borderless className="topmenu">
          <Menu.Item position="center">FREE SHIPPING ON U.S. ORDERS OVER $100</Menu.Item>
        </Menu>
    );
  }
}

class MiddleMenu extends React.Component{
  render(){
    return(
        <Menu borderless className="middlemenu">
          <Container>
            <Menu.Item>NEW ARRIVALS</Menu.Item>
            <Dropdown item text="APPAREL">
              <Dropdown.Menu>
                <Dropdown.Item>SHOP ALL</Dropdown.Item>
                <Dropdown.Item>SWEATERS & HOODIES</Dropdown.Item>
                <Dropdown.Item>T-SHIRTS</Dropdown.Item>
                <Dropdown.Item>TOPS</Dropdown.Item>
                <Dropdown.Item>JACKETS</Dropdown.Item>
                <Dropdown.Item>PANTS</Dropdown.Item>
                <Dropdown.Item>WOMEN</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="ACCESSORIES">
              <Dropdown.Menu>
                <Dropdown.Item>SHOP ALL</Dropdown.Item>
                <Dropdown.Item>HATS</Dropdown.Item>
                <Dropdown.Item>BEANIES</Dropdown.Item>
                <Dropdown.Item>BAGS</Dropdown.Item>
                <Dropdown.Item>SOCKS</Dropdown.Item>
                <Dropdown.Item>NECKLACES</Dropdown.Item>
                <Dropdown.Item>PATCHES & KEYCHAINS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>SALE</Menu.Item>
            <Menu.Item position="center"><Image position="center" src="//cdn.shopify.com/s/files/1/2166/8231/files/TeddyFreshlogo_500_color_180x.png?v=1559171259 1x, //cdn.shopify.com/s/files/1/2166/8231/files/TeddyFreshlogo_500_color_360x@2x.png?v=1559171259 2x"/></Menu.Item>
            <Menu.Item position="right">ACCOUNT</Menu.Item>
            <Menu.Item>SEARCH</Menu.Item>
            <Menu.Item>CART (0)</Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class Picture extends React.Component{
  render(){
    return(
      <Image src="//cdn.shopify.com/s/files/1/2166/8231/files/banner-1-gradient_1400x.jpg?v=1564572355 1400w" fluid />
    )
  }
}

class MerchandiseMenu extends React.Component{
  render(){
    return(
        <div className="website-background">
          <Menu borderless className="merchmenu">
            <Grid container centered columns={4}>
              <Grid.Column>NEW ARRIVALS</Grid.Column>
              <Grid.Column>BEST SELLERS</Grid.Column>
              <Grid.Column>BACK IN STOCK</Grid.Column>
            </Grid>
          </Menu>
        </div>
    )
  }
}

class Merchandise extends React.Component{
  render(){
    return(
        <div className="website-background">
          <Grid columns={4}>
            <Grid.Column>
              <Segment><Image src="//cdn.shopify.com/s/files/1/2166/8231/products/tf-coaches-jacket-primary-01-SQUARE_400x.jpg?v=1569601768 400w" size='medium' /></Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment><Image src="//cdn.shopify.com/s/files/1/2166/8231/products/anorak-jacket-primary-01-SQUARE_400x.jpg?v=1569602233 400w" size='medium' /></Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment><Image src="//cdn.shopify.com/s/files/1/2166/8231/products/dolman-mock-fleece-blue-01-SQUARE_400x.jpg?v=1569602291 400w" size='medium' /></Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment><Image src="//cdn.shopify.com/s/files/1/2166/8231/products/long-sleeve-color-block-polo-primary-01-SQUARE_400x.jpg?v=1569602376 400w" size='medium' /></Segment>
            </Grid.Column>
          </Grid>
          <Grid columns={4}>
            <Grid.Column>
              <Container textAlign='center'>
                COACHES JACKET
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Container textAlign='center'>
                SILICONE PATCH WINDBREAKER
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Container textAlign='center'>
                NEED A HUG CREWNECK
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Container textAlign='center'>
                BEAR PATCH LONG SLEEVE
              </Container>
            </Grid.Column>
          </Grid>
          <div className="price-set">
          <Grid columns={4}>
              <Grid.Column>
                <Container textAlign='center'>
                  <div className="price-color">$110</div>
                </Container>
              </Grid.Column>
              <Grid.Column>
                <Container textAlign='center'>
                  <div className="price-color">$89</div>
                </Container>
              </Grid.Column>
              <Grid.Column>
                <Container textAlign='center'>
                  <div className="price-color">$64</div>
                </Container>
              </Grid.Column>
              <Grid.Column>
                <Container textAlign='center'>
                  <div className="price-color">$50</div>
                </Container>
              </Grid.Column>
          </Grid>
          </div>
        </div>
    )
  }
}

class FooterMenu extends React.Component{
  render(){
    return(
        <div className="footer-background">
          <Grid columns='equal'>
              <Grid.Column width={7}>
                <div className="left-footer">
                JOIN OUR NEWSLETTER
                <Divider hidden />
                <List>
                  <List.Item><div className="footer-item">
                    GET NOTIFICATIONS ABOUT NEW ARRIVALS AND RESTOCKED ITEMS!
                  </div></List.Item>
                  <Divider fitted hidden />
                  <Divider fitted hidden />
                  <Form.Input placeholder='Enter your email address' />
                  <Divider fitted hidden />
                  <Divider fitted hidden />
                  <Divider fitted hidden />
                  <Button color='black'>
                    Subscribe
                  </Button>
                  <Divider hidden />
                  <Divider hidden />
                  <Divider hidden />
                  <Divider hidden />
                  <Divider hidden />
                  <Divider hidden />
                  <div className='footer-item'>TEDDY  FRESH © 2019</div>
                </List>
                </div>
              </Grid.Column>
              <Grid.Column width={3}>
                MAIN MENU
                <Divider hidden />
                <List>
                  <div className="footer-item">SHOP</div>
                  <Divider fitted hidden />
                  <Divider fitted hidden />
                  <Divider fitted hidden />
                  <div className="footer-item">NEW ARRIVALS</div>
                  <Divider fitted hidden />
                  <Divider fitted hidden />
                  <Divider fitted hidden />
                  <div className="footer-item">ACCESSORIES</div>
                  <Divider fitted hidden />
                  <Divider fitted hidden />
                  <Divider fitted hidden />
                  <div className="footer-item">LOOKBOOK</div>
                  <Divider fitted hidden />
                  <Divider fitted hidden />
                  <Divider fitted hidden />
                  <div className="footer-item">SALE</div>
                  <Divider fitted hidden />
                  <Divider fitted hidden />
                  <Divider fitted hidden />
                  <div className="footer-item">ARCHIVE</div>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                HELP
                <Divider hidden />
                <List>
                  <div className="footer-item">FAQ & SHIPPING/RETURNS</div>
                  <Divider fitted hidden />
                  <Divider fitted hidden />
                  <Divider fitted hidden />
                  <div className="footer-item">SIZE CHART</div>
                  <Divider fitted hidden />
                  <Divider fitted hidden />
                  <Divider fitted hidden />
                  <div className="footer-item">PRIVACY POLICY</div>
                  <Divider fitted hidden />
                  <Divider fitted hidden />
                  <Divider fitted hidden />
                  <div className="footer-item">WHOLESALE INQUIRIES</div>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <div className="footer-image"><Image src="//cdn.shopify.com/s/files/1/2166/8231/files/TeddyFreshlogo_500_white_500x.png?v=1559164516" size='small'/></div>
                <Divider fitted hidden />
                <Divider fitted hidden />
                <Divider fitted hidden />
                <div className="footer-item">SUPPORT@TEDDYFRESH.COM</div>
                <Divider hidden />
                <Menu borderless className="iconmenu">
                  <Menu.Item><Icon inverted name="facebook f" /></Menu.Item>
                  <Menu.Item><Icon inverted name="twitter" /></Menu.Item>
                  <Menu.Item><Icon inverted name="instagram" /></Menu.Item>
                </Menu>
              </Grid.Column>
          </Grid>
        </div>
    )
  }
}

class TeddyFresh extends React.Component {

  render() {
    return (
        <div>
          <TopMenu />
          <MiddleMenu />
          <Picture />
          <MerchandiseMenu />
          <Merchandise />
          <FooterMenu />
        </div>
  );
  }
}



ReactDOM.render(<TeddyFresh/>, document.getElementById('root'));