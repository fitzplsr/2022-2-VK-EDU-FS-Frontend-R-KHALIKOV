var current_chat_id = localStorage.getItem("current_chat")
if (!current_chat_id) {
    localStorage.setItem("current_chat", "-1")
}

var which_page = localStorage.getItem("page")
console.log("which page:"+which_page)
var is_chat = localStorage.getItem("chats")

if (!which_page || !is_chat) {
    localStorage.setItem("menu", "1")
    localStorage.setItem("dialog", "0")
    localStorage.setItem("page", "menu")
    console.log("1111111111111111")
    viewChats()
    
}
else {
    if (which_page === "menu") {
        localStorage.setItem("menu", "1")
        localStorage.setItem("dialog", "0")
        console.log("222222222222222")
        viewChats()
    }
    else {
        localStorage.setItem("menu", "0")
        localStorage.setItem("dialog", "1")
        let chat = document.querySelector(".chat")
        chat.removeChild(document.querySelector('.chat-show'))
        let chat_show = document.createElement('div')
        chat_show.className = 'chat-show'
        let start = document.createElement('div')
        start.setAttribute('id', 'start')
        chat_show.appendChild(start)
        let sp2 = document.getElementById('start-chat');
        let link2 = sp2.parentNode;
        link2.insertBefore(chat_show, sp2);
        console.log("33333333333333333")
        viewDialog(current_chat_id)
    }
} 

const back = document.querySelector('.back')
back.addEventListener('click', function(){ 
    setTimeout(viewChats, 200)
})

function viewChats(){
    
    localStorage.setItem("menu", "1")
    
    let chatsInfo = localStorage.getItem("chats")
    if (chatsInfo) {
        const dicts = JSON.parse(chatsInfo);
            for(const dict in dicts) {
                post_preview(dicts[dict]["info"])
            }
    }
    else {
        const dict = {"chat0":{"info":{"chat_id":"0", "chat_last_msg":"Hi, men", "unread-msgs": '1', "chat-time":"21:54", "user_name":"Boss"},
                    "messages":{"message0":{"id":"0", "user_id":"1", "name":"Boss", "text":"Hi, men", "time":"21:54"}}},
                    "chat1":{"info":{"chat_id":"1", "chat_last_msg":"Best wishes", "unread-msgs": '0', "chat-time":"21:50", "user_name":"Bob"},
                    "messages":{"message0":{"id":"0", "user_id":"2", "name":"Bob", "text":"Where is my money", "time":"21:50"},
                    "message1":{"id":"1", "user_id":"0", "name":"Me", "text":"Best wishes", "time":"21:51"}}}}
        for (let chat in dict) {
            post_preview(dict[chat]["info"]);
        }
        localStorage.setItem("chats", JSON.stringify(dict));
        localStorage.setItem("counter_chats", "0");
    }

    localStorage.setItem("page", "menu")
    localStorage.setItem("counter", "0")

    document.getElementById('dialog').style.display = "none";
    document.getElementById('menu').style.display = "flex";
    if (localStorage.getItem("dialog")==="1"){
        del_dialog()
    }
    localStorage.setItem("dialog", "0")
    let previews = document.getElementsByClassName('preview')
    for (let preview of previews) {
        preview.addEventListener("click", function () {
            setTimeout(viewDialog, 300, preview.querySelector(".chat-id").textContent);
        })
}

}
function del_dialog() {
    let chat = document.querySelector(".chat")
    chat.removeChild(document.querySelector('.chat-show'))
    let userline = document.querySelector(".user-line")
    userline.removeChild(document.querySelector(".user"))
    let chat_show = document.createElement('div')
    chat_show.className = 'chat-show'
    let start = document.createElement('div')
    start.setAttribute('id', 'start')
    chat_show.appendChild(start)
    let sp2 = document.getElementById('start-chat');
    let link2 = sp2.parentNode;
    link2.insertBefore(chat_show, sp2);
}

function post_preview(info) {
    const preview_box = document.createElement('button')
    preview_box.setAttribute('class', 'preview');

    const avatar = document.createElement('i');
    avatar.setAttribute('class', 'material-icons');
    avatar.setAttribute('id', 'avatar');
    avatar.textContent = 'account_circle';

    const chat_id = document.createElement('div')
    chat_id.setAttribute('class', 'chat-id')
    chat_id.textContent = info["chat_id"]

    const chat_name = document.createElement('div');
    chat_name.setAttribute('class', 'chat-name');
    chat_name.textContent = info["user_name"]

    const chat_last_msg = document.createElement('div');
    chat_last_msg.setAttribute('class', 'chat-last-msg')
    chat_last_msg.textContent = info["chat_last_msg"]

    const chat_info = document.createElement('div');
    chat_info.setAttribute('class', 'chat-info')
    chat_info.appendChild(chat_name);
    chat_info.appendChild(chat_last_msg);
    chat_info.appendChild(chat_id);

    const chat_time = document.createElement('div')
    chat_time.setAttribute('class', 'chat-time')
    chat_time.textContent = info['chat-time']
    let unread_msgs
    if (info["unread-msgs"] === "0"){
        unread_msgs = document.createElement('i')
        unread_msgs.setAttribute('class', 'material-icons')
        unread_msgs.setAttribute('id', 'msgs');
        unread_msgs.textContent = 'done_all'
    }
    else {
        unread_msgs = document.createElement('div')
        unread_msgs.setAttribute('class', 'unread-msgs')
        unread_msgs.textContent = info['unread-msgs']
    }

    const chat_nums = document.createElement('div')
    chat_nums.setAttribute('class', 'chat-nums')
    chat_nums.appendChild(chat_time)
    chat_nums.appendChild(unread_msgs)

    preview_box.appendChild(avatar)
    preview_box.appendChild(chat_info)
    preview_box.appendChild(chat_nums)

    var sp2 = document.getElementById('start-preview');
    var link2 = sp2.parentNode;
    link2.insertBefore(preview_box, sp2);
    }

const form = document.querySelector('form');
const input = document.querySelector('.form-input');

function viewDialog(chat_id) {

    let dict = JSON.parse(localStorage.getItem("chats"))
    dict["chat"+ chat_id]["info"]["unread-msgs"] = "0"
    dictJSON = JSON.stringify(dict)
    localStorage.setItem("chats", dictJSON)
    localStorage.setItem("dialog", "1")
    localStorage.setItem("menu", "0")

    let chat = document.querySelector(".chats-list")
    chat.removeChild(document.querySelector('.previews'))

    let previews = document.createElement('div')
    previews.className = 'previews'

    let start = document.createElement('div')
    start.setAttribute('id', 'start-preview')
    previews.appendChild(start)

    let sp3 = document.getElementById('start-chat-preview');
    let link1 = sp3.parentNode;
    link1.insertBefore(previews, sp3);

    localStorage.setItem("page", "dialog")
    current_chat_id = chat_id
    localStorage.setItem("current_chat", chat_id)

    document.getElementById('menu').style.display = "none";
    document.getElementById('dialog').style.display = "flex";
    let chatInfo = localStorage.getItem("chats")
    const dicts = JSON.parse(chatInfo);

    let name = dicts["chat" + chat_id]['info']['user_name']

    let user = document.createElement('div')
    user.className = 'user'

    let user_name = document.createElement('div')
    user_name.className = 'username'
    user_name.textContent = name

    let status = document.createElement('div')
    status.className = 'status'
    status.textContent = 'online'

    user.appendChild(user_name)
    user.appendChild(status)
    var sp2 = document.getElementById('start-dialog');
    var link2 = sp2.parentNode;
    link2.insertBefore(user, sp2);

    let counter = 0

    for(const dict in dicts["chat" + chat_id]["messages"]) {
        post(dicts["chat" + chat_id]["messages"][dict])
        
        counter += 1
    }
    localStorage.setItem("counter", String(counter))
}


form.addEventListener('submit', handleSubmit);
form.addEventListener('keypress', handleKeyPress);


function post(info){
    let chat_window = document.createElement('div')
    let id = "1"
    if (info["name"] === "Me") {
        id = "2"
    }
    chat_window.setAttribute('class', 'messageFromUser'+ id);

    const user_text = document.createElement('div');
    user_text.setAttribute('class', 'text');
    user_text.textContent = info["text"];

    const user_time = document.createElement('div');
    user_time.setAttribute('class', 'time');
    user_time.textContent = info["time"];

    const user_name = document.createElement('div');
    user_name.setAttribute('class', 'name');
    user_name.textContent = info["name"];

    chat_window.appendChild(user_time);
    chat_window.appendChild(user_text);
    chat_window.appendChild(user_name);

    let sp2 = document.getElementById('start');
    let link2 = sp2.parentNode;
    link2.insertBefore(chat_window, sp2);
    chat_window.scrollIntoView({block:"end", inline:"nearest"});
}

function handleSubmit(event) {
    event.preventDefault();
    const inputMessage = input.value.trim();
    if (!inputMessage) return ;
    input.value = '';
    let messageInfo = {};
    let dict = JSON.parse(localStorage.getItem("chats"))
    let count = String(Number(localStorage.getItem("counter"))+1);
    const now = new Date();

    messageInfo["user_id"] = "2";
    messageInfo["id"] = count;
    messageInfo["name"] = "Me";
    messageInfo["text"] = inputMessage;
    messageInfo["time"] = now.toLocaleTimeString("ru-Ru").substring(0,5);

    current_chat_id = localStorage.getItem("current_chat")
    dict["chat" + current_chat_id]['info']['chat_last_msg'] = inputMessage
    dict["chat" + current_chat_id]['info']['unread-msgs'] = "0"
    dict["chat" + current_chat_id]['info']['chat-time'] = messageInfo["time"]
    dict["chat" + current_chat_id]['messages']['message'+count] = messageInfo
    dictJSON = JSON.stringify(dict)
    localStorage.setItem("chats", dictJSON);
    localStorage.setItem("counter", count)

    post(messageInfo);
}

function handleKeyPress (event) {
    if (event.keyCode === 13) {
        form.dispatchEvent(new Event('submit'));
    }
}