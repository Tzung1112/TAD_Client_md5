import { useEffect, useState } from "react";

import "./main.scss"
import RouteSetup from "./routes/RouteSetUp";
import { Modal } from 'antd'
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "./stores";
import axios from "axios";
import { userAction } from "./stores/slices/user";
import api from "./services/api";
import { categoryAction } from "./stores/slices/category";
import { productAction } from "./stores/slices/product";
import ChatBox from "./components/chatbox/ChatBox";
import { Receipt, User } from "./interface";
import { Socket, io } from "socket.io-client";

function App() {
  const dispatch = useDispatch()
  const [openChat, setOpenChat] = useState(false);

  const userStore = useSelector((store: StoreType) => {
    return store.userStore
  })
  console.log("🚀 ~ file: App.tsx:22 ~ userStore ~ userStore:", userStore)
  const categoryStore: any = useSelector((store: StoreType) => {
    return store.categoryStore;
});
const productStore: any = useSelector((store: StoreType) => {
  return store.productStore;
});
useEffect(() => {
  if(!userStore.data) {
    let token = localStorage.getItem("token");
    if(token) {
      let socket: Socket = io("http://localhost:3001", {
        query: {
          token
        }
      })
      socket.on("connectStatus", (data: {status:boolean, message: string}) => {
        if(data.status) {
          console.log(data.message)
        }else {
          console.log(data.message)
        }
      })
      socket.on("disconnect", () => {
        dispatch(userAction.setData(null))
        console.log("đã out")
      })

      socket.on("receiveUserData", (user: User) => {
       dispatch(userAction.setData(user))
      })

      socket.on("receiveReceipt", (receipts: Receipt[]) => {
        dispatch(userAction.setReceipt(receipts))
       })

      socket.on("receiveCart", (cart: Receipt) => {
      dispatch(userAction.setCart(cart))
      })

      socket.on("cash-status", (status: boolean) => {
        if(status) {
          Modal.success({
            title: "Đã thanh toán thành công",
            content: "Cảm ơn bạn đã mua hàng",
            onOk: () => {
              console.log("đã vào!")
              window.location.href= "/purchase-history"
            }
          })
        }
      })

      socket.on("payQr", (url: string | null) => {
        dispatch(userAction.setCartPayQr(url))
        if(!url) {
          Modal.confirm({
            title: "Thanh toán thất bại",
            content: "Bạn có muốn thanh toán lại không?",
            onOk: () => {
              socket.emit("payZalo", {
                receiptId: userStore.cart?.id,
                userId: userStore.data?.id
              })
            }
          }) 
        }
      })

      dispatch(userAction.setSocket(socket))
    } 
  }
}, [userStore.reLoad])
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
    api.productApi.findAll()
    .then((res) => {
        dispatch(productAction.addProduct(res.data))
    }).catch((err) => {
        
    });
 
  }, [])

  useEffect(() => {
  }, [userStore])
  useEffect(()=>{

  },[categoryStore])
  useEffect(()=>{

  },[productStore])
  useEffect(() => {
    console.log("userStore.cart", userStore.cart)
  }, [userStore.cart])

  useEffect(() => {
    console.log("userStore.receipt", userStore.receipts)
  }, [userStore.receipts])

  return (
    <>
      {
        openChat == false
          ? <button  onClick={() => {
            setOpenChat(true)
          }}  style={{zIndex:"99",backgroundColor:"blue", position: "fixed", right: "50px", bottom: "50px", width:"70px", fontSize:"30px", display:"flex", justifyContent:"center", borderRadius:"30px", padding:"10px"}}><i className="fa-solid fa-comment-dots"></i></button>
          : <div style={{ width: "350px", position: "fixed", right: 0, bottom: 0 }}>
            <ChatBox open={openChat} setOpenChat={setOpenChat}/>
          </div>
      }
     <RouteSetup/>
    </>
  );
}

export default App;
