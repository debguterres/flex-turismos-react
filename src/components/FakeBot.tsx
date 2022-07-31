import React, { useState } from "react";
import ChatBox from "./ChatBox";


const FakeBot = () => {

    const [showChatBox, showChatBoxSetter] = useState<boolean>(false);

    const chatButton = () => {

        return (
            <button
                className="btn"
                onClick={() => showChatBoxSetter(true)}
            >
                Vamos conversar!
            </button>
        );
    };

    const chatBoxSelector = () => {

        if (showChatBox) {
            return <ChatBox
                closeChatBox={showChatBoxSetter}
            />;
        }

        return chatButton();
    };

    return (
        <div className="fake-bot-container">
            {chatBoxSelector()}
        </div>
    );
};


export default FakeBot;
