import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homepage     from "./containers/homepage";
import Catalogpage  from "./containers/catalogpage";
import CartPage     from "./containers/cartpage";
import WishList     from "./containers/wishlist";
import Profile      from "./containers/profile";
import AddressBook  from "./containers/addressbook";
import LoyaltyPage  from "./containers/loyaltypage";
import OrdersPage   from "./containers/orderspage";
import LoginReg     from "./containers/LoginReg";
import SecureCheckout     from "./containers/securecheckout";
import Payment            from "./containers/payment";
import OrderConfirmation  from "./containers/orderconfirmation";
import SearchContainer    from "./containers/SearchContainer";

var pathname = "/"

const Routes = props => {
  return (
      <Switch>
        <Route exact path={pathname} component={Homepage}/>
        <Route exact path={pathname+"login"} component={LoginReg} />
        <Route exact path={pathname+"register"} component={LoginReg} />
        <Route exact path={pathname+"forgotpassword"} component={LoginReg} />
        <Route exact path={pathname+"cart"} component={CartPage} />
        <Route exact path={pathname+"customer/profile"} component={Profile} />
        <Route exact path={pathname+"customer/address"} component={AddressBook} />
        <Route exact path={pathname+"customer/wishlist"} component={WishList} />
        <Route exact path={pathname+"customer/loyalty"} component={LoyaltyPage} />
        <Route exact path={pathname+"customer/orders"} component={OrdersPage} />
        <Route exact path={pathname+"checkout"} component={SecureCheckout} />
        <Route exact path={pathname+"payment"} component={Payment} />
        <Route exact path={pathname+"paymentconirmation"} component={OrderConfirmation} />
        <Route exact path={pathname+"search"} component={SearchContainer} />
        <Route path={pathname+"product/*"} component={Catalogpage} />
        <Route path="*" component={Catalogpage} />
      </Switch>
  )
}

export default Routes


