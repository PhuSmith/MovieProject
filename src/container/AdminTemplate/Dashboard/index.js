import React, { Component } from "react";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import SingIn from "../../HomeTemplate/SingIn";
import AddUserPage from "../AddUserPage";
import Footer from "../../../components/Footer";

// import { mainListItems, secondaryListItems } from './listItems';





export default class Dashboard extends Component {
  a = 0;
  
  renderElement = (a) => {
    if (a === 0)
      return <SingIn />;
    else if (a === 1)
      return <AddUserPage />
    else
      return <Footer />
  }
  hello = () => {
    this.a = 1
    console.log(this.a);
    this.renderElement(this.a)
  };
  render() {
    return (
      <div>
        <CssBaseline />
        <AppBar position="absolute">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="open drawer">
              <MenuIcon />
            </IconButton>
            <Typography
              justify="flex-end"
              component="h2"
              variant="h3"
              color="inherit"
              noWrap
            ></Typography>
            <IconButton color="inherit">
              <Badge badgeContent={2} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent">
          <div>
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button onClick={this.hello}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Thêm người dùng" />
            </ListItem>
            <ListItem button onClick={this.hello}>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Quản lí thông tin người dùng" />
            </ListItem>

            <ListItem button onClick={this.hello}>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Quản lí vé phim" />
            </ListItem>
          </List>
          <Divider />
          <List></List>
        </Drawer>
        <main>

          <Container maxWidth="lg">
            <Grid justify="flex-end" container spacing={1}>
              {/* Chart */}
              {/* Recent Orders */}

              <Grid item xs={3} sm={7} md={8} lg={9}>
                <Paper>
                  {this.renderElement(this.a)}
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    );
  }
}
