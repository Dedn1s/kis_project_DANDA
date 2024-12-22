import GlobalHook from "use-global-hook";
import * as actions from "./actions";

const initialState = {
  
  products_ids: [1, 2, 3],

};

const useGlobal = GlobalHook( initialState, actions );

export default useGlobal;
