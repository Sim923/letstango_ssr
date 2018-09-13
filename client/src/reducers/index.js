import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import PostsReducer from "./reducer_posts";
import MenuReducer from "./reducer_menu";
import HomepageReducer from "./reducer_homepage";
import CatalogReducer from "./reducer_catalog";
import CartReducer from "./reducer_cart";
import WishListReducer from "./reducer_wishlist";
import { Loyalty, Orders, Profile, Address} from "./reducer_customer";

import { authentication } from './authentication.reducer';
const rootReducer = combineReducers({
  menu: MenuReducer,
  posts: PostsReducer,
  form: formReducer,
  homepage: HomepageReducer,
  catalog: CatalogReducer,
  cart: CartReducer,
  wishlist: WishListReducer,
  loyalty: Loyalty,
  orders: Orders,
  profile: Profile,
  address:Address,
  authentication,
});

export default rootReducer;
