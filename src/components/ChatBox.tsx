import React, { useEffect, useRef, useState } from "react";


type Message = {
    source: "customer" | "bot";
    message: string;
    datetime: string;
};


interface ChatBoxProps {
    closeChatBox: Function;
}


/**
 * Provide the current time to for message tracking.
 * 
 * @returns The current time as a string.
 */
const getCurrentDateTime = (): string => {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    return `${hours}:${minutes}:${seconds}`;
};


const ChatBox = (props: ChatBoxProps) => {

    const messageDivRef = useRef<null | HTMLDivElement>(null);

    const [messages, messagesSetter] = useState<Array<Message>>([
        {
            source: "bot",
            message: "Olá! Como posso te ajudar?",
            datetime: getCurrentDateTime(),
        }
    ]);

    const [messageState, setMessageState] = useState<string>("");

    const [isBotMessage, setIsBotMessage] = useState<boolean>(false);

    useEffect(() => {

        let lastMessage = messages.at(-1);

        if (lastMessage && lastMessage.source === "customer") {
            askBot(lastMessage);
        }

    }, [messages]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messageDivRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    /**
     * Include a new message at the message array.
     * 
     * @param message The message to be included at the message array.
     */
    const updateMessageList = (message: Message) => {

        messagesSetter([
            ...messages,
            message,
        ]);

        setIsBotMessage(!isBotMessage);
        setMessageState("");
    };

    /**
     * 
     * @param message Evaluate the 
     */
    const askBot = (message: Message) => {

        updateMessageList({
            message: message.message,
            source: "bot",
            datetime: getCurrentDateTime(),
        });

    };

    const handleMessage = (event: any) => {

        if (event.key !== 'Enter') return;
        event.preventDefault();

        const currentMessage = event.target.value;

        if (!currentMessage) return;

        let newMessage: Message = {
            message: currentMessage,
            source: "customer",
            datetime: getCurrentDateTime(),
        };

        updateMessageList(newMessage);
    };

    return (
        <div className="chatbox-container">
            <div className="message-box-header">
                <img
                    className="flex-bot-img"
                    src="FlexBot.png"
                />
                <p>
                    FlexBot
                </p>
                <button
                    className="button-close-chatbox"
                    onClick={() => props.closeChatBox(false)}
                >
                    &times;
                </button>
            </div>
            <div className="message-box">
                {messages.map((item: Message, i: number) => (
                    <div
                        key={i}
                        className={`message ${item.source}`}
                    >
                        <small className={`message-meta ${item.source}`}>
                            {item.source} {item.datetime}
                        </small>
                        <p>{item.message}</p>
                    </div>
                ))}
                <div ref={messageDivRef} />
            </div>
            <div className="message-input">
                <input
                    className="message-input-field"
                    type="text"
                    id="message"
                    name="message"
                    value={messageState}
                    placeholder="Digite sua mensagem."
                    onChange={event => setMessageState(event.target.value)}
                    onKeyDown={event => handleMessage(event)}
                />
            </div>
        </div>
    );
};


export default ChatBox;
