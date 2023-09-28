import { useEffect, useState } from "react";
import ChatBox from "./components/chatbox/ChatBox";
import "./main.scss"
import RouteSetup from "./routes/RouteSetUp";
import { Modal } from 'antd'
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "./stores";
import axios from "axios";
import { userAction } from "./stores/slices/user";
import api from "./services/api";
import { categoryAction } from "./stores/slices/category";

function App() {
  const dispatch = useDispatch()
  const userStore = useSelector((store: StoreType) => {
    return store.userStore
  })

  /* Check Token */
  useEffect(() => {
    axios.post("http://127.0.0.1:4000/api/v1/authentication", {
      token: localStorage.getItem("token")
    })
      .then(res => {
        if (res.status == 200) {
          dispatch(userAction.setData(res.data.data))
        } else {
          localStorage.removeItem("token")
        }
      }).catch(err => {
        // localStorage.removeItem("token")
      })
    api.categoryApi.findCategory()
     .then(res => {
     dispatch(categoryAction.addCategory(res.data.data))
    })
 
  }, [])

  useEffect(() => {
  }, [userStore])

  const [openChat, setOpenChat] = useState(false);

  return (
    <>
     {/*  {
        openChat == false
          ? <button onClick={() => {
            Modal.confirm({
              content: "Mở khung chat với tài khoản của bạn?",
              onOk: () => {
                setOpenChat(true)
              }
            })
          }} style={{ position: "fixed", right: "50px", bottom: "50px" }}>Open Chat</button>
          : <div style={{ width: "400px", position: "fixed", right: 0, bottom: 0 }}>
            <ChatBox open={openChat} />
          </div>
      } */}
     <RouteSetup/>
    </>
  );
}

export default App;
