import './Message.css';

const name = "Artem";

function Message({name}) {
    return (
        <div className="Message">
           <h3>Hello, {name}</h3>
        </div>
    );
}

export default Message;
export { name };