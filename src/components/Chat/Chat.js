import "./chat.scss";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Avatar, Badge, Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styled from "@emotion/styled";
import SendIcon from "@mui/icons-material/Send";
import InputEmoji from "react-input-emoji";
import { RiTeamFill } from "react-icons/ri";
import { createRef, useContext, useEffect } from "react";
import { SocketContext } from "../../utils/SocketContext";

function Chat({ users, user }) {
	const scrolldiv = createRef();

	console.log(users, user);
	//! 1 - click sur avatar : get all messages entre les deux ids + affiche la conversation : mise en place d'un slice
	//! 2 - logique SOCKET - message privé / message tout le groupe
	//! 3 - afficher les notifications
	//! PS - afficher une ligne historique sous icone
	//! PS - indicateur "est en train d'écrire" cf dev.to

	//! SOCKET
	const socket = useContext(SocketContext);
	useEffect(() => {
		socket.auth = { userId: user.id };
		socket.connect();
		//?DEV
		socket.onAny((event, ...args) => {
			console.log(event, args);
		});
		//?

		socket.on("connect_error", (err) => {
			if (err.message === "invalid userId") {
				console.log("invalid userId");
			}
		});

		socket.on("users", (users) => {
			console.log(users);
			users.forEach((socketUser) => {
				const test = socketUser.userId === user.id;
				console.log(test);
			});
		});

		socket.on("user connected", (user) => {
			console.log("nouveau membre connecté", user);
		});

		socket.on("deco", (userId) => {
			console.log("Déco", userId);
		});

		return () => {
			socket.off("connect");
			socket.off("connect_error");
			socket.off("users");
			socket.off("user connected");
			socket.off("deco");
		};
	}, [socket, user]);

	useEffect(() => {
		const scrollToBottom = (node) => {
			node.scrollTop = node.scrollHeight;
		};
		scrollToBottom(scrolldiv.current);
	});

	const otherMembers = users.filter((member) => member.customer_id !== user.id);

	return (
		<div className="chat-container">
			<div className="mychat-cont">
				<div>
					<div className="notification">
						<h2>Chats</h2>

						<Badge badgeContent={1} color="error">
							{/* <Notificationcomp /> */}
						</Badge>
					</div>
				</div>
				<div className="recent-chat">
					<p className="Recent">Equipe</p>
					<div className="recent-user">
						{otherMembers &&
							otherMembers.map((member) => (
								<div className="chat-members" key={member.customer_id}>
									<img
										className="chat-members__img"
										src={member.profil_picture}
										alt=""
									/>
									<p>{member.firstname}</p>
								</div>
							))}
						<div className="chat-members">
							<RiTeamFill />
							<p>L'équipe</p>
						</div>
					</div>
				</div>
			</div>
			<div className="chattingpage">
				<div className="top-header">
					<div className="user-header">
						<Avatar />
						{/* <p className="user-name">{isGroupChat ? chatName : name}</p> */}
					</div>
					<div>
						<div className="user-fet">
							<SearchIcon />
							<CallIcon />
							<VideoCallIcon />
							<MoreHorizIcon />
						</div>
					</div>
				</div>
				<div ref={scrolldiv} className="live-chat">
					{/* {messages.map((el, index) => (
          <div
            key={index}
            className={
              el.sender._id != user._id ? "rihgtuser-chat" : "leftuser-chat"
            }
          >
            <div
              className={el.sender._id != user._id ? "right-avt" : "left-avt"}
            >
              <div className={ChatlogicStyling(el.sender._id, user._id)}>
                <p>{el.content}</p>
                <p className="time chat-time">
                  {new Date(el.createdAt).getHours() +
                    ":" +
                    new Date(el.createdAt).getMinutes()}
                </p>
              </div>

              {isSameSender(messages, index) ? (
                <Avatar
                  src={el.sender._id != user._id ? el.sender.pic : user.pic}
                />
              ) : (
                <div className="blank-div"></div>
              )}
            </div>
          </div>
        ))} */}
				</div>
				<div className="sender-cont">
					{/* <InputContWithEmog id={_id} token={token} socket={socket} /> */}
				</div>
			</div>
		</div>
	);
}

export default Chat;
