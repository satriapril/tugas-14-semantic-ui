import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";
import { Container, Table, Search, Label, Menu, Icon, Grid, Feed, List } from "semantic-ui-react";

class App extends Component{
  render(){
    return(
      <div>
        <Container style={{marginTop:"3em"}}>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="3" textAlign="right">
                  <Search placeholder="Search document..."/>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="center">Nama Document</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Jenis File</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Panduan Belajar Javascript</Label>
                </Table.Cell>
                <Table.Cell textAlign="center">PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar CSS</Table.Cell>
                <Table.Cell textAlign="center">PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar React JS</Table.Cell>
                <Table.Cell textAlign="center">PDF</Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="3" textAlign="right">
                  <Menu floated="right" pagination>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron left"/>
                    </Menu.Item>
                    <Menu.Item as="a">1</Menu.Item>
                    <Menu.Item as="a">2</Menu.Item>
                    <Menu.Item as="a">3</Menu.Item>
                    <Menu.Item as="a">4</Menu.Item>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron right"/>
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>

          <Grid>
            <Grid.Column floated="left" width={12}>
              <Feed>
                <Feed.Event>
                  <Feed.Label>
                    <img alt="pict user" src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"/>
                  </Feed.Label>
                  <Feed.Content>
                    <Feed.Summary>
                      <Feed.User>Elliot Fu</Feed.User> added you as friends
                      <Feed.Date>3 hours ago</Feed.Date>
                    </Feed.Summary>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name="like"/>
                        4 Likes
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label>
                    <Icon name="pencil"/>
                  </Feed.Label>
                  <Feed.Content>
                    <Feed.Summary>
                      You submitted a new post to the page
                      <Feed.Date>3 days ago</Feed.Date>
                    </Feed.Summary>
                    <Feed.Extra text>
                      Saya Senang Belajar Bahasa Pemrograman
                    </Feed.Extra>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name="like"/>
                        11 Likes
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label>
                    <img alt="pict user" src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"/>
                  </Feed.Label>
                  <Feed.Content>
                    <Feed.Date>4 days ago</Feed.Date>
                    <Feed.Summary>
                      David added 2 new image
                    </Feed.Summary>
                    <Feed.Extra images>
                      <a href="/"> <img alt="pict comment" src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png"/> </a>
                      <a href="/"> <img alt="pict comment" src="https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png"/> </a>
                    </Feed.Extra>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name="like"/>
                        2 Likes
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Grid.Column>

            <Grid.Column floated="left" width={2}>
              <List>
                <List.Header>Website Terkait</List.Header>
                <List.Item>
                  <List.Icon name="linkify"/>
                  <List.Content>
                    <a href="https://google.com">Google</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify"/>
                  <List.Content>
                    <a href="https://facebook.com">Facebook</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify"/>
                  <List.Content>
                    <a href="https://semantic-ui.com">Semantic UI</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify"/>
                  <List.Content>
                    <a href="https://niomic.com">Niomic</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify"/>
                  <List.Content>
                    <a href="https://reactjs.org">React</a>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
