import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardFooter,
  MDBIcon,
  MDBBtn
} from "mdb-react-ui-kit";
import './chatBox.scss'
import { Socket, io } from "socket.io-client";
import moment from 'moment';
import { useSelector } from "react-redux";
import { StoreType } from "@/stores";
import { message } from "antd";
interface Data {
  open: boolean,
  setOpenChat: Function
}
export default function App(data: Data) {
  const userStore = useSelector((store: StoreType) => {
    return store.userStore
  })
  const [socketClient, setSocketClient] = useState<null | Socket>(null)
  const [messageData, setMessageData] = useState<any[]>([])
  const [inputContent, setInputContent] = useState("");

  const [showSendIcon, setShowSendIcon] = useState(false);

  useEffect(() => {
    if (data.open) {
      /* Connect */
      setSocketClient(io(`http://127.0.0.1:4000`, {
        query: {
          "token": localStorage.getItem("token")
        }
      }))
    } else {
      /* Disconnect */
      socketClient?.disconnect();
      setSocketClient(null)
    }
  }, [data.open])

  useEffect(() => {
    if (socketClient) {
      console.log("vào client")
      socketClient.on('connectStatus', (data: any) => {
        // console.log("data", data)
        //alert(data)
      })

      socketClient.on('historyMessage', (data: any) => {
        // console.log("vào")
        console.log("data", data);
        setMessageData(data);
       
      })
    }
  }, [socketClient])

  useEffect(()=>{
    let chatContentBody = document.getElementById("chatContentBody");
    chatContentBody!.scrollTop =chatContentBody!.scrollHeight;
  },[messageData])
  const sendMessage = () => {
    if (inputContent.trim() !== '') {
      socketClient?.emit('createMessage', {
        socketId: socketClient?.id,
        userId: (userStore! as any).id,
        content: inputContent,
      });
      setInputContent('');
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Ngăn chặn hành vi mặc định của phím "Enter" (nếu có) - chẳng hạn như gửi biểu mẫu.
      sendMessage(); // Gọi hàm sendMessage khi "Enter" được nhấn.
    }
  };


  return (
    <MDBContainer fluid className="py-4"  style={{zIndex:"99"}}>
      <MDBRow className="d-flex justify-content-center" style={{zIndex:"99"}}>
        <MDBCol>
          <MDBCard id="chat2" style={{ borderRadius: "15px", border: "1px solid grey", zIndex:"99999"}}>
            <MDBCardHeader className="d-flex justify-content-between align-items-center p-3">
              <h5 className="mb-0">AN PHUOC SHOP</h5>
              
              <i style={{fontSize:"30px"}} onClick={() => data.setOpenChat(false)} className="fa-regular fa-circle-xmark"></i>
            </MDBCardHeader>
            {/* Nơi Render Các Đoạn Chat */}
            <div
             id="chatContentBody"
              style={{ position: "relative", height: "300px", overflowY: "auto", overflowX:"hidden"}}
            >
              <MDBCardBody>
                {
                  messageData.map(message => {
                    if (message.adminId != null) {
                      return (
                        <div key={Math.random() * Date.now()} className="d-flex flex-row justify-content-start">
                          <img
                            src="../img/logo/logo.png"
                            alt="avatar 1"
                            style={{ width: "45px", height: "100%" }}
                          />
                          <div className="content">
                            <p
                              key={Math.random() * Date.now()}
                              className="small p-2 ms-3 mb-1 rounded-3"
                              style={{ backgroundColor: "#f5f6f7", width:"200px"}}
                            >
                              {message.content}
                            </p>
                            <p className="small ms-3 mb-3 rounded-3 text-muted" >
                              {moment(new Date(Number(message.time))).format('LT')}
                            </p>
                          </div>
                        </div>
                      )
                    } else {
                      return (
                        <div key={Math.random() * Date.now()} className="d-flex flex-row justify-content-end">
                          <div className="content">
                            <p
                              key={Math.random() * Date.now()}
                              className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary"
                              style={{ backgroundColor: "#f5f6f7" ,width:"200px"}}
                            >
                              {message.content}
                            </p>
                            <p className="small ms-3 mb-3 rounded-3 text-muted">
                              {moment(new Date(Number(message.time))).format('LT')}
                            </p>
                          </div>
                          <img
                            src={message?.user?.avatar}
                            alt="no Image"
                            style={{ width: "45px", height: "45px", borderRadius: "50%" }}
                          />
                        </div>
                      )
                    }
                  })
                }

              </MDBCardBody>
            </div>
            <MDBCardFooter className="text-muted d-flex justify-content-start align-items-center p-3">
              <img
                src={`${userStore.data && (userStore.data! as any).avatar}`}
                alt="avatar 3"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
              <input
                type="text"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Type message"
                value={inputContent}
                onChange={(e) => {
                  setInputContent(e.target.value)
                }}
                onKeyPress={handleKeyPress}
              ></input>
              <a className="ms-1 text-muted" href="#!">
                <MDBIcon fas icon="paperclip" />
              </a>
              <a className="ms-3 text-muted" href="#!">
                <MDBIcon fas icon="smile" />
              </a>
              {inputContent != "" ? <span onClick={() => {
                sendMessage()
                setInputContent("")
              }} className="ms-3">
                <MDBIcon fas icon="paper-plane active" />
              </span> : <span onClick={() => {
                sendMessage()
                setInputContent("")
              }} className="ms-3">
                <MDBIcon fas icon="paper-plane" />
              </span>}
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}